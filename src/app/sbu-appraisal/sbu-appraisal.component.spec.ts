import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbuAppraisalComponent } from './sbu-appraisal.component';

describe('SbuAppraisalComponent', () => {
  let component: SbuAppraisalComponent;
  let fixture: ComponentFixture<SbuAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbuAppraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbuAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
