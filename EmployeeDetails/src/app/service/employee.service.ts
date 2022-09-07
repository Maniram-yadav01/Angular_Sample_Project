import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  
  // employees data api
  getData()
  {
    let url = "https://dummy.restapiexample.com/api/v1/employees";
    return this.http.get(url);
  }
  // image api
  getImage()
  {
    let url = "https://dummyjson.com/users";
    return this.http.get(url);
  }
}
