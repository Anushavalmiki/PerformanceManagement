import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyResultAresFormComponent } from './key-result-ares-form.component';

describe('KeyResultAresFormComponent', () => {
  let component: KeyResultAresFormComponent;
  let fixture: ComponentFixture<KeyResultAresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyResultAresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyResultAresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
