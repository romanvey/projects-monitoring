import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiRequestsService } from '../../shared/api-requests/api-requests.service';


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
	email: FormControl;
	position: FormControl;
	hireDate: FormControl;

	cannotCreateEmployee: boolean;

	constructor(dialogService: DialogService,
	private apiRequestsService: ApiRequestsService) {
		super(dialogService);

		this.cannotCreateEmployee = false;

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
		this.email = new FormControl('', Validators.compose([
			Validators.pattern(String.raw`(?:[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*|"
			(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[
				a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9
				]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01
				-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`),
			Validators.required])
		);
		this.position = new FormControl('', Validators.required);
		this.hireDate = new FormControl('', Validators.compose([
			Validators.pattern(String.raw`(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13
			578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(0
			0|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)`),
			Validators.required])
			);

		this.form = new FormGroup({
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			position: this.position,
			hireDate: this.hireDate
		});
	}
	save(newEmployee) {
		console.log('Add employee');
		const response = this.apiRequestsService.addEmployee(newEmployee);
		if (response) {
			this.cannotCreateEmployee = false;
			this.result = response;
			this.close();
		} else {
			this.cannotCreateEmployee = true;
		}
	}
}
