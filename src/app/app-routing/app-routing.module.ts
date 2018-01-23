import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './../app.component';
import { EmployeeListComponent } from './../employee-list/employee-list.component'
import { ProjectsListComponent } from './../projects-list/projects-list.component'


const routes: Routes = [
	{
		path: '',
		redirectTo: '/employee-list',
		pathMatch: 'full'
	},
	{
		path: 'employee-list',
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