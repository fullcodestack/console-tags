// Add new build-in styles here
import { solidFn } from './solid.tag-style';
import { outlinedFn } from './outlined.tag-style';
import { CollectionAbstract as Collection } from '../lib/collection.abstract';

export enum BUILD_IN_STYLES {
  SOLID,
  OUTLINED
}

export class BuildInStylesCollection extends Collection {

  constructor() {
    super();
    // Storing functions, not the result
    super.add('solid', solidFn);
    super.add('outlined', outlinedFn);
    return this;
  }

  /**
   * Returns the entire collection
   * @returns {Map<string, StyleProperty>} properties
   */
  get styles(): Map<string, any> {
    return super.collection();
  }

}
