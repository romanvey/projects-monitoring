import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';


export interface IAddEmployeeDialog {
	title: string;
}

@Component({
	selector: 'app-add-employee-dialog',
	templateUrl: './add-employee-dialog.component.html',
	styleUrls: ['./add-employee-dialog.component.css']
})


export class AddEmployeeDialogComponent extends DialogComponent<IAddEmployeeDialog, boolean> implements IAddEmployeeDialog {
	title: string;
	form: FormGroup;
	firstName: FormControl;
	lastName: FormControl;
	position: FormControl;
	hireTime: FormControl;

	constructor(dialogService: DialogService) {
		super(dialogService);

		this.firstName = new FormControl('', Validators.compose([
			Validators.pattern('[a-zA-Z]+'),
			Validators.minLength(2),
			Validators.required])
			);
		this.lastName = new FormControl('', Validators.compose([
			Validators.pattern('[a-zA-Z]+'),
			Validators.minLength(2),
			Validators.required])
			);
		this.position = new FormControl('', Validators.required);
		this.hireTime = new FormControl('', Validators.compose([
			Validators.pattern('[\\d]{2}\\/[\\d]{2}\\/[\\d]{4}'),
			Validators.required])
			);

		this.form = new FormGroup({
			firstName: this.firstName,
			lastName: this.lastName,
			position: this.position,
			hireTime: this.hireTime
		});
	}
	save(data) {
		console.log('Add employee');
		this.result = data;
		this.close();
	}
}
