import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktestsBoxComponent } from './backtests-box.component';

describe('BacktestsBoxComponent', () => {
  let component: BacktestsBoxComponent;
  let fixture: ComponentFixture<BacktestsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacktestsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacktestsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
