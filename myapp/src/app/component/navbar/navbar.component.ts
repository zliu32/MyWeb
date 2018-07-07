import { Component, OnInit, Input } from '@angular/core';
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
  @Input() currentTab:string;

  ngOnInit() {
    let div = document.getElementById(this.currentTab);
    div.className = "active";
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
