import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Quill
import { QuillModule } from "ngx-quill";
// TinyMce
import { EditorModule } from '@tinymce/tinymce-angular';
// CKEditor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { QuillTextEditorComponent } from "./quill-text-editor/quill-text-editor.component";
import { TinyMceTextEditorComponent } from './tiny-mce-text-editor/tiny-mce-text-editor.component';
import { CkeditorTextEditorComponent } from './ckeditor-text-editor/ckeditor-text-editor.component';


@NgModule({
	declarations: [QuillTextEditorComponent, TinyMceTextEditorComponent, CkeditorTextEditorComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CKEditorModule,
		QuillModule.forRoot(),
		EditorModule
	],
	exports: [QuillTextEditorComponent, TinyMceTextEditorComponent, CkeditorTextEditorComponent]
})
export class RichTextEditorModule { }
