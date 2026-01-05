import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDataComponent } from './coin-data.component';

describe('CoinDataComponent', () => {
  let component: CoinDataComponent;
  let fixture: ComponentFixture<CoinDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
