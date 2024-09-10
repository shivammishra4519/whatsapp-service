import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitlistedipComponent } from './whitlistedip.component';

describe('WhitlistedipComponent', () => {
  let component: WhitlistedipComponent;
  let fixture: ComponentFixture<WhitlistedipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhitlistedipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhitlistedipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
