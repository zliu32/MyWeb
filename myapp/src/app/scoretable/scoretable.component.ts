import { Component, OnInit } from '@angular/core';
import { RuleService } from '../service/ruleData.service';
import { CommonService } from '../service/common.service';
import { tagInfo } from '../entity/scoreTableInterface';

@Component({
  selector: 'app-scoretable',
  templateUrl: './scoretable.component.html',
  styleUrls: ['./scoretable.component.scss'],
  providers: [RuleService, CommonService]
})
export class ScoretableComponent implements OnInit {

  private tags:tagInfo[][];
  private headContext:string;

  constructor(){
  }

  ngOnInit() {
    this.tags=[];
    this.headContext="Read our blog";
    for (var i = 0; i < 3; i ++){
      this.tags[i]=[];
      for (var j = 0; j < 4; j ++){
        this.tags[i][j] = {
          topColor: "#EAE9E4",
          buttonColor: "#fff",
          circleColor: "#989A8F",
          selected: false,
          buttonTextColor: "#989A8F"
        }
      }
    }
  }

  click(tag:tagInfo) {
    tag.selected = !tag.selected;
    if (tag.selected){
      tag.topColor = "#5D4660";
      tag.buttonColor = "#5D4660";
      tag.circleColor = "#BC9B94";
      tag.buttonTextColor = "#fff";
    } else {
      tag.topColor = "#EAE9E4";
      tag.buttonColor = "#fff";
      tag.circleColor = "#989A8F";
      tag.buttonTextColor = "#989A8F"     
    }
  }
}
