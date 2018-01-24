import { AddEmployeeDialogComponent } from './../add-employee-dialog/add-employee-dialog.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	employees;
	employeeInfos;

	constructor(public dialogService: DialogService) { }

	ngOnInit() {
		this.employees = this.getEmployees();
		this.employeeInfos = ['Employee', 'Active project', 'Position', 'Hire date'];
	}

	getEmployees() {
		const result = [
			{
				public: {
					name: 'Roman Vey',
					project: 'No projects',
					position: 'Junior',
					hireDate: '23/01/2018'
				},
				private: { id: 1 }
			},
			{
				public: {
					name: 'Somebody Test',
					project: 'No projects',
					position: 'Middle',
					hireDate: '23/01/2017'
				},
				private: { id: 2 }
			}];

		return result;
	}

	rowClicked(data) {
		console.log(data);
		this.showConfirm();
	}

// Testing modal
	showConfirm() {
		const disposable = this.dialogService.addDialog(AddEmployeeDialogComponent, {
			title: 'Confirm title',
			message: 'Confirm message'
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

}
