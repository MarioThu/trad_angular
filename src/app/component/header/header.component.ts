import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isShowen:boolean=false;
  constructor(){

  }
  toggle(){
    this.isShowen=!this.isShowen;
  }
}
