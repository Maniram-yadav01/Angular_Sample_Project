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

