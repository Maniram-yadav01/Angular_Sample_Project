import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IData } from '../modals/IEmployees';
import { EmployeeService } from '../service/employee.service';
declare var window: any;
// jquery 
import * as $ from 'jquery';

// interface
export interface IEmployee {
  id: number,
  employee_name: any,
  employee_age: any,
  employee_salary: number
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {

  public employeedata: any = [];
  public employeeimage: any = [];

  p: any = 1;
  count: any = 5;
  EmpId: any;
  pageSizeOptions = "[5, 10, 25, 100]"
  // router: any;
  sessiondata: any;
  count1: number = 0;
  formModal: any;
  addEmployeeFormModal: any;
  Id: any;
  Name: any;
  ldata: any;
  data2: any;
  imagedata: any
  registerForm!: FormGroup;
  found: boolean = true;
  id: any;
  employee_salary: any;
  employee_age: any;
  employee_name: any;
  editEmployeeDetails: any;
  deleteModal: any;
  deletedId: any;
  email: any;
  filterText: string = ''; // for filter

  constructor(private formBuilder: FormBuilder, private employee: EmployeeService, private router: Router) { }






  ngOnInit(): void {
    // fetch employees data
    this.employee.getData().subscribe((res: any) => {
      this.data2 = res;
      console.log("get" + this.data2[0].id);
    });
    console.log("after" + this.data2);


    // get images
    this.employee.getImage().subscribe((res: any) => {
      this.imagedata = res.users;

    })
    // modal for id card
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    // modal for add employee details
    this.addEmployeeFormModal = new window.bootstrap.Modal(
      document.getElementById("addEmployeeModal")
    );
    // open delete modal 
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("exampleDeleteModal")
    );

    this.editEmployeeDetails = new window.bootstrap.Modal(
      document.getElementById("editExampleModalLabel")
    );

    this.registerForm = this.buildForm();

    // jquery validation for id 
    $(document).ready(function () {
      $(".allow-numeric-id").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode

        if (!(keyCode >= 48 && keyCode <= 57)) {
          $(".error-id").css("display", "inline");
          return false;
        } else {
          $(".error-id").css("display", "none");
        }
      });
    });
    // jquery validation for name
    $(document).ready(function () {
      $(".allow-alphabet-name").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode

        if ((keyCode >= 48 && keyCode <= 57)) {
          $(".error-name").css("display", "inline");
          return false;
        } else {
          $(".error-name").css("display", "none");
        }
      });
    });

    

     // jquery validation for age
     $(document).ready(function () {
      $(".allow-numeric-age").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode

        if (!(keyCode >= 48 && keyCode <= 57)) {
          $(".error-age").css("display", "inline");
          return false;
        } else {
          $(".error-age").css("display", "none");
        }
      });
    });

     // jquery validation for salary
     $(document).ready(function () {
      $(".allow-numeric-salary").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode

        if (!(keyCode >= 48 && keyCode <= 57)) {
          $(".error-salary").css("display", "inline");
          return false;
        } else {
          $(".error-salary").css("display", "none");
          $().ready(function () {

            // $('#salary').delay(1000);
            // $('#salary').hide(1000);
          });
          
        }
      });
    });

    // jquery validation for salary
     $(document).ready(function () {
      $(".allow-numeric-salary").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode

        if (!(keyCode >= 48 && keyCode <= 57)) {
          $(".error-salary").css("display", "inline");
          return false;
        } else {
          $(".error-salary").css("display", "none");
          $().ready(function () {

            // $('#salary').delay(1000);
            // $('#salary').hide(1000);
          });
          
        }
      });
    });

    

   
  }
  private buildForm() {
    return this.formBuilder.group({

      id: ['', [Validators.required]],
      employee_name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      employee_age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      employee_salary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email]]

    });
  }
  openMadal(id: any, name: any) {
    this.Id = id;
    this.Name = name;
    this.formModal.show();
  }
  closeModal() {
    this.formModal.hide();
  }

  // openMadalAddEmployeee
  openMadalAddEmployeee() {

    this.addEmployeeFormModal.show();
  }
  // open delete modal
  openDeleteMadal(id: any) {
    this.deletedId = id;
    this.deleteModal.show()
  }


  //edit employees details
  openEditMadal(id: any) {

    this.Id = id;

    for (var val of this.data2) {
      if (val.id == this.Id) {

        this.id = val.id;
        this.employee_name = val.employee_name;
        this.employee_age = val.employee_age;
        this.employee_salary = val.employee_salary;
        this.email = val.email;

        this.registerForm = this.formBuilder.group({

          id: [id, [Validators.required]],
          employee_name: [this.employee_name, [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
          employee_age: [this.employee_age, [Validators.required, Validators.pattern("^[0-9]*$")]],
          employee_salary: [this.employee_salary, [Validators.required, Validators.pattern("^[0-9]*$")]],
          email: [this.email, [Validators.required, Validators.email]]

        });
      }
      this.editEmployeeDetails.show();

    }
  }
  // for validation
  get f() {
    return this.registerForm.controls;
  }
  // add employee function
  addPost(addEmpData: any, id: number): void {
    for (let empData of this.data2) {
      if (empData.id == id) {
        alert("alraedy employee exist")
        window.location.reload(); // for reload 
        this.found = false;
        break
      }

    }
    if (this.found) {
      this.data2.push(addEmpData);
      console.log(this.data2);
      localStorage.setItem('ldata', JSON.stringify(this.data2));
      alert("added");
      window.location.reload(); // for reload 
    }
  }
  // update edit values
  updateData(id: any, updateValue: any) {
    this.employee.updateData(id, updateValue).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
  }
  // delete record
  deleteRecord(id: any) {
    this.employee.deleteRecord(id).subscribe(data => {
      console.log("deleted service" + data);
    });
    window.location.reload();
    console.log("employee");

  }
  //  insert record
  insertRecord(id: any, data: any) {
    for (let empData of this.data2) {
      if (empData.id == id) {
        alert("alraedy employee exist")
        window.location.reload(); // for reload 
        this.found = false;
        break
      }

    }
    if (this.found) {
      this.employee.insertRecord(data);

      alert("added");
      window.location.reload(); // for reload 
    }
  }
}
