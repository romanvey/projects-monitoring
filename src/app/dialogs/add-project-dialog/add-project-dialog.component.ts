import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';

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

	constructor(dialogService: DialogService) {
		super(dialogService);

		this.project = new FormControl('', Validators.compose([
			Validators.pattern('[a-zA-Z]+'),
			Validators.minLength(3),
			Validators.required])
			);
		this.status = new FormControl('', Validators.required);
		this.startDate = new FormControl('', Validators.compose([
			Validators.pattern('[\\d]{2}\\/[\\d]{2}\\/[\\d]{4}'),
			Validators.required])
			);
		this.endDate = new FormControl('', Validators.compose([
			Validators.pattern('[\\d]{2}\\/[\\d]{2}\\/[\\d]{4}'),
			Validators.required])
			);

		this.form = new FormGroup({
			project: this.project,
			status: this.status,
			startDate: this.startDate,
			endDate: this.endDate
		});
	}
	save(data) {
		console.log('Add project');
		this.result = data;
		this.close();
	}
}
