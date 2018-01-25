import { EmployeesListService } from './../../services/employees-list/employees-list.service';
import { ApiRequestsService } from './../../shared/api-requests/api-requests.service';
import { AddEmployeeDialogComponent } from './../../dialogs/add-employee-dialog/add-employee-dialog.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
	selector: 'app-employees-list',
	templateUrl: './employees-list.component.html',
	styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
	employees: object[];
	employeeTableHeaders: string[];

	constructor(private dialogService: DialogService,
	private employeesListService: EmployeesListService,
	private apiRequestsService: ApiRequestsService) { }

	ngOnInit() {
		this.employees = this.employeesListService.arrayToTableForm(this.getEmployees());
		this.employeeTableHeaders = ['Employee', 'Email', 'Active project', 'Position', 'Hire date'];
	}

	getEmployees() {
		const result = [
			{
				firstName: 'Roman',
				lastName: 'Vey',
				email: 'roman.vey@gmail.com',
				project: 'No projects',
				position: 'Junior',
				hireDate: '23/01/2018',
				id: 1
			},
			{
				firstName: 'Somebody',
				lastName: 'Test',
				email: 'somebody@gmail.com',
				project: 'No projects',
				position: 'Middle',
				hireDate: '23/01/2017',
				id: 4
			}];

		return result;
	}

	rowClicked(data) {
		console.log(data);
	}

	
	addEmployee() {
		const disposable = this.dialogService.addDialog(AddEmployeeDialogComponent, {
			title: 'Add employee'
		})
			.subscribe((newEmployee) => {
				if (newEmployee) {
						this.employees.push(this.employeesListService.toTableForm(newEmployee));
				}
				console.log(this.employees);
			});
	}

}
