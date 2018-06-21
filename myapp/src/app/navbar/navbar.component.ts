import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
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
