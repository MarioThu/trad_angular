import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptBoxComponent } from './script-box.component';

describe('ScriptBoxComponent', () => {
  let component: ScriptBoxComponent;
  let fixture: ComponentFixture<ScriptBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
