import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacktestComponent } from './backtest/backtest.component';
import { PrivHomeComponent } from './component/priv-home/priv-home.component';

const routes: Routes = [
   { path: 'backtest', component: BacktestComponent },
  { path: 'home', component: PrivHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
