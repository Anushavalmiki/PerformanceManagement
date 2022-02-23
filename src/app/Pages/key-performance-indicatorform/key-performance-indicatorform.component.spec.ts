import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPerformanceIndicatorformComponent } from './key-performance-indicatorform.component';

describe('KeyPerformanceIndicatorformComponent', () => {
  let component: KeyPerformanceIndicatorformComponent;
  let fixture: ComponentFixture<KeyPerformanceIndicatorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPerformanceIndicatorformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPerformanceIndicatorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
