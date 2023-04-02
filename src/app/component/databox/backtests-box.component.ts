import { Component } from '@angular/core';
import { Dynamic } from './dynamic.component';
import { StockTickerService } from 'src/app/stock-ticker.service';

@Component({
  selector: 'app-backtests-box',
  templateUrl: './backtests-box.component.html',
  styleUrls: ['./backtests-box.component.css']
})
export class BacktestsBoxComponent implements Dynamic{

  constructor(  private stockService: StockTickerService
  ){
  }

  startBacktest(script:string,stock:string,start:string,end:string,timeframe:string){
    const b:BacktestInput = {script:script,stock:stock,start:start,end:end,timeframe:timeframe};
    console.log(b)
    this.stockService.startBacktest(b).subscribe(
      () => {console.log(b)}
    )
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
