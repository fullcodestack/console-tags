import { TagStyleModel as StyleModel } from '../tag-styles/tag-style.model';
import { addBaseProperties } from './base-properties';

/**
 * @name solid-tag-style
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @description
 * Predefined {@link StyleModel}
 *
 */
export function solidFn(tagColor: string, textColor: string): StyleModel {

  // Instantiate a new style-model and give it a name (key)
  let style = new StyleModel('solid');

  // We use a function to add base values (every style gets them)
  style = addBaseProperties(style);

  // Style specific tweaks
  style
    .add('color', textColor)
    .add('background', tagColor)
    // We add a line of the same color, so this tag will have the same height as outlined styles
    .add('border', '1px solid' + tagColor)
    // style.add('text-transform', 'uppercase')
    .add('text-transform', 'lowercase');

  return style;
}
