import { TagStyleModel as StyleModel } from '../tag-styles/tag-style.model';
import { addBaseProperties } from './base-properties';
import { hexToRgbA } from '../helpers';

/**
 * @name outlined-tag-style
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @description
 * Predefined {@link StyleModel}
 *
 */
export function outlinedFn(tagColor: string, textColor: string): StyleModel {

  // Instantiate a new style-model
  let style = new StyleModel('outlined');
  style = addBaseProperties(style);

  // Style specific tweaks
  style
    .add('color', tagColor)
    .add('background', hexToRgbA(tagColor, 0.2))
    .add('border', '1px solid' + tagColor)
    // style.add('text-transform', 'uppercase');
    .add('text-transform', 'lowercase');

  return style;
}
