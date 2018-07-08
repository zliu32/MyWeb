import { Component, OnInit } from '@angular/core';
import { FcService } from '../service/FcService';

@Component({
  selector: 'app-ruletable',
  templateUrl: './ruletable.component.html',
  styleUrls: ['./ruletable.component.scss', './ruletable.component.less'],
  providers: [FcService]
})
export class RuletableComponent implements OnInit {

  public ruleData:any[] = [];

  constructor(private fcService:FcService) { }

  ngOnInit() {
    this.fcService.sendPost("", "/api/rule/findAll").subscribe(res => {
      this.ruleData = res;
      for (var i = 0; i < this.ruleData.length; i ++){
        if (this.ruleData[i]["comment"].length == 0){
          this.ruleData[i]["comment"] = "No Comment";
        }
      }
    })
  }

}
