import { ApiRequestsService } from './../../shared/api-requests/api-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsListService {

	constructor(private apiRequestsService: ApiRequestsService) { }

	addProject(project) {
		return this.apiRequestsService.addProject(project);
	}

	toTableForm(project) {
		return {
				public: {
					project: project.project,
					status: project.status,
					teamNumber: project.members.length,
					startDate: project.startDate,
					endDate: project.endDate
				},
				private: {
					id: project.id,
					members: project.members
				}
			};
	}

	arrayToTableForm(projects: object[]) {
		const newForm = [];
		for (let i = 0; i < projects.length; i++) {
			newForm.push(this.toTableForm(projects[i]));
		}
		return newForm;
	}	
}
