import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.models';

@Component({
  selector: 'app-exo3child',
  templateUrl: './exo3child.component.html',
  styleUrls: ['./exo3child.component.scss']
})
export class Exo3childComponent implements OnInit {

  @Input() liste! : Article[]
  constructor() { }

  ngOnInit(): void {
  }

}
