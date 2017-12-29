import {Injectable} from '@angular/core';
import {ArticleDataService} from '../dataStorage/article-data.service';
import {Article} from '../models/article.model';

@Injectable()
export class ArticleService {
  constructor(private articleDataService: ArticleDataService) {}
  articles: Article[];

  getAllRecipe() {
    return this.articleDataService.fetchData();
  }
}
