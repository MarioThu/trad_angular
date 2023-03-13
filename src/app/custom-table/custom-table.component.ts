import { Component ,Input, OnInit} from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit{
    @Input() dataSource=[{"default":"default"}];
    columnDefs: ColDef[];
    constructor(){

    }

    ngOnInit(){
      console.log(this.dataSource)
      this.columnDefs = <ColDef[]> Object.keys(this.dataSource[0])
    }
    
}
