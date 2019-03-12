import ConsoleProxy from './console-proxy';
import { TagsCollection as Tags, TagModel as Tag } from './tags';
import { TagStylesCollection as TagStyles } from './tag-styles';

/**
 * @name ConsoleTags
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @class
 * @description
 * Add CSS-styled tags to your console log output.
 */
class ConsoleTags {
  private _consoleProxy: ConsoleProxy;
  private readonly _tags: Tags;
  private readonly _styles: TagStyles;

  constructor() {
    this._tags = new Tags();
    this._styles = new TagStyles();
    this._consoleProxy = new ConsoleProxy(this._tags, this._styles);
  }

  start() {
    this._consoleProxy.start();
  }

  stop() {
    this._consoleProxy.stop();
  }

  /**
   * Adds a tag to your console output
   * @param {string} key
   * @param {string} caption
   * @returns {Tag}
   */
  add(key: string, caption?: string): Tag {
    return this._tags.add(key, caption);
  }

  /**
   * Remove a tag from the console output
   * @param {string} key
   */
  remove(key: string): void {
    this._tags.remove(key);
  }
}

export default ConsoleTags;
