import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePlansComponent } from './active-plans.component';

describe('ActivePlansComponent', () => {
  let component: ActivePlansComponent;
  let fixture: ComponentFixture<ActivePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivePlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
