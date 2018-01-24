import { ApiRequestsService } from './../../shared/api-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesListService {

	constructor(private apiRequestsService: ApiRequestsService) { }

	addEmployee(employee) {
		return this.apiRequestsService.addEmployee(employee);
	}

	tableForm(employee) {
		return {
			public: {
				name: employee.firstName + ' ' + employee.lastName,
				project: 'No projects',
				position: employee.position,
				hireDate: employee.hireDate
			},
			private: {
				id: employee.id
			}
		};
	}
}
