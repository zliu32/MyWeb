import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../styles/css/animate.css', '../../styles/css/bootstrap.css',
  '../../styles/css/flexslider.css','../../styles/css/icomoon.css','../../styles/css/magnific-popup.css',
  '../../styles/css/owl.theme.default.min.css', '../../styles/css/style.css']       
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homeNav() {

  }

  scoreNav() {
    this.router.navigate(["score"]);
  }

  journalNav() {
    this.router.navigate(["journal"]);
  }
}
