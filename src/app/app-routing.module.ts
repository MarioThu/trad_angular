import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacktestComponent } from './backtest/backtest.component';

const routes: Routes = [
   { path: 'backtest', component: BacktestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
