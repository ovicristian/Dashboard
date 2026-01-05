import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSidebarComponent } from './light-sidebar.component';

describe('LightSidebarComponent', () => {
  let component: LightSidebarComponent;
  let fixture: ComponentFixture<LightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
