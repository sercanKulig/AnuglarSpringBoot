export class Article {
  constructor(private _articleId: number, private _title: string, private _category: string) {
  }

  get articleId(): number {
    return this._articleId;
  }

  set articleId(value: number) {
    this._articleId = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }
}
