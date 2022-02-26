import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRatingComponent } from './hr-rating.component';

describe('HrRatingComponent', () => {
  let component: HrRatingComponent;
  let fixture: ComponentFixture<HrRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
