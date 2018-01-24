import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './../../app.component';
import { EmployeeListComponent } from './../../components/employee-list/employee-list.component';
import { ProjectsListComponent } from './../../components/projects-list/projects-list.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/employees-list',
		pathMatch: 'full'
	},
	{
		path: 'employees-list',
		component: EmployeeListComponent,
	},
	{
		path: 'projects-list',
		component: ProjectsListComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
