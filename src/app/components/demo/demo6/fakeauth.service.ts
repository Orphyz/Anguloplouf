import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Demo6Component } from './demo6.component';
import { Article } from 'src/app/models/article.models';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {


  isConnected! : boolean

  constructor() { }

  connect() {
    this.isConnected = true
  }

  disconnect(){
    this.isConnected = false
  }
}
