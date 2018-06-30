import { Component, OnInit } from '@angular/core';
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
export class BlogComponent implements OnInit {

  public headerContext: string;
  //public date:Date = new Date();
  public showBlog: boolean;
  public showEditor: boolean;
  public context: string;
  public currentTab: string;

  constructor(private router:Router) { }

  ngOnInit() {
    if (global.GlobalUserInfo.username === undefined || global.GlobalUserInfo.username.length == 0) {
      this.router.navigate(["login"]);
    }    
    this.currentTab = "blogs";
    this.headerContext = "Blog";
    this.showBlog = true;
    SELECTEDATE.date = new Date().toDateString();
    //this.showBlog = true;
  }

  blogClicked() {
    this.showBlog = true;
    this.showEditor = false;
  }

  editClicked() {
    this.showBlog = false;
    this.showEditor = true;
  }


}
