1)How to use route in angular -------------------------
            1) Define path in  app.module.ts
                        const routes: Routes = [
                    { path:'registration', component: EmployeeDetailsComponent }  // you must add your component here
                    
                    ];
            2) register this path in app.module.ts
                        imports: [
                        BrowserModule,
                        RouterModule.forRoot(routes) // route ----Routes _Name
                    ],

            3) use routeLink in html page
                  <a class="nav-link"  routerLink="/registration" routerLinkActive="active" ariaCurrentWhenActive="page">Employees</a>

            4) use <router-outlet></router-outlet> in html page



2)How to use api in angular --------------------------
          1) in app.module.ts  import 
              imports: [
              HttpClientModule
              ]

          2 ) make a common service and define a function for api 
                  constructor(private http:HttpClient) { }
                    getData()
                    {
                      let url = "https://dummy.restapiexample.com/api/v1/employees";
                      return this.http.get(url);
                    }

          3) use api which component required and import common class service
                    public employeedata:any= [];
                  constructor(private employee:EmployeeService) { 

                    this.employee.getData().subscribe((res:any)=>{
                      
                    this.employeedata = res["data"];
                    console.log(this.employeedata);
                  
                  
                    
                  });

          4) use interpolation show data in ui
          

3)table ----------------------------------------

4) Use of pagination 
        Link: https://www.javacodegeeks.com/2019/04/angular-pagination-example.html
        command 
          npm install ngx-pagination 

5) use forntawesome 
              1) add in index.html 
                  <script src="https://kit.fontawesome.com/9b3b35e5d8.js" crossorigin="anonymous"></script>
              2) add in html 
                  <i class="fa-solid fa-circle-info text-left"></i>

6) How to show data for specific id , Link : https://www.youtube.com/watch?v=AsuFElOMDd0
        1) add routelink in html
               [routerLink] = "['/employeedetailsbyid/',item.id]"
        2) define path in app.module.ts
              const routes: Routes = [
                { path:'registration', component: EmployeeDetailsComponent },  // you must add your component here
                { path:'employeedetailsbyid/:empid', component: EmployeedetailsbyidComponent }, 
                
              ];

       3) get id in which component
              ngOnInit(): void {
                this.route.paramMap.subscribe((params)=>{
                  this.empId = params.get("empid");
                  console.log(this.empId);
                });

                this.employee.getData().subscribe((res:any)=>{
        
                this.employeedata = res["data"];
                      }

        4) show data in html page

7) how to open new tab ---------------
                  <td class="text-center"  routerLinkActive="active" >  
                  <a [routerLink] = "['/employeedetailsbyid/',item.id]" href = "" target="_blank">
                   <i class="fa-solid fa-circle-info text-left" > 
                    </i>
                  </a>
              </td>

8)How to navigate a specific path in angular ---
       1)first way using router link in html---------- --
             [routerLink] = "['/employeedetailsbyid/',item.id]"

     2) second way  usinf function ---------------
           1) in html -- 
                  <td class="text-center"  routerLinkActive="active" >  
                      <a (click) =  "send_id(item.id)" href = "" target="_blank">
                      <i class="fa-solid fa-circle-info text-left" > 
                        </i>
                      </a>
                  </td>
           2) in ts -----
                send_id(id:any)
                  {
                    this.router.navigate(['/employeedetailsbyid', id])
                    .then(() => {
                      window.location.reload();
                    });
                  }
9) how use pop in angular using bootstrap ----
        1) is ts file 
                declare var window:any; // declare a variable above the componenet
                1) export class EmployeeDetailsComponent implements OnInit {
        
                    public employeedata:any= [];
                    formModal:any; // define a variable
                    }

                2) ngOnInit(): void {
                  this.formModal = new window.bootstrap.Modal(
                  document.getElementById("exampleModal")
                    );
                  }'

                3) openMadal() /// define a function out sude the ngonit 
                    {
                      this.formModal.show();
                    }
        2) in html file
                1)  <div class="container">
                  <div class ="row mt-2">
                    <div  class ="col">
                      <button type="button" class="btn btn-primary" (click)="openMadal()">Open Map</button>
                    </div>
                  </div>
                </div>
              
                
                2)   <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ducimus earum suscipit reiciendis, maxime, tenetur debitis esse sint, impedit ipsum commodi! Laboriosam reprehenderit deserunt repellat nulla eum magni atque rerum?
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>


10) How to store data in local storage in angular --------
          ngOnInit(): void {
              
              this.employee.getData().subscribe((res:any)=>{
                
                this.employeedata = res.data;
                localStorage.setItem('ldata',JSON.stringify(this.employeedata));
                var data1:any = localStorage.getItem('ldata');
              this.data2 = JSON.parse(data1);
              
              });
              //localStorage.setItem('ldata',JSON.stringify(this.employeedata));
                  var data1:any = localStorage.getItem('ldata');
                this.data2 = JSON.parse(data1);
                }

11) how to sort by name and id 
    data2.sort((a:any, b:any) => a.id-b.id);   // by id
    data2.sort((a:any, b:any) => a.employee_name.localeCompare(b.employee_name)); // by name

12) how to sort by name ,id and salary using @HostListener("click")----------------------------------------------------
    https://sankhadip.medium.com/how-to-sort-table-rows-according-column-in-angular-9-b04fdafb4140 
      1) step in sort.ts-------------
            export class Sort {
            private sortOrder = -1;
            private collator = new Intl.Collator(undefined, {
                numeric: true,
                sensitivity: "base",
            });
            constructor() { }

            public startSort(property:any, order:any) {
                if (order === "desc") {
                    this.sortOrder = 1;
                }
                return (a: any, b: any) => {
                        return this.collator.compare(a[property], b[property]) * this.sortOrder;
                }
            }

        }

      2) step 2 in sort.directov.ts -------
          import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
          import { Sort } from './sort';


          @Directive({
              selector: '[appSort]'
          })

          export class sortDirective {
              @Input()
              appSort: Array<any> = [];

              constructor(private targetElem: ElementRef) { }
              @HostListener("click")
              sortData() {
                  const sort = new Sort();
                  const elem = this.targetElem.nativeElement;
                  const order = elem.getAttribute("data-order");
                  const property = elem.getAttribute("data-name");
                  if(order === "desc")
                  {
                    var x = this.appSort?.sort(sort.startSort(property,order));
                    
                    elem.setAttribute("data-order","desc");
                  }
                  else{
                      this.appSort.sort(sort.startSort(property,order));
                      elem.setAttribute("data-order","desc")
                  }
              }
          }

     3) step 3 in html 

          ``` <div class="container ">
        <div class="jumpotron">
          <div class="card">

            <div class="card-body">
              <table class="table  table-hover table-bordered table-sm">
                <thead class="table-dark">
                  <tr>

                    <th class="text-center" scope="col" >Id</th>
                    <th scope="col" [appSort]="data2" data-order="desc" data-name="employee_name">Name</th>
                    <th class="text-center" scope="col" [appSort]="data2" data-order="desc" data-name="employee_age">Age</th>
                    <th class="text-center" scope="col" [appSort]="data2" data-order = "desc" data-name="employee_salary">Salary</th>
                    <th class="text-center" scope="col">Get Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="" *ngFor="let item of data2">

                    <td class="text-center">{{item.id}}</td>
                    <td>{{item.employee_name}}</td>
                    <td class="text-center">{{item.employee_age}}</td>
                    <td class="text-center">{{item.employee_salary}}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

13) double div 
  https://coder-coder.com/display-divs-side-by-side/

Dummy api : https://dummyjson.com/

-----------------------Zooming effect on  mouse hover -------------------

.zoom {
  padding: 50px;
  background-color: green;
  transition: transform .2s; /* Animation */
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}


<div class="zoom"></div>

=================================================================
font awesome for icon : https://fontawesome.com/icons
=================================================================

===========================================================
bootstrap icon

 npm i bootstrap-icons --save
Then add this line to your styles.css file:

@import "~bootstrap-icons/font/bootstrap-icons.css";
From now on you can use it anywhere in your app, just like intended by the bootstrap documentation:

<i class="bi bi-star-fill"></i>

================================ local storage ================================================================
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
declare var window: any;

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
  Id: any;
  Name: any;
  ldata: any;
  data2: any;
  imagedata: any
  constructor(private employee: EmployeeService, private router: Router) {
    interface IEmployee {
      id: any,
      name: any,
      age: any
    }

  }
  ngOnInit(): void {
    // fetch employees data
    this.employee.getData().subscribe((res: any) => {
  
    
      this.employeedata = res.data;
      
      
      //store data in  local storage
      localStorage.setItem('ldata', JSON.stringify(this.employeedata));
      var data1: any = localStorage.getItem('ldata');
      this.data2 = JSON.parse(data1);
     
    });
     // get images
     this.employee.getImage().subscribe((res: any) => {
      this.imagedata = res.users;

    })

    // get data from local storage ldata
    var data1: any = localStorage.getItem('ldata');
    this.data2 = JSON.parse(data1);
  
   

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
// delete data from arrya
deleteItem (Id:any){
  var index = 0;
  for(var val of this.data2)
  {
    if(val.id == Id) 
    {
      this.data2.splice(index,1);
      break;
    }
    else
       index = index+1;
    // console.log(val.id);
    // console.log("id"+id)
  }
}


}

====================================================================================================================
=================== delete  function ==========================================================
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
      // console.log(val.id);
      // console.log("id"+id)
    }
  }
  ======================================================================================================
  modification :       09/09/2022 
    1) apply validation for number   -- done
    2) use edit and delete icon   --done
    3) use up and down arrow for sorting  -- done 
    4) add a modal for delete button   - done

    https://jasonwatmore.com/post/2020/07/07/angular-10-reactive-forms-validation-example
    https://www.freecodecamp.org/news/how-to-validate-angular-reactive-forms/
    https://www.itsolutionstuff.com/post/allow-only-numbers-in-textbox-using-angularexample.html

in ts file
  private buildForm() {
    return this.formBuilder.group({

      id: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      employee_name: ['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      employee_age: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      employee_salary: ['', [Validators.required,Validators.pattern("^[0-9]*$")]]

    });
  }
in html 
 <div class="mb-3">
                <label for="employee_age" class="form-label">Employee_Age</label>
                <input type="text" formControlName="employee_age" class="form-control" id="employee_age"
                  placeholder="employee_age"
                  [ngClass]="{'is-invalid': registerForm.get('employee_age')?.touched && registerForm.get('employee_age')?.errors}">
                <div *ngIf="registerForm?.get('employee_age')?.touched && registerForm?.get('employee_age')?.errors"
                  class="invalid-feedback">
                  <div *ngIf="registerForm?.get('employee_age')?.errors?.['required']">employee_age is required</div>
                  <div *ngIf="registerForm?.get('employee_age')?.errors?.['pattern']">employee_age must be a number</div>
                  
                </div>
              </div>


============================================================================================================
  modification : 13/09/2022
1)Add a new email id field    -- done
2) add validation error message when take input field   --- done 
3) use json server   -- done 

// api chnaged
    // let url = "https://dummy.restapiexample.com/api/v1/employees";
    let url = "http://localhost:3000/data";
==========================================
//validation error message when take input field

2)ts file

employee_salary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],

html
<!-- employee_salary -->
              <div class="mb-3">
                <label for="employee_salary" class="form-label">employee_salary</label>
                <input type="text" formControlName="employee_salary" class="form-control" id="employee_salary"
                  placeholder="employee_salary"
                  [ngClass]="{'is-invalid': registerForm.get('employee_salary')?.dirty && registerForm.get('employee_salary')?.errors}">
                <div
                  *ngIf="registerForm?.get('employee_salary')?.dirty && registerForm?.get('employee_salary')?.errors"
                  class="invalid-feedback">
                  <div *ngIf="registerForm?.get('employee_salary')?.errors?.['required']">Salary is required
                  </div>
                    <div *ngIf="registerForm?.get('employee_salary')?.errors?.['pattern']">Salary must be a number</div>
                    
                </div>
              </div>
==================
3)we can use json server
json-server --watch api.json
=================================================================================================================


==============================================================================================================================================
version 1.0.0
1) Text box for searching base on name    -- done
2)validation
     number field me string ko enter karne pr string enter no ho (use jquery and asscci code)

                                  => date 22/09/2022    
==============================================================================================================================================
How to use pipe for filter
command for pipe:
      ng g p FilterText

1)filter-text.pipe.ts

      import { Pipe, PipeTransform } from '@angular/core';
      import { IData } from '../modals/IEmployees';

      @Pipe({
        name: 'filterText'
      })
      export class FilterTextPipe implements PipeTransform {

        transform(emp: IData[], filterText : string): IData[] {
          return filterText ? emp.filter(game => game.employee_name.toLowerCase().indexOf(filterText) > -1) : emp;
        }
        

      }

2)in ts file 
      filterText : string = ''; // for filter declare variable
      
3) html file
      <!-- Filter input -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Filter</label>
      <input type="email" class="form-control" [(ngModel)]="filterText" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
4) same html file
   <tr class="" *ngFor="let item of data2 | filterText : filterText ; let i = index ">

          <td class="text-center zoom">{{item.id}}</td>
          <td class="zoom">{{item.employee_name}}</td>
          <td class="text-center zoom">{{item.employee_age}}</td>
          <td class="text-center zoom">{{item.employee_salary}}</td>
          <td class="text-center zoom">{{item.email}}</td>
          
        </tr>
==============================================================================================================================================


==============================================================================================================================================
how to use jquery
npm install --save jquery
npm install -D @types/jquery
// import
import * as $ from 'jquery';
How to force Input field to enter numbers only using jquery
     Link: https://www.nicesnippets.com/blog/how-to-allow-only-numbers-in-textbox-using-jquery
==============================================================================================================================================
---------------------------------------------------- How to force Input field to enter numbers only using jquery--------------------------------

how to use jquery
npm install --save jquery
npm install -D @types/jquery
// import
import * as $ from 'jquery';

Link: https://www.nicesnippets.com/blog/how-to-allow-only-numbers-in-textbox-using-jquery

<!DOCTYPE html>
<html>
<head>
  <title>JQuery - Allow only numeric values in Textbox - nicesnippets.com</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
</head>
<body>
   
<div class="container">
  <h1>JQuery - Allow only numeric values in Textbox - nicesnippets.com</h1>
         
      <label>Enter Value:</label>
      <input type="text" name="myValue" class="allow-numeric" >
      <span class="error" style="color: red; display: none">* Input digits (0 - 9)</span>
    
</div>
    
<script type="text/javascript">
    
    $(document).ready(function() {
      $(".allow-numeric").bind("keypress", function (e) {
          var keyCode = e.which ? e.which : e.keyCode
               
          if (!(keyCode >= 48 && keyCode <= 57)) {
            $(".error").css("display", "inline");
            return false;
          }else{
            $(".error").css("display", "none");
          }
      });
    });
     
</script>
      
</body>
</html>

==============================================================================================================================================
====================================  How to force Input field to enter alphabet only using jquery ========================================================
 
<html>
  <head>
    <title>JQuery - Allow only numeric values in Textbox - nicesnippets.com</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  </head>
<body>
    <input class="allow-numeric" />
    <span class="error" style="color: red; display: none">* only alphabet (a - z)</span>
    <script type="text/javascript">
    

    $(document).ready(function() {
      $(".allow-numeric").bind("keypress", function (e) {
          var keyCode = e.which ? e.which : e.keyCode
               
          if ((keyCode >= 48 && keyCode <= 57)) {
            $(".error").css("display", "inline");
            return false;
          }else{
            $(".error").css("display", "none");
          }
      });
    });
    </script>
</body>
</html>
==============================================================================================================================================
                                date 30/09/2022

 filterText is a pipe and filterText is input field, data2 json record
 <!-- search filter for record empty -->
        <ng-container *ngIf="( data2 | filterText : filterText) as result">
          <p *ngIf="result.length === 0">No Result</p>  
        </ng-container>


==============================================================================================================================================
if else

<div *ngIf="totalNumberOfRecord>0;else emptyRecord">

<ng-template #emptyRecord>
  <div class="forEmptyRecord">Sorry no data found</div>
</ng-template>

==============================================================================================================================================


==============================================================================================================================================

work on pagination and * all filed required
<span style="color: red">*</span>
==============================================================================================================================================

