import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
declare var window:any;

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {

  public employeedata:any= [];
  public employeeimage:any= [];

  p: any = 1;
  count: any = 5;
  EmpId :any;
  pageSizeOptions="[5, 10, 25, 100]"
  // router: any;
  sessiondata:any;
  count1:number = 0;
  formModal:any;
  Id:any;
  Name :any;
  ldata:any;
  data2:any;
  imagedata :any
  constructor(private employee:EmployeeService,private router: Router) {
    interface IEmployee{
      id:any,
      name:any,
      age:any
    }

  }





  ngOnInit(): void {
    // fetch employees data
    var data1: any = localStorage.getItem('ldata');
    this.data2 = JSON.parse(data1);
    // get images
    this.employee.getImage().subscribe((res: any) => {
      this.imagedata = res.users;

    })

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
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


}
