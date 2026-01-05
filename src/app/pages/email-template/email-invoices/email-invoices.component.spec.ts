import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInvoicesComponent } from './email-invoices.component';

describe('EmailInvoicesComponent', () => {
  let component: EmailInvoicesComponent;
  let fixture: ComponentFixture<EmailInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
