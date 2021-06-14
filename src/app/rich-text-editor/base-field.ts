import { OnInit, DoCheck, Directive, OnDestroy } from "@angular/core";
import { FormControl, ValidatorFn, RequiredValidator, ControlValueAccessor } from "@angular/forms";
import { filter, map, pairwise, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { isNullOrUndefined } from "../utils/common";

@Directive()
export class DasBaseFieldDirective implements OnDestroy, OnInit, DoCheck, ControlValueAccessor {

	public destroy$ = new Subject();
	public valueControl: FormControl = new FormControl("");

	validators: ValidatorFn[] = [];
	isRequired = false;

	propagateChange = (v: any) => {};
	propagateBlur = (v: any) => {};

	constructor(validators: Array<any> = []) {
		this.valueControl.setValidators(validators);
		this.validators = validators;
	}

	ngOnInit() {
		this.valueControl.valueChanges.pipe(
			takeUntil(this.destroy$),
			pairwise(),
			filter(([oldValue, newValue]) => oldValue !== newValue),
			map(([_, newValue]) => newValue)
		).subscribe((newValue) => {
			this.propagateChange(newValue);
		});
	}

	ngDoCheck(): void {
		if (Array.isArray(this.validators)) {
			const reqValidator: any = this.validators.find((val) => val.constructor === RequiredValidator);
			if (!isNullOrUndefined(reqValidator)) {
				this.isRequired = reqValidator.required;
			}
		}
	}

	writeValue(value: any): void {
		if (!isNullOrUndefined(value)) {
			this.valueControl.setValue(value);
		}
	}

	registerOnChange(fn: any): void {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.propagateBlur = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		isDisabled ? this.valueControl.disable() : this.valueControl.enable();
	}

	onBlurEvent() {
		this.propagateBlur(this.valueControl.value);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

}
