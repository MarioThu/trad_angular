import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit,OnDestroy,ViewChild,Type,Input, OnChanges, SimpleChanges } from '@angular/core';
import { BacktestsBoxComponent } from './backtests-box.component';
import { ScriptBoxComponent } from './script-box.component';
import { Dynamic } from './dynamic.component';
import { DynamicDirective } from './dynamic.directive';
@Component({
  selector: 'app-databox',
  templateUrl: './databox.component.html',
  styleUrls: ['./databox.component.css']
})
export class DataboxComponent implements OnInit,OnChanges {
  @Input() public boxType: Type<Dynamic>;
  @ViewChild(DynamicDirective, {static: true}) private dynamicHost!: DynamicDirective; 


  public ngOnInit(): void {
    this.loadComponent();
  }
  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['boxType'].currentValue)
    this.boxType = changes['boxType'].currentValue;
    this.loadComponent();
  }
  private loadComponent(): void {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<Dynamic>(this.boxType);
  }
}

