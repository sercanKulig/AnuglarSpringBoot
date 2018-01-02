import {Injectable} from '@angular/core';
import {Article} from '../models/article.model';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';

@Injectable()
export class ArticleService {

  private apiRoot = 'http://localhost:9090/api/';
  constructor(private http: Http) {}
  articleChange = new Subject<Article[]>();
  articles: Article[] = [];

  getAllRecipe() {
    this.fetchData();
    return this.articles.slice();
  }


  fetchData() {
    this.http.get(this.apiRoot + 'articles')
      .map(
        (response: Response) => {
          this.articles = response.json();
          return this.articles;
        }
      )
      .subscribe(
      (article: Article[]) => {
        this.articleChange.next(this.articles.slice());
      }
    );
  }
}
