import { Component, OnInit } from '@angular/core';
import { JournalService } from '../service/journal.service';
import { GlobalUserInfo } from '../globals';
import { journalInfo } from '../entity/journalInterface';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
  providers: [JournalService, CommonService]
})
export class JournalComponent implements OnInit {

  private journalText:string;

  constructor(private journalService:JournalService,
    private commonSerive:CommonService) { }

  ngOnInit() {
  }

  submit() {
    var info:journalInfo = {
      username: GlobalUserInfo.username,
      context: this.journalText
    }
    this.journalService.submitReivew(info)
    .subscribe(data => {
      console.log(data);
    });
  }

}
