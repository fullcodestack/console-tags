import { CollectionAbstract as Collection } from '../lib/collection.abstract';
import { TagStylePropertyModel as StyleProperty } from './tag-style-property.model';

/**
 * @name TagStyleModel
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @class
 * @description
 * Style-model for a Tag.
 * Holds CSS style-properties that together make up a Style.
 *
 * @imports {@link StyleProperty}
 * @imports {@link Collection}
 * @extends {@link Collection}
 * @exports TagStyleModel
 */
export class TagStyleModel extends Collection {
  private _name: string;
  private _color: string | undefined; // TODO: Make a Color object

  constructor(name: string) {
    // Invoke super constructor
    super();
    // Set this style's name
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  set colorHex(hex: string) {
    this._color = hex;
  }

  /**
   * Returns the number of properties in the collection
   * @returns {number}
   */
  public count(): number {
    return super.count();
  }

  /**
   * Checks if the property already exists
   * @param {string} property
   * @returns {boolean}
   */
  public exists(property: string): boolean {
    return super.exists(property);
  }

  /**
   * Returns the entire collection
   * @returns {Map<string, StyleProperty>} properties
   */
  get properties(): Map<string, StyleProperty> {
    return super.collection();
  }

  /**
   * Returns item corresponding to the property or false if the property does not exist
   * @param {string} property
   * @returns {StyleProperty}
   */
  public get(property: string): StyleProperty {
    return super.get(property);
  }

  /**
   * Adds a property to the collection.
   * @param {string} propertyName
   * @param {string} value
   */
  public add(propertyName: string, value: string) {
    super.add(propertyName, new StyleProperty(propertyName, value));
    return this;
  }

  /**
   * Remove a property from the collection.
   * Returns true on success or false if the property doesn't exist
   * @param {string} propertyName
   */
  public remove(propertyName: string) {
    return super.remove(propertyName);
  }

  /**
   * Clears the entire collection
   */
  public clear(): void {
    super.clear();
  }
}
