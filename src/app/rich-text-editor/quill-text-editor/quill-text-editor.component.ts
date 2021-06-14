import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { ControlValueAccessor, ValidationErrors, Validator } from "@angular/forms";
import { ngValueAccessorProvide, ngValueValidatorsProvide } from "../../utils/common";
import { DasBaseFieldDirective } from "../base-field";

interface Styles {
	height: string;
}

const defaultStyles: Styles = {
	height: '300px'
};

@Component({
	selector: "quill-text-editor",
	templateUrl: "./quill-text-editor.component.html",
	styleUrls: ["./quill-text-editor.component.scss"],
	providers: [
		ngValueAccessorProvide(QuillTextEditorComponent),
		ngValueValidatorsProvide(QuillTextEditorComponent)
	]
})
export class QuillTextEditorComponent extends DasBaseFieldDirective
	implements OnDestroy, OnInit, ControlValueAccessor, Validator {

	@Input() placeholder: string;

	private _styles: Styles;
	@Input() set styles(styles: Styles) {
		this._styles = Object.assign(defaultStyles, styles);
	}
	get styles(): Styles {
		return this._styles || defaultStyles;
	}

	@Output() editorCreated = new EventEmitter<boolean>();

	onEditorCreated() {
		this.editorCreated.emit(true);
	}

	constructor() {
		super();
	}

	ngOnInit() {
		super.ngOnInit();
	}

	readonly validate = (): ValidationErrors | null => this.valueControl.invalid ? { valid: false } : null;

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}
