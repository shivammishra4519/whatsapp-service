import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncommingmsgComponent } from './incommingmsg.component';

describe('IncommingmsgComponent', () => {
  let component: IncommingmsgComponent;
  let fixture: ComponentFixture<IncommingmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncommingmsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncommingmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
