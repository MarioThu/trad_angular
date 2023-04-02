import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistBoxComponent } from './watchlist-box.component';

describe('WatchlistBoxComponent', () => {
  let component: WatchlistBoxComponent;
  let fixture: ComponentFixture<WatchlistBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
