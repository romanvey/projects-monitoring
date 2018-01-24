import { Injectable } from '@angular/core';

@Injectable()
export class ApiRequestsService {

	constructor() { }
	addEmployee(employee) {
		// simulate sending
		employee.id = 3; // setting id
		return employee;
	}

}
