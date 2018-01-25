import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeItemDialogComponent } from './employee-item-dialog.component';

describe('EmployeeItemDialogComponent', () => {
	let component: EmployeeItemDialogComponent;
	let fixture: ComponentFixture<EmployeeItemDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EmployeeItemDialogComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployeeItemDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
