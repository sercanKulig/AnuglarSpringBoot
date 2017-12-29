import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ArticleDataService {
  private apiRoot = 'http://localhost:9090/api/';
  constructor(private http: Http) {}
  fetchData() {
    return this.http.get(this.apiRoot + 'articles')
      .map(
        (res) => res.json()
      );
  }
}
