import { ProjectsListService } from './../../services/projects-list/projects-list.service';
import { AddProjectDialogComponent } from './../../dialogs/add-project-dialog/add-project-dialog.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ApiRequestsService } from '../../shared/api-requests/api-requests.service';

@Component({
	selector: 'app-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
	projects: object[];
	projectTableHeaders: string[];

	constructor(private dialogService: DialogService,
	private projectsListService: ProjectsListService,
	private apiRequestsService: ApiRequestsService) { }

	ngOnInit() {
		this.projects = this.projectsListService.arrayToTableForm(this.apiRequestsService.getProjects());
		this.projectTableHeaders = ['Project', 'Status', 'Team number', 'Start date', 'End date'];
	}

	rowClicked(data) {
		console.log(data);
	}

	addProject() {
		const disposable = this.dialogService.addDialog(AddProjectDialogComponent, {
			title: 'Add project'
		})
			.subscribe((newProject) => {
				if (newProject) {
					console.log(newProject);
					
					if (newProject) {
						this.projects.push(this.projectsListService.toTableForm(newProject));
					}
				}
				console.log(this.projects);
			});
	}
}

