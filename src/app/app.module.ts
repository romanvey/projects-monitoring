import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';


import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { TableComponent } from './shared/table/table.component';
import { AddEmployeeDialogComponent } from './dialogs/add-employee-dialog/add-employee-dialog.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AddProjectDialogComponent } from './dialogs/add-project-dialog/add-project-dialog.component';
import { ApiRequestsService } from './shared/api-requests/api-requests.service';
import { EmployeesListService } from './services/employees-list/employees-list.service';
import { ProjectsListService } from './services/projects-list/projects-list.service';
import { EmployeeItemDialogComponent } from './dialogs/employee-item-dialog/employee-item-dialog.component';
import { ProjectItemDialogComponent } from './dialogs/project-item-dialog/project-item-dialog.component';


@NgModule({
	declarations: [
		AppComponent,
		ProjectsListComponent,
		EmployeesListComponent,
		TableComponent,
		AddEmployeeDialogComponent,
		AddProjectDialogComponent,
		EmployeeItemDialogComponent,
		ProjectItemDialogComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		NgPipesModule,
		BootstrapModalModule,
	],
	providers: [ApiRequestsService, EmployeesListService, ProjectsListService],
	entryComponents: [AddEmployeeDialogComponent,
		AddProjectDialogComponent,
		EmployeeItemDialogComponent,
		ProjectItemDialogComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
