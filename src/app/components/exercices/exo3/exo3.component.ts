import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.models';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  articleList : Article[] = []
  newArticlename! : string

  constructor() { }

  ngOnInit(): void {
  }

}
