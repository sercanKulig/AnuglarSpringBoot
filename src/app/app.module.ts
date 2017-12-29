import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {ArticleService} from './service/article.service';
import { ArticleComponent } from './article/article.component';
import {ArticleDataService} from "./dataStorage/article-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ArticleService, ArticleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
