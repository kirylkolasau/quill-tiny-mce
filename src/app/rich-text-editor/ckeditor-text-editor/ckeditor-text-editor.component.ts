import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'ckeditor-text-editor',
  templateUrl: './ckeditor-text-editor.component.html',
  styleUrls: ['./ckeditor-text-editor.component.scss']
})
export class CkeditorTextEditorComponent {
  public Editor = ClassicEditor;

    public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }

    public config = {
      heading: {
        options: [
          { model: 'paragraph', title: 'У тебя получилось', class: 'ck-heading_paragraph' },
          { model: 'heading2', view: 'h2', title: 'но это только', class: 'ck-heading_heading2' },
          { model: 'heading3', view: 'h3', title: 'начало приключения', class: 'ck-heading_heading3' }
        ]
      },
      toolbar: {
        items: [
          'heading',
          '|',
          'highlight',
          '|',
          'bold',
          'italic',
          'underline',
          '|',
          'numberedList',
          'bulletedList',
          '|',
          'blockQuote',
          '|',
          'link',
          '|',
          'imageUpload',
          '|'
        ]
      },
      image: {
        toolbar: [
          'imageStyle:full',
          'imageStyle:side',
          '|',
          'imageTextAlternative'
        ]
      },
      // This value must be kept in sync with the language defined in webpack.config.js.
      language: 'en'

        // items: [
        //     'heading', '|',
        //     'fontfamily', 'fontsize', '|',
        //     'alignment', '|',
        //     'fontColor', 'fontBackgroundColor', '|',
        //     'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
        //     'link', '|',
        //     'outdent', 'indent', '|',
        //     'bulletedList', 'numberedList', 'todoList', '|',
        //     'code', 'codeBlock', '|',
        //     'insertTable', '|',
        //     'uploadImage', 'blockQuote', '|',
        //     'undo', 'redo'
        // ],
        // shouldNotGroupWhenFull: true

    };

}
