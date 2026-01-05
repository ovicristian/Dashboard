import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSidebarLightComponent } from './index-sidebar-light.component';

describe('IndexSidebarLightComponent', () => {
  let component: IndexSidebarLightComponent;
  let fixture: ComponentFixture<IndexSidebarLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSidebarLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexSidebarLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
