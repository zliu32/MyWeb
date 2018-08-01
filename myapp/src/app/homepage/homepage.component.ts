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
  public username: string;
  public testtest: string="zxc";

  constructor(private router: Router,
    private fcService: FcService) { }

  public slideImageUrlArray: any;
  public blogDate: any[] = [];
  public blogContext: any[] = [];

  ngOnInit() {
    let username =localStorage.getItem("username");
    if (username == null) {
      this.router.navigate(["login"]);
    }
    this.username = username;
    var date = new Date();
    var id = date.toDateString() + "-" + username;
    this.currentTab = "home";
    this.slideImageUrlArray = [
      "./assets/images/wyyslide1.JPG",
      "./assets/images/wyyslide2.JPG",
      "./assets/images/wyyslide3.JPG",
      "./assets/images/wyyslide4.JPG",
      "./assets/images/wyyslide5.jpg",
      "./assets/images/wyyslide6.jpg"
    ];
    this.blogRowOne = [
      this.imageUrlPrefix + "blog8.JPG",
      this.imageUrlPrefix + "blog2.JPG",
      this.imageUrlPrefix + "blog1.JPG"
    ];
    this.blogRowTwo = [
      this.imageUrlPrefix + "blog3.JPG",
      this.imageUrlPrefix + "blog4.JPG",
      this.imageUrlPrefix + "blog6.JPG"
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
    return date + "-" + localStorage.getItem("username");
  }

  safeTag(str: string) {
    let regex = /(<([^>]+)>)/ig;
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }
}
