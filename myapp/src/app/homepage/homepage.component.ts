import { Component, OnInit, Input, ViewChild, ViewChildren, Directive } from '@angular/core';
import { SlideshowComponent } from './slideshow/slideshow.component';
import * as global from "../../app/globals";
import { Router } from '@angular/router';
import { FcService } from '../service/FcService';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss', '../styles/css/animate.css', '../styles/css/bootstrap.css',
    '../styles/css/flexslider.css', '../styles/css/icomoon.css', '../styles/css/magnific-popup.css',
    '../styles/css/owl.theme.default.min.css', '../styles/css/style.css'],
  providers: [FcService]
})
export class HomepageComponent implements OnInit {

  private blogRowOne: string[];
  private blogRowTwo: string[];
  private imageUrlPrefix = "./assets/images/";
  private currentTab: string;
  public tipContext: string;
  public username: string;

  constructor(private router: Router,
    private fcService: FcService) { }

  public slideImageUrlArray: any;
  public blogDate: any[] = [];
  public blogContext: any[] = [];

  ngOnInit() {
    if (global.GlobalUserInfo.username === undefined || global.GlobalUserInfo.username.length == 0) {
      this.router.navigate(["login"]);
    }
    this.username = global.GlobalUserInfo.username;
    var date = new Date();
    var id = date.toDateString() + "-" + global.GlobalUserInfo.username;
    this.fcService.sendPost(id, "/api/journal/fetch").subscribe(res => {
      if (res["context"] == null) {
        this.tipContext = "Haven't written anything today";
      } else {
        this.tipContext = res["context"];
      }
    });
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
    for (var i = 0; i < 8; i++) {
      var today = new Date();
      today.setDate(today.getDate() - i - 1);
      this.blogDate[i] = today.toDateString();
      this.setBlogContext(i);
    }
  }

  setBlogContext(index: number) {
    this.fcService.sendPost(this.getId(this.blogDate[index]), "/api/journal/fetch").subscribe(res => {
      if (res["context"] == null) {
        this.blogContext[index] = "This guy is too lazy to leave anything";
      } else {
        this.blogContext[index] = this.safeTag(res["context"]);
      }
    });
  }

  getId(date: string) {
    return date + "-" + global.GlobalUserInfo.username;
  }

  safeTag(str: string) {
    let regex = /(<([^>]+)>)/ig;
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }
}
