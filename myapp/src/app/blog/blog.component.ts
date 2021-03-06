import { Component, OnInit, DoCheck } from '@angular/core';
import { SELECTEDATE } from '../globals';
import * as global from "../../app/globals";
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss', '../styles/css/animate.css', '../styles/css/bootstrap.css',
    '../styles/css/flexslider.css', '../styles/css/icomoon.css', '../styles/css/magnific-popup.css',
    '../styles/css/owl.theme.default.min.css', '../styles/css/style.css']

})
export class BlogComponent implements OnInit, DoCheck {

  public headerContext: string;
  //public date:Date = new Date();
  public showBlog: boolean;
  public showEditor: boolean;
  public context: string;
  public currentTab: string;
  public oldDate:string;

  constructor(private router:Router) { }

  ngOnInit() {
    let username =localStorage.getItem("username");
    if (username == null) {
      this.router.navigate(["login"]);
    }
    this.currentTab = "blogs";
    this.headerContext = "Blog";
    this.showBlog = true;
    SELECTEDATE.date = new Date().toDateString();
    //this.showBlog = true;
  }

  ngDoCheck() {
    if (this.oldDate != SELECTEDATE.date){
      this.oldDate = SELECTEDATE.date;
      this.blogClicked();
    }
  }

  blogClicked() {
    this.showBlog = true;
    this.showEditor = false;
  }

  editClicked() {
    this.showBlog = false;
    this.showEditor = true;
  }

  submitHandle() {
    this.blogClicked();
  }


}
