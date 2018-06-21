import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import{ FormBuilder, FormGroup} from '@angular/forms';


import { AuthentationService } from '../service/userAuthentation.service';
import { Router } from '@angular/router';
import * as global from "../../app/globals";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthentationService]
})
export class LoginComponent implements OnInit {

  myForm: FormGroup
  showError: boolean

  constructor(private http: Http, 
    private fb: FormBuilder, 
    private auth: AuthentationService,
    private router: Router){
    this.myForm = fb.group({
      'userName':[''],
      'passWord':['']
    })
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {
      //console.log(value.userName + " " + value.passWord);
      this.auth.check(value.userName, value.passWord)
      .subscribe(data =>{
        if (data){
          global.GlobalUserInfo.username = value.userName;
          this.router.navigate(["score"]);
        } else {
          this.showError = true;
        }
      })
  }

  register(): void{
    this.router.navigate(["register"]);
  }
}
