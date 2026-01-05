import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSidebarComponent } from './dark-sidebar.component';

describe('DarkSidebarComponent', () => {
  let component: DarkSidebarComponent;
  let fixture: ComponentFixture<DarkSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
