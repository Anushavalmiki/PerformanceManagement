import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBUrattingDashComponent } from './sburatting-dash.component';

describe('SBUrattingDashComponent', () => {
  let component: SBUrattingDashComponent;
  let fixture: ComponentFixture<SBUrattingDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBUrattingDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBUrattingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
