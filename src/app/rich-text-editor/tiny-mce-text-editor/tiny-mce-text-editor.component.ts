import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { ControlValueAccessor, ValidationErrors, Validator } from "@angular/forms";
import { ngValueAccessorProvide, ngValueValidatorsProvide } from "../../utils/common";
import { DasBaseFieldDirective } from "../base-field";

@Component({
	selector: "tiny-mce-text-editor",
	templateUrl: "./tiny-mce-text-editor.component.html",
	styleUrls: ["./tiny-mce-text-editor.component.scss"],
	providers: [
		ngValueAccessorProvide(TinyMceTextEditorComponent),
		ngValueValidatorsProvide(TinyMceTextEditorComponent)
	]
})
export class TinyMceTextEditorComponent extends DasBaseFieldDirective
implements OnDestroy, OnInit, ControlValueAccessor, Validator {

	@Input() placeholder: string;

	@Output() editorCreated = new EventEmitter<boolean>();

	constructor() {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
	}

	readonly validate = (): ValidationErrors | null => this.valueControl.invalid ? { valid: false } : null;

	getInitConfig() {
		return {
			height: 500,
			placeholder: "OLOL",
			menubar: false,
			toolbar: "bold italic underline | formatselect",
			block_formats: 'Header 1=h1; Header 2=h2; Header 3=h3; Header 4=h4; Header 5=h5; Header 6=h6; Normal=p;',
/* 			toolbar_groups: {
				formatselect: {
					icon: "line-height",
					tooltip: "formatselect",
					items: "Heading 1=h1; h2 h3 h4 h5 h6"
				}
			} */
		};
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	onInit() {
		this.editorCreated.emit(true);
	}

}
