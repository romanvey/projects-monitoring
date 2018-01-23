import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
@NgModule({
	declarations: [
		AppComponent,
		ProjectsListComponent,
		EmployeeListComponent,
		TableComponent,
		ButtonComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
