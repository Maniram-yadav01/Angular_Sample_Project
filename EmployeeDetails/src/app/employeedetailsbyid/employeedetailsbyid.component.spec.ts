import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetailsbyidComponent } from './employeedetailsbyid.component';

describe('EmployeedetailsbyidComponent', () => {
  let component: EmployeedetailsbyidComponent;
  let fixture: ComponentFixture<EmployeedetailsbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedetailsbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedetailsbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
