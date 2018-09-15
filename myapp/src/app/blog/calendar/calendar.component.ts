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
  public selectedMoment: Date = new Date();

  ngOnInit() {
  }

  ngDoCheck() {
    SELECTEDATE.date = this.selectedMoment.toDateString();
  }


}
