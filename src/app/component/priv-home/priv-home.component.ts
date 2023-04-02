import { Component, Type } from '@angular/core';
import { StockTickerService } from 'src/app/stock-ticker.service';
import { GridApi,GridReadyEvent} from 'ag-grid-community';
import { DataboxComponent} from '../databox/databox.component';
import { Dynamic } from '../databox/dynamic.component';
import { BacktestsBoxComponent } from '../databox/backtests-box.component';
import { ScriptBoxComponent } from '../databox/script-box.component';
@Component({
  selector: 'app-priv-home',
  templateUrl: './priv-home.component.html',
  styleUrls: ['./priv-home.component.css']
})
export class PrivHomeComponent {
  private gridApi!: GridApi<BacktestOutput>;
  boxType:Type<Dynamic>= ScriptBoxComponent;
  defaultColDef= {resizable:true}; 
  columnDefs:any[];
  backtests: [] =[];
  dataSource:BacktestOutput[]=[{b_id:19,end:1676419200000,gain:0,script:1,start:1665792000000,status:"pending",stocks:"NVDA",timeframe:1,winRate:0}];
  watchData:[]
  watchDef:[{field:"watchlist" ;name:"Watchlist"},
  {field:"Gain" ;name:"Gain"},
  {field:"winRate" ;name:"Win"}]
  backDef:[{field:"watchlist" ;name:"Watchlist"},
  {field:"Gain" ;name:"Gain"},
  {field:"winRate" ;name:"Win"}]
  stockDef:[{field:"watchlist" ;name:"Watchlist"},
  {field:"Gain" ;name:"Gain"},
  {field:"winRate" ;name:"Win"}]

  constructor(  private stockService: StockTickerService){
  }
  
  getAllBacktests(){
     this.stockService.getAllBacktests().subscribe((response:any)=>
        {
          this.dataSource=<BacktestOutput[]>response
          const keys =  Object.keys(this.dataSource[0]);
          let keys_ :any[]=[];
          keys.forEach(key=>keys_.push({field:key}));
          this.columnDefs = keys_;
          this.gridApi.sizeColumnsToFit();
        }
      );
      this.boxType=BacktestsBoxComponent;

 
      
  }
  getScriptData(){
    console.log("test")
    this.boxType=ScriptBoxComponent;
  }
  onGridReady(params: GridReadyEvent<BacktestOutput>) {
    this.gridApi = params.api;

    this.stockService.getAllBacktests().subscribe((response:any)=>
        {
          this.dataSource=<BacktestOutput[]>response
          const keys =  Object.keys(this.dataSource[0]);
          let keys_ :any[]=[];
          keys.forEach(key=>keys_.push({field:key}));
          this.columnDefs = keys_;
          this.gridApi.sizeColumnsToFit();
        }
      );
  }
  
  
}
export interface BacktestInput{
  script:any
  stock:any
  start:any
  end:any
  timeframe:any
}
export interface BacktestOutput{
  b_id?:any
  script?:any
  stocks?:any
  start?:any
  end?:any
  timeframe?:any
  gain?:any
  winRate?:any
  status?:any
}