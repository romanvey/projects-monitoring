import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgPipesModule} from 'ngx-pipes';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { AddEmployeeDialogComponent } from './add-employee-dialog/add-employee-dialog.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
@NgModule({
	declarations: [
		AppComponent,
		ProjectsListComponent,
		EmployeeListComponent,
		TableComponent,
		ButtonComponent,
		AddEmployeeDialogComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgPipesModule,
		BootstrapModalModule
	],
	providers: [],
	entryComponents: [AddEmployeeDialogComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
