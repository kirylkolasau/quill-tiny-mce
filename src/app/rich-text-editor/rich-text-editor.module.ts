import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Quill
import { QuillModule } from "ngx-quill";
// TinyMce
import { EditorModule } from '@tinymce/tinymce-angular';

import { QuillTextEditorComponent } from "./quill-text-editor/quill-text-editor.component";
import { TinyMceTextEditorComponent } from './tiny-mce-text-editor/tiny-mce-text-editor.component';


@NgModule({
	declarations: [QuillTextEditorComponent, TinyMceTextEditorComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		QuillModule.forRoot(),
		EditorModule
	],
	exports: [QuillTextEditorComponent, TinyMceTextEditorComponent]
})
export class RichTextEditorModule { }
