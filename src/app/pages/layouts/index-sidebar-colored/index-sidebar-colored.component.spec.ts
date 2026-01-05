import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSidebarColoredComponent } from './index-sidebar-colored.component';

describe('IndexSidebarColoredComponent', () => {
  let component: IndexSidebarColoredComponent;
  let fixture: ComponentFixture<IndexSidebarColoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSidebarColoredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexSidebarColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
