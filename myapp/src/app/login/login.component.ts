import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import{ FormBuilder, FormGroup} from '@angular/forms';


import { FcService } from '../service/FcService';
import { Router } from '@angular/router';
import * as global from "../../app/globals";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./styles/vendor/bootstrap/css/bootstrap.min.css','./styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
              './styles/fonts/iconic/css/material-design-iconic-font.min.css', './styles/vendor/animate/animate.css','./styles/vendor/css-hamburgers/hamburgers.min.css',
              './styles/vendor/animsition/css/animsition.min.css', './styles/vendor/select2/select2.min.css', './styles/vendor/daterangepicker/daterangepicker.css',
              './styles/css/util.css', './styles/css/main.css'],
  providers: [FcService]
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;
  public isUsernameValid:boolean;
  public isPwdValid:boolean;

  constructor(private fcService:FcService,
              private router:Router){}

  ngOnInit() {
  }

  authentication() {
    var userInfo = {
      username: this.username,
      password: this.password
    }
    if (this.username === undefined || this.username.length == 0){
      this.isUsernameValid = true;
      return;
    }
    if (this.password === undefined || this.password.length == 0){
      this.isPwdValid = true;
      return;
    }
    this.fcService.sendPost(userInfo, "/api/user/authentication").subscribe(res => {
      if (!res){
        this.isPwdValid = true;
        this.isUsernameValid = true;
        this.password = "";
      } else {
        global.GlobalUserInfo.username = this.username;
        this.router.navigate(["home"]);
      }
    })
  }
}
