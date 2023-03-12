
import { Component, OnInit} from '@angular/core';
import { StockTickerService } from '../stock-ticker.service';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CustomTableComponent } from '../custom-table/custom-table.component';
@Component({
  selector: 'app-backtest',
  templateUrl: './backtest.component.html',
  styleUrls: ['./backtest.component.css']
})

export class BacktestComponent implements OnInit{
  show: boolean = false;
  backtests: [] =[];
 
  stocks=[
    "AAPL",
    "AMZN",
    "NVDA"
  ]
  
  constructor(  private stockService: StockTickerService
  ){
  }
  ngOnInit() {
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

  // service calllssss
  startBacktest(script:string,stock:string,start:string,end:string,timeframe:string){
    const b:BacktestInput = {script:script,stock:stock,start:start,end:end,timeframe:timeframe};
    console.log(b)
    this.stockService.startBacktest(b).subscribe(
      () => {console.log(b)}
    )
    this.show=false;
  }
  getAllBacktests() {
    this.stockService.getAllBacktests().subscribe((response:any)=>{
      this.backtests =  response;
    })
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
  stock?:any
  start?:any
  end?:any
  timeframe?:any
  gain?:any
  winRate?:any
}