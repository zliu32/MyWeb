import { Component, OnInit } from '@angular/core';
import { tagInformation } from '../entity/scoreTableInterface';
import * as global from "../../app/globals";
import { Router } from '@angular/router';
import { FcService } from '../service/FcService';
import { ruleInfo } from '../entity/userInterface';


@Component({
  selector: 'app-scoretable',
  templateUrl: './scoretable.component.html',
  styleUrls: ['./scoretable.component.scss'],
  providers: [FcService]
})
export class ScoretableComponent implements OnInit {

  private tags: tagInformation[];
  private headContext: string;
  private isShowPop: boolean;
  private popContext: string;
  private currentTab:string;

  constructor(private router: Router,
    private fcService: FcService) { }

  ngOnInit() {
    let username =localStorage.getItem("username");
    if (username == null) {
      this.router.navigate(["login"]);
    }
    this.currentTab = "score";
    this.headContext = "Score Table";
    this.tags = [];
    this.fcService.sendPost("", "/api/rule/findAll").subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        var temp: tagInformation = {
          focus: false,
          backgroundColor: "white",
          fontColor: "#777",
          name: res[i]["name"],
          description: res[i]["description"],
          score: res[i]["score"],
          selected:false,
          id: res[i]["id"]
        }
        this.tags.push(temp);
      }
      this.tags.sort((n1, n2)=> n1.name > n2.name ? 1 : -1);
    })
  }

  selectTag(tag: tagInformation) {
    if (tag.backgroundColor !== "#5D4660") {
      tag.backgroundColor = "#5D4660";
      tag.fontColor = "white";
      tag.selected = true;
    } else {
      tag.backgroundColor = "white";
      tag.fontColor = "#777";
      tag.selected = false;
    }
  }

  submitSelected(){
    var tempScore:number;
    this.isShowPop = true;
    for (var i = 0; i < this.tags.length; i ++){
      if (!this.tags[i].selected){
        tempScore = 0;
      } else {
        tempScore = this.tags[i].score;
      }
      let tempRuleInfo: ruleInfo = {
        ruleId: this.tags[i].id,
        username: localStorage.getItem("username"),
        score: tempScore,
      }
      this.fcService.sendPost(tempRuleInfo, "/api/rulestat/save").subscribe(res => {
        if (res){
          this.popContext = "Successfully update";
        } else {
          this.popContext = "Failed update";
        }
      }) 
    }
  }

  closePopup() {
    this.isShowPop = false;
  }
}
