import { TagStyleModel as Style } from '../tag-styles/tag-style.model';

/**
 * @name base-properties
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @description
 * Adds a set of pre-determined properties to a StyleModel {@link StyleModel}
 *
 */
export function addBaseProperties(style: Style): Style {

  // Pass through function: adds base properties to a style
  style
    .add('border-radius', '3px')
    .add('font-family', '"courier new", courier, monospace')
    .add('font-size', '9pt')
    .add('line-height', '10pt')
    .add('margin', '0 1px 0 0')
    .add('padding', '2px 2px 0 2px');

  return style;
}
