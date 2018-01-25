import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiRequestsService } from '../../shared/api-requests/api-requests.service';

export interface IEmployeeItemDialog {
	title: string;
}

@Component({
  selector: 'app-employee-item-dialog',
  templateUrl: './employee-item-dialog.component.html',
  styleUrls: ['./employee-item-dialog.component.css']
})
export class EmployeeItemDialogComponent extends DialogComponent<IEmployeeItemDialog, boolean> implements IEmployeeItemDialog {
  title: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
   }

  ngOnInit() {
  }

  save() {
    console.log('Save clicked');
    // this.result = null;
    this.close();
	}

}
