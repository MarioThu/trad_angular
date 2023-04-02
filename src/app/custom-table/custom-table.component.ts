import { Component ,Input, OnInit} from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit{
    dataSource=[];
    columnDefs=[
      {}
    ];
    constructor(){

    }

   ngOnInit(): void {
   }
    
  setdataSource(data:any){
      this.dataSource=data;
      console.log("hä")
      console.log("dataSource"+this.dataSource)
      
      const keys =  Object.keys(this.dataSource[0])
      keys.forEach(key=>this.columnDefs.push({field:key}));
      console.log(this.columnDefs);
  }
}
