import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoreplyComponent } from './autoreply.component';

describe('AutoreplyComponent', () => {
  let component: AutoreplyComponent;
  let fixture: ComponentFixture<AutoreplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoreplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
