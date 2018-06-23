import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','../../styles/css/animate.css', '../../styles/css/bootstrap.css',
              '../../styles/css/flexslider.css','../../styles/css/icomoon.css','../../styles/css/magnific-popup.css',
              '../../styles/css/owl.theme.default.min.css', '../../styles/css/style.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerContext : string;

  constructor() { }

  ngOnInit() {
  }

}
