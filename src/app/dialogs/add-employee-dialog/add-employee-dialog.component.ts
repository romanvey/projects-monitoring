import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';



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
	employee = {
		firstName: '',
		lastName: '',
		position: '',
		hireTime: ''
	}

	constructor(dialogService: DialogService) {
		super(dialogService);
		
	}
	confirm() {
		this.result = true;
		console.log(this.employee);
		this.close();
	}
}
