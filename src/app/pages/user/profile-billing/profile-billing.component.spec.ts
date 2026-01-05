import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBillingComponent } from './profile-billing.component';

describe('ProfileBillingComponent', () => {
  let component: ProfileBillingComponent;
  let fixture: ComponentFixture<ProfileBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBillingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
