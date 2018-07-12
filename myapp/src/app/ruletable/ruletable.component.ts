import { Component, OnInit } from '@angular/core';
import { FcService } from '../service/FcService';

@Component({
  selector: 'app-ruletable',
  templateUrl: './ruletable.component.html',
  styleUrls: ['./ruletable.component.scss', './ruletablePop.component.scss', 'ruletableTable.component.css', 'ruletableForm.component.css'],
  providers: [FcService]
})
export class RuletableComponent implements OnInit {

  public ruleData: any[] = [];
  private categoryInput: string;
  private scoreInput: number;
  private descriptionInput: string;
  public pendingData: any[] = [];
  private requestPending: any;
  private showAccept: boolean = false;

  constructor(private fcService: FcService) {
    this.requestPending = {
      username: localStorage.getItem("username"),
      status: false
    }
  }



  ngOnInit() {
    var username = localStorage.getItem("username");
    this.fcService.sendPost(username, "/api/user/findByName").subscribe(res => {
      if (res["role"] == "admin") {
        this.showAccept = true;
        this.fcService.sendPost("", "/api/rule/findAllPending").subscribe(res => {
          this.pendingData = res;
        })
      } else {
        this.fcService.sendPost(this.requestPending, "/api/rule/findStatusByCreater").subscribe(res => {
          this.pendingData = res;
        })
      }
    })


    this.fcService.sendPost("", "/api/rule/findAllApproved").subscribe(res => {
      this.ruleData = res;
    })
  }

  acceptClicked() {
    let request: any = {
      description: this.descriptionInput,
      category: this.categoryInput,
      score: this.scoreInput,
      creater: localStorage.getItem("username"),
      status: false
    }
    this.fcService.sendPost(request, "/api/rule/insert").subscribe(res => {
      if (res != undefined && res != null) {
        this.pendingData.push(res);
      }
    })
  }

  deleteRow(index: number) {
    this.fcService.sendPost(this.pendingData[index], "/api/rule/delete").subscribe(res => {
      if (res) {
        this.fcService.sendPost(this.requestPending, "/api/rule/findStatusByCreater").subscribe(res => {
          this.pendingData = res;
        })
      }
    });

  }

  acceptRow(index: number) {
    this.pendingData[index]["status"] = true;
    this.fcService.sendPost(this.pendingData[index], "/api/rule/insert").subscribe(res => {
      this.ruleData.push(res);
      this.fcService.sendPost("", "/api/rule/findAllPending").subscribe(res => {
        this.pendingData = res;
      })
    })
  }

  deleteAcceptRow(index: number) {
    this.fcService.sendPost(this.ruleData[index], "/api/rule/delete").subscribe(res => {
      if (res) {
        this.fcService.sendPost("", "/api/rule/findAllApproved").subscribe(res => {
          this.ruleData = res;
        })
      }
    });
  }

}
