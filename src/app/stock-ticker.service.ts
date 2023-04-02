import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BacktestInput } from './backtest/backtest.component';
@Injectable({
  providedIn: 'root'
})
export class StockTickerService {
  url = "http://3.126.82.110:5000";
  
  constructor(private httpclient: HttpClient) { }
  public startBacktest(backtest: BacktestInput):Observable<object>{  
    console.log("test");
    return this.httpclient.post("http://3.126.82.110:5000/startBacktest",backtest)
  }
  public getAllBacktests():Observable<object>{
    return this.httpclient.get<object>("http://3.126.82.110:5000/allBacktests");
  }
  public getTickers():Observable<object>{
    return this.httpclient.get<object>("ftp://ftp.nasdaqtrader.com/SymbolDirectory/nasdaqlisted.txt");
  }
  
}
