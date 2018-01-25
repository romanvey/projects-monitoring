import { ProjectsListService } from './../../services/projects-list/projects-list.service';
import { AddProjectDialogComponent } from './../../dialogs/add-project-dialog/add-project-dialog.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
	selector: 'app-projects-list',
	templateUrl: './projects-list.component.html',
	styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
	projects: object[];
	projectTableHeaders: string[];

	constructor(private dialogService: DialogService,
	private projectsListService: ProjectsListService) { }

	ngOnInit() {
		this.projects = this.getProjects();
		this.projectTableHeaders = ['Project', 'Status', 'Team number', 'Start date', 'End date'];
	}

	getProjects() {
		const result = [
			{
				public: {
					project: 'Cycle',
					status: 'Active',
					teamNumber: 1,
					startDate: '23/01/2018',
					endDate: '24/01/2018'
				},
				private: { id: 1,
				members: [2] }
			},
			{
				public: {
					project: 'Cycle 2.0',
					status: 'Active',
					teamNumber: 2,
					startDate: '23/01/2018',
					endDate: '24/01/2018'
				},
				private: { id: 2,
				members: [1, 3]}
			}];

		return result;
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
					const data = this.projectsListService.addProject(newProject);
					if (data) {
						this.projects.push(this.projectsListService.toTableForm(data));
					}
				}
				console.log(this.projects);
			});
	}
}

