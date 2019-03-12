import { CollectionAbstract as Collection } from '../lib/collection.abstract';
import { TagModel as Tag } from './tag.model';

/**
 * @name TagsCollection
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @class
 * @description
 * Collection class (uses ES6+ Map)
 *
 * @imports {@link Tag}
 * @imports {@link Collection}
 * @extends {@link Collection}
 * @exports TagsCollection
 *
 */
export class TagsCollection extends Collection {
  constructor() {
    super();
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
   * @returns {Map<string, Tag>} properties
   */
  public collection(): Map<string, Tag> {
    return super.collection();
  }

  /**
   * Returns a Tag corresponding to the key
   * @param {string} key
   * @returns {Tag}
   */
  public get(key: string): Tag {
    return super.get(key);
  }

  /**
   * Adds a Tag to the collection.
   * @param key
   * @param caption - label to display on the tag
   * @returns {Tag}
   */
  public add(key: string, caption?: string): Tag {
    let tag: Tag;
    if (this.exists(key)) {
      // Already exists, up the count
      tag = this.get(key);
      tag.caption = caption;
      tag.count++;
    } else {
      // New item
      tag = super.add(key, new Tag(key, caption));
    }
    return tag;
  }

  /**
   * Remove an item from the collection.
   * Returns true on success or false if the key doesn't exist
   * @param {string} key
   * @returns {boolean}
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
