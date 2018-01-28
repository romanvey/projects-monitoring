import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiRequestsService } from '../../shared/api-requests/api-requests.service';

export interface IEmployeeItemDialog {
	employee: any;
}

@Component({
	selector: 'app-employee-item-dialog',
	templateUrl: './employee-item-dialog.component.html',
	styleUrls: ['./employee-item-dialog.component.css']
})
export class EmployeeItemDialogComponent extends DialogComponent<IEmployeeItemDialog, boolean> implements IEmployeeItemDialog {
	employee: any;
	projects: object[];

	constructor(dialogService: DialogService,
	private apiRequestsService: ApiRequestsService) {
		super(dialogService);
	}

	ngOnInit() {
	}

	attach() {
		console.log('Attach clicked');
		this.projects = this.apiRequestsService.getProjects();
	}

	attachProject(project) {
		console.log('attachProject()', project, this.employee)
	}

}
