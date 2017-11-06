import { Component, OnInit, DoCheck } from '@angular/core';
import { CachedService } from '../services/cached.service';

// Once after successful login, calls the API to get all the characters and show it in the LI list.
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, DoCheck {
  charList: {}[];

  constructor(private char: CachedService) {
    this.char.getChar();
  }

  ngOnInit() {
    console.log(this.charList);
  }

  ngDoCheck() {
    this.charList = this.char.charArr;
  }

}

