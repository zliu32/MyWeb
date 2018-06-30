import { Component, OnInit, DoCheck } from '@angular/core';
import { SELECTEDATE } from '../../globals';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, DoCheck {

  public editor;
  public editorContent;
  public editorOptions = {
    placeholder: "insert content..."
  };

  constructor() { }

  ngOnInit() {
    this.editorContent = SELECTEDATE.date;
  }

  ngDoCheck() {
    this.editorContent = SELECTEDATE.date;
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
}
