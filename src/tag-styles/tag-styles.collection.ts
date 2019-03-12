import { CollectionAbstract as Collection } from '../lib/collection.abstract';
import { TagStyleModel as TagStyle } from './tag-style.model';
import { BuildInStylesCollection as BuildInStyles } from '../style-templates';

/**
 * @name TagStylesCollection
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @class
 * @description
 * Collection class (uses ES6+ Map)
 *
 * @imports {@link TagStyle}
 * @imports {@link Collection}
 * @extends {@link Collection}
 * @exports TagStylesCollection
 *
 */
export class TagStylesCollection extends Collection {

  constructor() {
    super();
    // Load built-in styles
    const buildInStyles = new BuildInStyles();
    buildInStyles.styles.forEach((fn, name) => {
      // Here we add the build-in styles to the style collection
      // Since the buildIn styles are stored as functions that return a style,
      // we exec them here and store the outputted style.
      super.add(name, fn);
    });
  }

  /**
   * Returns the count of the collection
   * @returns {number}
   */
  public count(): number {
    return super.count();
  }

  /**
   * Checks if the key already exists in the collection
   * @param {string} key
   * @returns {boolean}
   */
  public exists(key: string): boolean {
    return super.exists(key);
  }

  /**
   * Returns the entire collection
   * @returns {Map<string, TagStyle>} properties
   */
  public collection(): Map<string, TagStyle> {
    return super.collection();
  }

  /**
   * Returns a TagStyle corresponding to the key
   */
  public getFn(key: string) {
    return super.get(key);
  }

  /**
   * Adds a TagStyle to the collection.
   */
  public add(name: string): TagStyle {
    return super.add(name, new TagStyle(name));
  }

  /**
   * Remove a TagStyle from the collection.
   * Returns true on success or false if the key doesn't exist
   */
  public remove(key: string) {
    return super.remove(key);
  }

  /**
   * Clears the entire collection
   */
  public clear(): void {
    super.clear();
  }
}
