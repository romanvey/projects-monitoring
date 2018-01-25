import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiRequestsService } from '../../shared/api-requests/api-requests.service';

export interface IEmployeeItemDialog {
	employee: object;
}

@Component({
	selector: 'app-employee-item-dialog',
	templateUrl: './employee-item-dialog.component.html',
	styleUrls: ['./employee-item-dialog.component.css']
})
export class EmployeeItemDialogComponent extends DialogComponent<IEmployeeItemDialog, boolean> implements IEmployeeItemDialog {
	employee: object;

	constructor(dialogService: DialogService) {
		super(dialogService);
	}

	attach() {
		console.log('Save clicked, data:', this.employee);
		// this.result = null;
		this.close();
	}

}
