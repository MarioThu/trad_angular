import { Component } from '@angular/core';
import { StockTickerService } from '../stock-ticker.service';
@Component({
  selector: 'app-backtest',
  templateUrl: './backtest.component.html',
  styleUrls: ['./backtest.component.css']
})
export class BacktestComponent {
  stocks=[
    "AAPL",
    "AMZN",
    "NVDA"
  ]
  constructor(  stockService: StockTickerService
  ){

  }

}
