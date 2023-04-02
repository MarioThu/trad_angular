
import { Component, OnInit} from '@angular/core';
import { StockTickerService } from '../stock-ticker.service';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CustomTableComponent } from '../custom-table/custom-table.component';
import { ColDef,GridApi} from 'ag-grid-community';
@Component({
  selector: 'app-backtest',
  templateUrl: './backtest.component.html',
  styleUrls: ['./backtest.component.css']
})

export class BacktestComponent implements OnInit{
  show: boolean = false;
  table:CustomTableComponent;
  defaultColDef= {resizable:true}; 
  columnDefs:any[];
  backtests: [] =[];
  dataSource:BacktestOutput[]=[{b_id:19,end:1676419200000,gain:0,script:1,start:1665792000000,status:"pending",stocks:"NVDA",timeframe:1,winRate:0}];
  stocks=[
    "AAPL",
    "AMZN",
    "NVDA"
  ]
  
  constructor(  private stockService: StockTickerService
  ){
  }
  ngOnInit() {
   this.stockService.getTickers().subscribe((response)=>console.log(response));
  }
 
  addBacktest(){
    this.show=!this.show
  }
  openBacktestTable(){
    this.getAllBacktests()
  }
  selectScript(){
    
  }
  selectAsset(){

  }
  async setdataSourceBacktest(){
    await this.getAllBacktests();
  }
  // service calllssss
  startBacktest(script:string,stock:string,start:string,end:string,timeframe:string){
    const b:BacktestInput = {script:script,stock:stock,start:start,end:end,timeframe:timeframe};
    console.log(b)
    this.stockService.startBacktest(b).subscribe(
      () => {console.log(b)}
    )
    this.show=false;
  }
  getAllBacktests(){
    this.stockService.getAllBacktests().subscribe((response:any)=>
      {
        this.dataSource=<BacktestOutput[]>response
        const keys =  Object.keys(this.dataSource[0]);
        let keys_ :any[]=[];
        keys.forEach(key=>keys_.push({field:key}));
        this.columnDefs = keys_;
        console.log(this.dataSource)
        console.log(this.columnDefs)
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