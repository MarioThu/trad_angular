import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivHomeComponent } from './priv-home.component';

describe('PrivHomeComponent', () => {
  let component: PrivHomeComponent;
  let fixture: ComponentFixture<PrivHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
