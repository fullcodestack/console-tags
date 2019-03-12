/**
 * @name TagStylePropertyModel
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @class
 * @description
 * Property class for a {@link TagStyleModel}.
 *
 */
export class TagStylePropertyModel {
  private _name: string;
  private _value: string;
  private _allowed: Array<string> = [
    'background',
    'border',
    'color',
    'line',
    'font',
    'margin',
    'padding',
    'text'
  ];

  constructor(property: string, value: string) {
    // check if the property is valid
    const prop = property.split('-');
    if (this._allowed.indexOf(prop[0]) >= 0) {
      // Valid property
      this._name = property;
      this._value = value; // TODO: [SvC / 9-5-2017] - css validation
    } else {
      // caught a not allowed property
      throw new Error(`Property "${prop[0]} (${property})" is not allowed.`);
    }
  }

  get value(): string {
    return this._value;
  }

  get name(): string {
    return this._name;
  }
}
