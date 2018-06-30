import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { SELECTEDATE } from '../../globals';

@Component({
  selector: 'app-blog-box',
  templateUrl: './blog-box.component.html',
  styleUrls: ['./blog-box.component.scss']
})
export class BlogBoxComponent implements OnInit, DoCheck {

  private context: string;
  private clickCount: number;
  constructor() { }

  ngOnInit() {
    this.context = SELECTEDATE.date;
  }

  ngDoCheck() {
    this.context = SELECTEDATE.date;

  }

}
