/**
 * @name CollectionAbstract
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @class
 * @abstract
 * @description
 * Collection class abstraction that utilises ES6+ Map.
 *
 * @exports CollectionAbstract
 */

export abstract class CollectionAbstract {
  // Typed it to <any, any> to allow the content to be dynamic
  private readonly _collection: Map<any, any>;

  protected constructor() {
    this._collection = new Map();
  }

  /**
   * Returns the number of items in the collection
   * @returns {number}
   */
  protected count(): number {
    return this._collection.size;
  }

  /**
   * Checks if the key exists in the collection
   * @param key {string}
   * @returns {boolean}
   */
  protected exists(key: string): boolean {
    return this._collection.has(key);
  }

  /**
   * Returns the entire collection
   */
  protected collection(): Map<any, any> {
    // No verification needed since it is initiated in the constructor
    return this._collection;
  }

  /**
   * Returns item corresponding to the key or false if the key does not exist
   */
  protected get(key: any): any {
    if (this.exists(key)) {
      return this._collection.get(key);
    }
    return false;
  }

  /**
   * Adds an item to the collection.
   * override = false (default),
   * this function will return false when the key already exists.
   * If you set override = true, this function will insert/update the item.
   */
  protected add(key: any, item: any, override = false): any {
    // The Map.set() will override the key without warning!
    if (override || !this.exists(key)) {
      // Allowed to overwrite or new key
      this._collection.set(key, item);
      return this.get(key);
    }
    return false;
  }

  /**
   * Remove an item from the collection.
   * Returns true on success or false if the key doesn't exist
   * @returns {boolean}
   */
  protected remove(key: any): boolean {
    if (this.exists(key)) {
      this._collection.delete(key);
      return true;
    }
    return false;
  }

  /**
   * Clears the entire collection
   */
  protected clear(): void {
    this._collection.clear();
  }
}
