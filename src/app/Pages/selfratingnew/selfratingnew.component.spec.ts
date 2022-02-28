import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfratingnewComponent } from './selfratingnew.component';

describe('SelfratingnewComponent', () => {
  let component: SelfratingnewComponent;
  let fixture: ComponentFixture<SelfratingnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfratingnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfratingnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
