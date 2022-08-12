import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employeedetailsbyid',
  templateUrl: './employeedetailsbyid.component.html',
  styleUrls: ['./employeedetailsbyid.component.css']
})
export class EmployeedetailsbyidComponent implements OnInit {
  public employeedata:any= [];

  constructor(private route : ActivatedRoute,private employee:EmployeeService , private router:Router) {

    
   }

  empId:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.empId = params.get("empid");
      console.log(this.empId+"Id");
      
    });
    this.employee.getData().subscribe((res:any)=>{
      
      this.employeedata = res["data"];
      console.log(this.employeedata);
     
    
      
    });
  }

  back(){
    window.close();
    this.router.navigate(['registration']);


  }

}
