import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendedmsgComponent } from './sendedmsg.component';

describe('SendedmsgComponent', () => {
  let component: SendedmsgComponent;
  let fixture: ComponentFixture<SendedmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendedmsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendedmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
