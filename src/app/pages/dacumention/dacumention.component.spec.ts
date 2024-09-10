import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DacumentionComponent } from './dacumention.component';

describe('DacumentionComponent', () => {
  let component: DacumentionComponent;
  let fixture: ComponentFixture<DacumentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DacumentionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DacumentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
