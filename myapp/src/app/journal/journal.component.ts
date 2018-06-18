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

  constructor(private journalService:JournalService,
    private commonSerive:CommonService,
    private router: Router) { }

  ngOnInit() {
    if (GlobalUserInfo.username === undefined){
      this.router.navigate(["login"]);
    }
    this.commonSerive.getDate(0)
    .subscribe(data => {
      this.date = data["message"];
    })
  }

  submit() {
    var info:journalInfo = {
      username: GlobalUserInfo.username,
      context: this.journalText
    }
    this.journalService.submitReivew(info)
    .subscribe(data => {
      this.submitSuccess = true;
      this.sumbitFail = false;
    });
  }

}
