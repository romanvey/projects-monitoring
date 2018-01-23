import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	employee;
	employeeInfo;

	constructor() { }

	ngOnInit() {
		this.employee = this.getEmployee();
		this.employeeInfo = ['Employee', 'Active project', 'Position', 'Hire date'];
	}

	getEmployee() {
		const result = [
			{
				public: { name: 'Roman Vey',
						project: 'No projects',
						position: 'Junior',
						hireDate: '23/01/2018'},
				private: { id: 1}
			},
			{
				public: { name: 'Somebody Test',
						project: 'No projects',
						position: 'Middle',
						hireDate: '23/01/2017'},
				private: { id: 2}
			}];

		return result;
	}

	rowClicked(data) {
		console.log(data);
	}

}
