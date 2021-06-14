import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';

import { RichTextEditorModule } from "./rich-text-editor/rich-text-editor.module";


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RichTextEditorModule,
		EditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
