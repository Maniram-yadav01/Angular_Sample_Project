import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeedetailsbyidComponent } from './employeedetailsbyid/employeedetailsbyid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sortDirective } from './employee-details/sort.directive';
import { FilterTextPipe } from './pipe/filter-text.pipe';

const routes: Routes = [
  { path:'registration', component: EmployeeDetailsComponent },  // you must add your component here
  { path:'employeedetailsbyid/:empid', component: EmployeedetailsbyidComponent }, 
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeedetailsbyidComponent,
    sortDirective,
    FilterTextPipe
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:
   [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
