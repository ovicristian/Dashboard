import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOneComponent } from './gallery-one.component';

describe('GalleryOneComponent', () => {
  let component: GalleryOneComponent;
  let fixture: ComponentFixture<GalleryOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
