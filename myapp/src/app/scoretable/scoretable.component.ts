import { Component, OnInit } from '@angular/core';
import { tagInformation } from '../entity/scoreTableInterface';

@Component({
  selector: 'app-scoretable',
  templateUrl: './scoretable.component.html',
  styleUrls: ['./scoretable.component.scss'],
})
export class ScoretableComponent implements OnInit {

  private tags:tagInformation[];
  private headContext:string;

  constructor() { }

  ngOnInit() {
    this.tags = [];
    this.headContext = "Score Table";
    for (var i = 0; i < 7; i ++){
      var temp:tagInformation = {
        focus:false,
        backgroundColor: "white",
        fontColor:"#777"
      }
      this.tags.push(temp);
    }
  }
  
  selectTag(tag:tagInformation) {
    if (tag.backgroundColor !== "#5D4660"){
      tag.backgroundColor = "#5D4660";
      tag.fontColor = "white";
    } else {
      tag.backgroundColor = "white";
      tag.fontColor = "#777";
    }
  }
}
