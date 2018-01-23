import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';



export interface ConfirmModel {
	title: string;
	message: string;
}

@Component({
	selector: 'app-add-employee-dialog',
	templateUrl: './add-employee-dialog.component.html',
	styleUrls: ['./add-employee-dialog.component.css']
})


export class AddEmployeeDialogComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
	title: string;
	message: string;
	constructor(dialogService: DialogService) {
		super(dialogService);
	}
	confirm() {
		// we set dialog result as true on click on confirm button,
		// then we can get dialog result from caller code
		this.result = true;
		this.close();
	}
}
