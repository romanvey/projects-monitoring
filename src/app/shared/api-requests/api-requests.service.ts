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
		return null;
		//return employee;
	}

	addProject(project) {
		// adding info before sending
		project.members = [];
		// SIMULATING SENDING
		// from response
		project.id = 3;
		return project;
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


	getProjects() {
		const result = [
			{
				project: 'Cycle',
				status: 'Active',
				startDate: '23/01/2018',
				endDate: '24/01/2018',
				id: 1,
				members: [2]
			},
			{
				project: 'Cycle 2.0',
				status: 'Active',
				startDate: '23/01/2018',
				endDate: '24/01/2018',
				id: 2,
				members: [1, 3]
			}];

		return result;
	}


}
