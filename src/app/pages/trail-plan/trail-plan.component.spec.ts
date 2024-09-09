import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailPlanComponent } from './trail-plan.component';

describe('TrailPlanComponent', () => {
  let component: TrailPlanComponent;
  let fixture: ComponentFixture<TrailPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrailPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrailPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
