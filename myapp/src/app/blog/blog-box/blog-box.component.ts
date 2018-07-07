import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { SELECTEDATE } from '../../globals';
import * as global from "../../../app/globals";
import { FcService } from '../../service/FcService';

@Component({
  selector: 'app-blog-box',
  templateUrl: './blog-box.component.html',
  styleUrls: ['./blog-box.component.scss'],
  providers: [FcService]
})
export class BlogBoxComponent implements OnInit, DoCheck {

  private context: string;
  private clickCount: number;
  private oldDate:string;
  constructor(private fcService:FcService) { }

  ngOnInit() {
    this.getContext();
  }

  ngDoCheck() {
    if (SELECTEDATE.date != this.oldDate){
      this.oldDate = SELECTEDATE.date;
      this.getContext();
    }
  //  this.getContext();
  }

  getContext() {
    var url = "/api/journal/fetch";
    var id: string = SELECTEDATE.date + "-" + localStorage.getItem("username");
    this.fcService.sendPost(id, url).subscribe(res => {
      var element = document.getElementById("box");
      element.innerHTML = res["context"];
      if (res["context"] == null){
        element.innerHTML = "<h5>Write Something</h5>";
      }
      //this.context = res["context"];
    })
  }

}
