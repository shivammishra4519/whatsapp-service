import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWhatsappComponent } from './login-whatsapp.component';

describe('LoginWhatsappComponent', () => {
  let component: LoginWhatsappComponent;
  let fixture: ComponentFixture<LoginWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginWhatsappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
