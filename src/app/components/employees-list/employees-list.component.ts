import { EmployeesListService } from './../../services/employees-list/employees-list.service';
import { ApiRequestsService } from './../../shared/api-requests/api-requests.service';
import { AddEmployeeDialogComponent } from './../../dialogs/add-employee-dialog/add-employee-dialog.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { EmployeeItemDialogComponent } from '../../dialogs/employee-item-dialog/employee-item-dialog.component';

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
		this.employees = this.employeesListService.arrayToTableForm(this.apiRequestsService.getEmployees());
		this.employeeTableHeaders = ['Employee', 'Email', 'Active project', 'Position', 'Hire date'];
	}


	rowClicked(employee) {
		console.log('rowClicked:', employee);
		const disposable = this.dialogService.addDialog(EmployeeItemDialogComponent, {
			employee: employee
		})
			.subscribe((result) => {
				console.log('result here');
		});
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
