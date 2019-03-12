/**
 * @name helpers
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @desc some simple helper functions
 *
 */

/**
 * @description
 * Checks if a type is an empty string, null or undefined.
 * I use both {@link isDefined} and {@link isUndefined} for readability.
 * I do not like reversed checks because they are error prone and difficult to read.
 * @param type
 * @returns {boolean}
 */
export function isUndefined(type: any): boolean {
  // Treat empty string and null as undefined
  const result = (typeof type === 'string' && type === '') ? undefined : type;
  return result === undefined;
}

/**
 * @description
 * Reversed {@link isUndefined}
 * @param type
 * @returns {boolean}
 */
export function isDefined(type: any): boolean {
  return !isUndefined(type);
}

/**
 * @description
 * Checks if n is between min and max
 * @param {number} n
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export function isBetween(n: number, min: number, max: number): boolean {
  return ( (n >= min) && (n <= max) );
}

/**
 * @description
 * Converts hexadecimal to RGBA
 * @param {string} colorHex
 * @param {number} opacity - number between 0 and 1
 * @returns {string}
 */
export function hexToRgbA(colorHex: string, opacity = 1): string {
  let c: any;
  if (isDefined(colorHex) && (isBetween(opacity, 0, 1))) {
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(colorHex.trim())) {
      c = colorHex.trim().substring(1).split('');
      if (c.length === 3) {
        // short version detected, fill out hex
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = `0x${c.join('')}`;
      return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')}, ${opacity})`;
    }
  }
  throw new Error(
    `${isUndefined(colorHex) ?
      'hex cannot be an empty string.' :
      isBetween(opacity, 0, 1) ?
        'opacity must be a number between 0 and 1' :
        'Invalid color hex: ' + colorHex}`
    );
}
