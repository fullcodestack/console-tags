/**
 * @name TagModel
 * @author {@link https://github.com/stevenvanc Steven van Cauter}
 * @class
 * @description
 *
 * @imports {@link Style}
 *
 */
export class TagModel {
  private readonly _key: string;
  private _caption: string|undefined;
  private _style: string;
  private _tagColor: string;
  private _textColor: string;
  private _count = 1;

  /**
   * @param {string} key
   * @param {string} caption
   */
  constructor(key: string, caption?: string) {
    this._key = key;
    this._caption = caption;
    // set defaults
    this._style = 'outlined';
    this._tagColor = '#87dafd';
    this._textColor = '#ffffff';
  }

  get key(): string {
    return this._key;
  }

  get caption(): string|undefined {
    return this._caption;
  }

  set caption(value: string|undefined) {
    this._caption = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get tagColor(): string {
    return this._tagColor;
  }

  set tagColor(value: string) {
    this._tagColor = value;
  }

  get textColor(): string {
    return this._textColor;
  }

  set textColor(value: string) {
    this._textColor = value;
  }

  get styleName(): string {
    return this._style;
  }

  set styleName(value: string) {
    this._style = value;
  }
}
