import { AddEmployeeDialogComponent } from './../../dialogs/add-employee-dialog/add-employee-dialog.component';
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
	}

	// Testing modal
	addEmployee() {
		const disposable = this.dialogService.addDialog(AddEmployeeDialogComponent, {
			title: 'Add employee'
		})
			.subscribe((newEmployee) => {
				console.log(newEmployee);
			});
	}

}
