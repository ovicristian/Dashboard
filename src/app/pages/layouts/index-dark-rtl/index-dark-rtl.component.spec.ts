import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDarkRtlComponent } from './index-dark-rtl.component';

describe('IndexDarkRtlComponent', () => {
  let component: IndexDarkRtlComponent;
  let fixture: ComponentFixture<IndexDarkRtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexDarkRtlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexDarkRtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
