import {Component, Injectable, OnInit} from '@angular/core';
import {ArticleService} from '../service/article.service';
import 'rxjs/add/operator/map';
import {Article} from '../models/article.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

@Injectable()
export class ArticleComponent implements OnInit {
  article: Article[];
  private subscription: Subscription;
  constructor(private articleService: ArticleService) {}
  ngOnInit() {
    this.article = this.articleService.getAllRecipe();
    this.subscription = this.articleService.articleChange
      .subscribe(
        (article: Article[]) => {
          this.article = article;
        }
      );
  }

  loadUser() {
    this.articleService.getAllRecipe();
  }

  deleteArticle(id: number) {
    this.article.splice((id), 1);
    // this.articleService.deleteArticle(id);
  }

}
