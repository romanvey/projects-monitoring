import { ApiRequestsService } from './../../shared/api-requests.service';
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
					teamNumber: 0,
					startDate: project.startDate,
					endDate: project.endDate
				},
				private: {
					id: 6,
					members: []
				}
			};
	}
}
