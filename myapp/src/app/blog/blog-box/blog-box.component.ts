import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { SELECTEDATE } from '../../globals';

@Component({
  selector: 'app-blog-box',
  templateUrl: './blog-box.component.html',
  styleUrls: ['./blog-box.component.scss']
})
export class BlogBoxComponent implements OnInit, DoCheck {

  private date:string;
  private clickCount:number;
  constructor() { }

  ngOnInit() {
    this.clickCount = 0;
  }

  ngDoCheck(){
    this.clickCount = this.clickCount + 1;
    if (this.clickCount % 2 === 0){
      this.date = SELECTEDATE.date;
      this.clickCount = 0;
    }
  }

}
