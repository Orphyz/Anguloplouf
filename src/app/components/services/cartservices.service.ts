import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article.models';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {
  articleList : Article[] = []
  newArticlename! : string

  // ajoutArticle(){
  //   this.articleList.push(this.newArticlename)
  // }

  constructor() { }
}
