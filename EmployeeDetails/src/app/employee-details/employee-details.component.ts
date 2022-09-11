import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IData } from '../modals/IEmployees';
import { EmployeeService } from '../service/employee.service';
declare var window: any;
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
  deletedId:any;

  constructor(private formBuilder: FormBuilder, private employee: EmployeeService, private router: Router) { }






  ngOnInit(): void {
    // fetch employees data
    var data1: any = localStorage.getItem('ldata');
    this.data2 = JSON.parse(data1);
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
  }
  private buildForm() {
    return this.formBuilder.group({

      id: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      employee_name: ['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      employee_age: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      employee_salary: ['', [Validators.required,Validators.pattern("^[0-9]*$")]]

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

  // get api data and store local storage 
  getapi() {
    this.employee.getData().subscribe((res: any) => {
      this.employeedata = res.data;
      //store data in  local storage
      localStorage.setItem('ldata', JSON.stringify(this.employeedata));
      var data1: any = localStorage.getItem('ldata');
      this.data2 = JSON.parse(data1);

    });
  }

  // delete array data  
  deleteItem(Id: any) {
    var index = 0;
    for (var val of this.data2) {
      if (val.id == Id) {
        this.data2.splice(index, 1);
        localStorage.setItem('ldata', JSON.stringify(this.data2));
        break;
      }
      else
        index = index + 1;

    }
  }
  // openMadalAddEmployeee
  openMadalAddEmployeee() {

    this.addEmployeeFormModal.show();
  }
  // open delete modal
  openDeleteMadal(id:any) {
    this.deletedId = id;
    this.deleteModal.show()
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

  //edit employees details
  openEditMadal(id: any) {

    this.Id = id;

    for (var val of this.data2) {
      if (val.id == this.Id) {

        this.id = val.id;
        this.employee_name = val.employee_name;
        this.employee_age = val.employee_age;
        this.employee_salary = val.employee_salary;

        this.registerForm = this.formBuilder.group({

          id: [id, [Validators.required]],
          employee_name: [this.employee_name, [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
          employee_age: [this.employee_age, [Validators.required, Validators.pattern("^[0-9]*$")]],
          employee_salary: [this.employee_salary, [Validators.required ,Validators.pattern("^[0-9]*$")]]

        });
      }
      this.editEmployeeDetails.show();

    }
  }
  // for validation
  get f() {
    return this.registerForm.controls;
  }
  // update edit values
  updateValues(data: IData, id: any) {
    for (let i = 0; i < this.data2.length; i++) {
      if (this.data2[i].id == id) {
        this.data2[i] = data;
        console.log(this.data2);
        break;
      }
    }
    localStorage.setItem('ldata', JSON.stringify(this.data2));
    window.location.reload();

  }
}
