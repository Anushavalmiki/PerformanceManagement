import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalCycleformComponent } from './appraisal-cycleform.component';

describe('AppraisalCycleformComponent', () => {
  let component: AppraisalCycleformComponent;
  let fixture: ComponentFixture<AppraisalCycleformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisalCycleformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalCycleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
