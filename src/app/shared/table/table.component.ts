import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	@Input() data;
	@Input() headers;
	@Output() rowClick = new EventEmitter();

	constructor() { }

	ngOnInit() {
		console.log(this.data);
		console.log(this.headers);
	}

	rowClicked(data) {
		this.rowClick.emit(data);
	}

}
