import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backtest } from './backtest/backtest.component';
@Injectable({
  providedIn: 'root'
})
export class StockTickerService {
  url = "http://18.192.214.203:5000";
  
  constructor(private httpclient: HttpClient) { }
  public startBacktest(backtest: Backtest):Observable<object>{  
    console.log("test");
    return this.httpclient.post("http://18.192.214.203:5000/startBacktest",backtest)
  }
}
