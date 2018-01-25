import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../../shared/api-requests/api-requests.service';

export interface IAddProjectDialog {
	title: string;
}

@Component({
	selector: 'app-add-project-dialog',
	templateUrl: './add-project-dialog.component.html',
	styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent extends DialogComponent<IAddProjectDialog, boolean> implements IAddProjectDialog {
	title: string;
	form: FormGroup;
	project: FormControl;
	status: FormControl;
	startDate: FormControl;
	endDate: FormControl;

	cannotCreateProject: boolean;

	constructor(dialogService: DialogService,
	private apiRequestsService: ApiRequestsService) {
		super(dialogService);

		this.cannotCreateProject = false;

		this.project = new FormControl('', Validators.compose([
			Validators.pattern('[a-zA-Z\\. 0-9-]+'),
			Validators.minLength(3),
			Validators.required])
			);
		this.status = new FormControl('', Validators.required);
		this.startDate = new FormControl('', Validators.compose([
			Validators.pattern(String.raw`(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)`),
			Validators.required])
			);
		this.endDate = new FormControl('', Validators.compose([
			Validators.pattern(String.raw`(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)`),
			Validators.required])
			);

		this.form = new FormGroup({
			project: this.project,
			status: this.status,
			startDate: this.startDate,
			endDate: this.endDate
		});
	}
	save(newProject) {
		console.log('Add project');
		const response = this.apiRequestsService.addProject(newProject);
		if (response) {
			this.cannotCreateProject = false;
			this.result = response;
			this.close();
		} else {
			this.cannotCreateProject = true;
		}
	}
}
