import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmediaComponent } from './sendmedia.component';

describe('SendmediaComponent', () => {
  let component: SendmediaComponent;
  let fixture: ComponentFixture<SendmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendmediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
