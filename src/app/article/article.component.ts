import {Component, Injectable, OnInit} from '@angular/core';
import {ArticleService} from '../service/article.service';
import 'rxjs/add/operator/map';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

@Injectable()
export class ArticleComponent implements OnInit {
  article: Article[];
  constructor(private articleService: ArticleService) {}
  ngOnInit() {
    this.articleService.getAllRecipe()
      .subscribe(
        (data) => this.article = data
      );
  }

  loadUser() {
    this.articleService.getAllRecipe();
  }

}
