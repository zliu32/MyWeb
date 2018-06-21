import { Component, OnInit } from '@angular/core';
import { RuleService } from '../service/ruleData.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ruleInfo, requestInfo } from '../entity/userInterface';
import { CommonService } from '../service/common.service';
import { GlobalUserInfo } from '../globals';

@Component({
  selector: 'app-scoretable',
  templateUrl: './scoretable.component.html',
  styleUrls: ['./scoretable.component.css'],
  providers: [RuleService, CommonService]
})
export class ScoretableComponent implements OnInit {

  keys:string[]=[];
  records:any[]=[];
  model:any[]=[];
  rules:any[]=[];
  userName: string;
  showSuccess:boolean;
  showFail:boolean;
  totalScore:number;
  showScore:boolean;
  dateOffset:number;
  titleDate:string;
  disableSelection:boolean;

  constructor(private ruleService: RuleService, 
    private urlParams: ActivatedRoute,
    private router: Router,
    private commonService: CommonService) {
    this.keys[0] = "No";
    this.keys[1] = "Category";
    this.keys[2] = "Description";
    this.keys[3] = "Score";
  }

  ngOnInit() {
    if (GlobalUserInfo.username === undefined){
      this.router.navigate(["login"]);
    }
    this.dateOffset = 0;
    this.disableSelection = false;
    this.commonService.getDate(this.dateOffset)
    .subscribe(data => {
      this.titleDate = data["message"];
    });
    this.userName = GlobalUserInfo.username;
    this.ruleService.getRuleData()
    .subscribe(data =>{
      this.rules = data;
      for (var i = 0; i < data.length; i ++){
        var entry = [];
        entry["Score"] = data[i]["score"];
        entry["Category"] = data[i]["name"];
        entry["No"] = i + 1;
        entry["Description"] = data[i]["description"];
        entry["id"] = data[i]["id"];
        this.records.push(entry);
        this.fetchStat(i);
      }
    })
  }

  submitTable() {
    if (this.rules.length != 0){
      this.showSuccess = true;
    } else {
      this.showFail = true;
    }
    for (var i = 0; i < this.rules.length; i ++){
      var info:ruleInfo = {
        ruleId: this.rules[i]["id"],
        username: this.userName,
        score: this.model[i] * this.rules[i]["score"]
      }
      this.ruleService.saveRuleStat(info)
      .subscribe(result =>{
        this.showSuccess = this.showSuccess && result;
        if (!result){
          this.showFail = true;
        }
        this.ruleService.getUserScore(this.userName)
        .subscribe(score =>{
          this.totalScore = score;
        })
      });
    }
  }

  checkScore() {
    this.ruleService.getUserScore(this.userName)
    .subscribe(score =>{
      this.showScore = true;
      this.totalScore = score;
    })
  }

  previous() {
    this.dateOffset = this.dateOffset - 1;
    this.disableSelection = this.dateOffset !== 0;
    this.commonService.getDate(this.dateOffset)
    .subscribe(data => {
      this.titleDate = data["message"];
    });
    for (var i = 0; i < this.rules.length; i ++){
      this.fetchStat(i);
    }
  }

  next() {
    this.dateOffset = this.dateOffset + 1;
    this.disableSelection = this.dateOffset !== 0;
    this.commonService.getDate(this.dateOffset)
    .subscribe(data => {
      this.titleDate = data["message"];
    });
    for (var i = 0; i < this.rules.length; i ++){
      this.fetchStat(i);
    }
  }

  fetchStat(index: number) {
    var request:requestInfo = {
      ruleId: this.rules[index]["id"],
      username: this.userName,
      dateOffset: this.dateOffset,
      index: index
    }
    this.ruleService.findRuleState(request)
    .subscribe(data => {
      if (data["index"] == - 1){
        this.resetSelection();
      } else {
        if (data["choice"] != 0){
          this.model[data["index"]] = 1;
        } else {
          this.model[data["index"]] = 0;
        }
      }
    });
  }

  resetSelection() {
    for (var i = 0; i < this.rules.length; i ++){
      this.model[i] = 0;
    }
  }

  jumpto() {
    this.router.navigate(["journal"]);
  }
}
