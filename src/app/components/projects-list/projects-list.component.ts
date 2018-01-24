import { AddEmployeeDialogComponent } from './../../dialogs/add-employee-dialog/add-employee-dialog.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
	selector: 'app-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
	projects;
	projectInfos;

	constructor(public dialogService: DialogService) { }

	ngOnInit() {
		this.projects = this.getProjects();
		this.projectInfos = ['Project', 'Status', 'Team number', 'Start date', 'End date'];
	}

	getProjects() {
		const result = [
			{
				public: {
					project: 'Cycle',
					status: 'Active',
					teamNumber: 4,
					startDate: '23/01/2018',
					endDate: '24/01/2018'
				},
				private: { id: 1 }
			},
			{
				public: {
					project: 'Cycle 2.0',
					status: 'Active',
					teamNumber: 4,
					startDate: '23/01/2018',
					endDate: '24/01/2018'
				},
				private: { id: 2 }
			}];

		return result;
	}

	rowClicked(data) {
		console.log(data);
	}

// Testing modal
/*
	showConfirm() {
		const disposable = this.dialogService.addDialog(AddEmployeeDialogComponent, {
			title: 'Confirm title',
			data: 'Confirm message'
		})
			.subscribe((isConfirmed) => {
				// We get dialog result
				if (isConfirmed) {
					console.log('accepted');
				} else {
					console.log('declined');
				}
			});
		// We can close dialog calling disposable.unsubscribe();
		// If dialog was not closed manually close it by timeout
		setTimeout(() => {
			disposable.unsubscribe();
		}, 10000);
	}
*/
}

