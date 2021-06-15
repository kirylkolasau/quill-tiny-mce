import { Component } from '@angular/core';

@Component({
  selector: 'jodit-text-editor',
  templateUrl: './jodit-text-editor.component.html',
  styleUrls: ['./jodit-text-editor.component.scss']
})
export class JoditTextEditorComponent {
  // public config = {
  //   "useSearch": false,
  //   "toolbarButtonSize": "large",
  //   "buttons": "bold,italic,underline,source,strikethrough,eraser,fullsize,preview",
  // }

  public config = {
    buttons: ['bold', 'italic', {
        iconURL: '1',
        tooltip: 'custom button',
        exec: function (editor) {
            alert('1');
            console.log(editor);
        }
    }]
  }
}
