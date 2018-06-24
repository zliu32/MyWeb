import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };
  public headContext:string;

  constructor() { }
 
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
 
  ngOnInit() {
    this.headContext = "Blog"
    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
  }

}
