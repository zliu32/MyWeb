import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  private selectedMoment = new Date();
  private clickCount:number = 0;

  ngOnInit() {
  //  console.log(this.selectedMoment);
  }

  changed(){
    this.clickCount = this.clickCount + 1;
    if (this.clickCount == 4){
      console.log(this.selectedMoment);
      this.clickCount = 0;
    }
  }

}
