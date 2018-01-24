import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './../../app.component';
import { EmployeesListComponent } from './../../components/employees-list/employees-list.component';
import { ProjectsListComponent } from './../../components/projects-list/projects-list.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/employees-list',
		pathMatch: 'full'
	},
	{
		path: 'employees-list',
		component: EmployeesListComponent,
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
