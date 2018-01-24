import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { TableComponent } from './shared/table/table.component';
import { AddEmployeeDialogComponent } from './dialogs/add-employee-dialog/add-employee-dialog.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AddProjectDialogComponent } from './dialogs/add-project-dialog/add-project-dialog.component';
@NgModule({
	declarations: [
		AppComponent,
		ProjectsListComponent,
		EmployeeListComponent,
		TableComponent,
		AddEmployeeDialogComponent,
		AddProjectDialogComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		NgPipesModule,
		BootstrapModalModule
	],
	providers: [],
	entryComponents: [AddEmployeeDialogComponent,
		AddProjectDialogComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
