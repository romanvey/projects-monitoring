import { ApiRequestsService } from './../../shared/api-requests/api-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesListService {

	constructor(private apiRequestsService: ApiRequestsService) { }

	toTableForm(employee) {
		return {
			public: {
				name: employee.firstName + ' ' + employee.lastName,
				email: employee.email,
				project: employee.project,
				position: employee.position,
				hireDate: employee.hireDate
			},
			private: {
				id: employee.id
			}
		};
	}
	arrayToTableForm(employees: object[]) {
		const newForm = [];
		for (let i = 0; i < employees.length; i++) {
			newForm.push(this.toTableForm(employees[i]));
		}
		return newForm;
	}
}
