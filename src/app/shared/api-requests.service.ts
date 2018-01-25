import { Injectable } from '@angular/core';

@Injectable()
export class ApiRequestsService {

	constructor() { }

	addEmployee(employee) {
		// simulate sending
		employee.id = 3;
		employee.project = 'No projects';
		return employee;
	}

	addProject(project) {
		project.id = 4;
	}

}
