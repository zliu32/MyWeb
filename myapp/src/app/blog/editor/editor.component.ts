import { Component, OnInit, DoCheck } from '@angular/core';
import { SELECTEDATE } from '../../globals';
import { journalInfo } from '../../entity/journalInterface';
import * as global from "../../../app/globals";
import { FcService } from '../../service/FcService';



@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [FcService]
})
export class EditorComponent implements OnInit, DoCheck {

  public editor;
  public editorContent;
  public editorOptions = {
    placeholder: "insert content..."
  };
  public showMessage: boolean;
  public message: string;
  public msgColor: string;

  constructor(private fcService: FcService) { }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', html);
  }

  submit() {
    var id: string = SELECTEDATE.date + "-" + global.GlobalUserInfo.username;
    var textInfo: journalInfo = {
      id: id,
      date: SELECTEDATE.date,
      username: global.GlobalUserInfo.username,
      context: this.editorContent
    }
    this.fcService.sendPost(textInfo, "/api/journal/save").subscribe(res => {
      this.showMessage = true;
      if (res !== undefined) {
        this.message = "Successfully uploaded";
        this.msgColor = "green";
      } else {
        this.msgColor = "red";
        this.message = "Upload failed";
      }
    })
  }
}
