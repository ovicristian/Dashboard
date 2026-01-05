import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupSuccessComponent } from './auth-signup-success.component';

describe('AuthSignupSuccessComponent', () => {
  let component: AuthSignupSuccessComponent;
  let fixture: ComponentFixture<AuthSignupSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSignupSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthSignupSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
