import { TestBed, inject } from '@angular/core/testing';

import { ProjectsListService } from './projects-list.service';

describe('ProjectsListService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProjectsListService]
		});
	});

	it('should be created', inject([ProjectsListService], (service: ProjectsListService) => {
		expect(service).toBeTruthy();
	}));
});
