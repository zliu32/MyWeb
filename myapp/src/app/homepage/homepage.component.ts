import { Component, OnInit, Input, ViewChild, ViewChildren, Directive } from '@angular/core';
import { SlideshowComponent } from './slideshow/slideshow.component';
import * as global from "../../app/globals";
import { Router } from '@angular/router';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss', '../styles/css/animate.css', '../styles/css/bootstrap.css',
              '../styles/css/flexslider.css','../styles/css/icomoon.css','../styles/css/magnific-popup.css',
              '../styles/css/owl.theme.default.min.css', '../styles/css/style.css']            
})
export class HomepageComponent implements OnInit {

  private blogRowOne:string[];
  private blogRowTwo:string[];
  private imageUrlPrefix = "./assets/images/";
  private currentTab:string;

  constructor(private router:Router) {}

  public slideImageUrlArray: any;

  ngOnInit() {
    if (global.GlobalUserInfo.username === undefined || global.GlobalUserInfo.username.length == 0) {
      this.router.navigate(["login"]);
    }
    this.currentTab = "home";
    this.slideImageUrlArray = [
      "./assets/images/img_bg_1.jpg",
      "./assets/images/img_bg_2.jpg",
      "./assets/images/img_bg_3.jpg",
      "./assets/images/img_bg_4.jpg"
    ];
    this.blogRowOne = [
      this.imageUrlPrefix + "blog-1.jpg",
      this.imageUrlPrefix + "blog-5.jpg",
      this.imageUrlPrefix + "blog-2.jpg"
    ];
    this.blogRowTwo = [
      this.imageUrlPrefix + "blog-1.jpg",
      this.imageUrlPrefix + "blog-5.jpg",
      this.imageUrlPrefix + "blog-2.jpg"
    ];

  }

}
