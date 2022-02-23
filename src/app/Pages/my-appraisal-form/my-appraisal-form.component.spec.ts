import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppraisalFormComponent } from './my-appraisal-form.component';

describe('MyAppraisalFormComponent', () => {
  let component: MyAppraisalFormComponent;
  let fixture: ComponentFixture<MyAppraisalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppraisalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppraisalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
