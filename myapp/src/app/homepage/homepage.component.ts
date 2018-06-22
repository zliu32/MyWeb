import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss', '../styles/css/animate.css', '../styles/css/bootstrap.css',
              '../styles/css/flexslider.css','../styles/css/icomoon.css','../styles/css/magnific-popup.css',
              '../styles/css/owl.theme.default.min.css', '../styles/css/style.css']            
})
export class HomepageComponent implements OnInit {

  constructor() {}

  public imageUrlArray: any;

  ngOnInit() {
    this.imageUrlArray = [
      "./assets/images/blog-1.jpg",
      "./assets/images/blog-2.jpg",
      "./assets/images/blog-3.jpg",
      "./assets/images/blog-4.jpg"
    ];
  }

}
