import { Component, OnInit } from '@angular/core';
import { SELECTEDATE } from '../globals';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
  
})
export class BlogComponent implements OnInit {

  public headContext:string;
  //public date:Date = new Date();

  constructor() { }

  ngOnInit() {
    this.headContext = "Blog";
  }

}
