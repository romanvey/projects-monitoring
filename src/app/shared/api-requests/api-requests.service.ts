import { Injectable } from '@angular/core';

@Injectable()
export class ApiRequestsService {

	constructor() { }

	addEmployee(employee) {
		// adding info before sending
		employee.project = 'No projects';
		// SIMULATING SENDING
		// from response
		employee.id = 3;
		return employee;
	}

	addProject(project) {
		// adding info before sending
		project.members = [];
		// SIMULATING SENDING
		// from response
		project.id = 3;
		return project;
	}

}
