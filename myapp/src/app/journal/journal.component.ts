import { Component, OnInit } from '@angular/core';
import { JournalService } from '../service/journal.service';
import { GlobalUserInfo } from '../globals';
import { journalInfo } from '../entity/journalInterface';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
  providers: [JournalService, CommonService]
})
export class JournalComponent implements OnInit {

  private journalText:string;
  private date:string;
  private submitSuccess:boolean;
  private sumbitFail:boolean;
  private dateOffset:number;

  constructor(private journalService:JournalService,
    private commonSerive:CommonService,
    private router: Router) { 
      this.dateOffset = 0;
    }

  ngOnInit() {
    if (GlobalUserInfo.username === undefined){
      this.router.navigate(["login"]);
    }
    this.commonSerive.getDate(0)
    .subscribe(data => {
      this.date = data["message"];
      this.fetchReview();
    })
  }

  submit() {
    let id = GlobalUserInfo.username + "-" + this.date;
    var info:journalInfo = {
      id: id,
      date: this.date,
      username: GlobalUserInfo.username,
      context: this.journalText
    }
    this.journalService.submitReivew(info)
    .subscribe(data => {
      this.submitSuccess = true;
      this.sumbitFail = false;
    });
  }

  prev() {
    this.submitSuccess = false;
    this.dateOffset = this.dateOffset - 1;
    this.fetchReview();
  }

  next() {
    this.submitSuccess = false;
    this.dateOffset = this.dateOffset + 1;
    this.fetchReview();
  }

  fetchReview() {
    this.commonSerive.getDate(this.dateOffset)
    .subscribe(data => {
      this.date = data["message"];
      let id = GlobalUserInfo.username + "-" + this.date;
      this.journalService.fetchReview(id)
      .subscribe(data => {
        this.journalText = data["context"];
      })
    });
  }

}
