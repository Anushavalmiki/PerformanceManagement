import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalReportComponent } from './appraisal-report.component';

describe('AppraisalReportComponent', () => {
  let component: AppraisalReportComponent;
  let fixture: ComponentFixture<AppraisalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
