import { TagsCollection as Tags, TagModel as Tag } from './tags';
import {
  TagStylesCollection as TagStyles,
  TagStylePropertyModel as Property
} from './tag-styles';

/**
 * @name ConsoleProxy
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @class
 * @description
 * Add dynamic content to the console methods at run-time with preservation of
 * original call position and line number (ES6, ES6-Proxy).
 *
 * ref: https://www.keithcirkel.co.uk/metaprogramming-in-es6-part-3-proxies
 * ref: http://exploringjs.com/es6/ch_proxies.html#_intercepting-method-calls
 *
 */
class ConsoleProxy {
  private _isActive = false;
  private readonly _nativeConsole: Console;
  private readonly _proxiedConsole: object;
  private readonly _styles: TagStyles;
  private readonly _tags: Tags;

  constructor(tags: Tags, styles: TagStyles) {
    // Reference the tags and the styles collections
    this._tags = tags;
    this._styles = styles;
    // Store the native console.log function so we can put it back later
    this._nativeConsole = console as Console;
    // Create a proxy for the console Object (assert type)
    this._proxiedConsole = this._createProxy(
      console,
      // pass the tags and the styles to our proxy
      this._tags,
      this._styles,
      // Pass the native Console object and the Tags- and Styles (as functions!)
      this._getTagsString,
      this._getStylesArray
    ) as Console;
  }

  // ----------------------
  // Public methods
  // ----------------------

  start() {
    if (!this._isActive) {
      // Replace the native console object with our proxied console object
      console = this._proxiedConsole as Console;
      this._isActive = true;
    }
  }

  stop() {
    if (this._isActive) {
      // Restore to native console object
      console = this._nativeConsole as Console;
      this._isActive = false;
    }
  }

  // ----------------------
  // Private methods
  // ----------------------

  private _getTagsString(tags: Tags): string {
    // TODO: Don't rebuild it every time
    let str = '';
    tags.collection().forEach((tag: Tag) => {
      str += `%c${tag.caption}`;
      if (tag.count > 1) {
        str += `[${tag.count}]`;
      }
    });
    return str;
  }

  private _getStylesArray(tags: Tags, styles: TagStyles): Array<string> {
    // TODO: Don't rebuild it every time
    const mainArr: Array<string> = [];
    let propertyArr: Array<string> = [];

    tags.collection().forEach((tag: Tag) => {
      propertyArr = [];
      // Grab the style model
      const styleFn = styles.getFn(tag.styleName);

      // Go through each Tag and grab the assigned style's properties
      styleFn(tag.tagColor, tag.textColor)
        .properties
        .forEach((prop: Property) => {
          // Push the properties onto the property array
          propertyArr.push(`${prop.name}:${prop.value};`);
        });

      // Store all the properties for one style-tag as a string
      mainArr.push(propertyArr.join(''));
    });
    // We return the mainArr that consists of an array with concatenated properties for each tag
    return mainArr;
  }

  /**
   * The Proxy constructor takes two arguments, an initial Object that you
   * want to wrap with the proxy and a set of handler hooks.
   * In other words, Proxies return a new (proxy) object which wraps the
   * passed in object, but anything you do with either effects the other.
   */

  /**
   * @param {Console} orgConsole
   * @param {Tags} tags - {@link Tags}
   * @param {TagStyles} styles - {@link TagStyles}
   * @param {Function} tagsFn
   * @param {Function} stylesFn
   * @private
   */
  private _createProxy(
    orgConsole: Console,
    tags: Tags,
    styles: TagStyles,
    tagsFn: { (tags: Tags): string; (arg0: Tags): void },
    stylesFn: {
      (tags: Tags, styles: TagStyles): Array<string>;
      (arg0: Tags, arg1: TagStyles): void;
    }
  ) {
    const handler = {
      /**
       * 'get' is the trap-function.
       * It will be invoked instead of the original method.
       * e.a. console.log() will call: get(console, log) {}
       */
      get(target: any, property: string) {
        /**
         * In this case, we use the trap as an interceptor. Meaning:
         * We use this proxy as a sort of pre-function call.
         * Important: This won't get invoked until a call to a the actual
         * method is made.
         */

        /**
         * We grab the native method.
         * This is the native method/function of your original/target object.
         * e.a. console.log = console['log'] = target[property]
         * e.a. console.info = console['info'] = target[property]
         */
        const nativeFn = target[property];

        /**
         * Here we bind the native method and add our dynamic content
         * We passed in the tags and styles as functions, so they
         * can be executed within this scope.
         */
        const tagString = tagsFn(tags);
        const colorArr = stylesFn(tags, styles);

        return nativeFn.bind(this, tagString, ...colorArr);
      }
    };
    return new Proxy(orgConsole, handler);
  }
}

export default ConsoleProxy;
