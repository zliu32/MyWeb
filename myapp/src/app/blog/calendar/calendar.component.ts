import { Component, OnInit, Output, DoCheck } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SELECTEDATE } from '../../globals';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, DoCheck {

  constructor() { }
  private selectedMoment:Date = new Date();
  private clickCount:number;

  ngOnInit() {   
    this.clickCount = 0;
  }

  ngDoCheck() {
    this.clickCount = this.clickCount + 1;
    if (this.clickCount % 2 == 0){
      SELECTEDATE.date = this.selectedMoment.toDateString();
      this.clickCount = 0;
    }
  }


}
