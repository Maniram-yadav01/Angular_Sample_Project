import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  // employees data api
  getData() {
    // api chnaged
    // let url = "https://dummy.restapiexample.com/api/v1/employees";
    let url = "http://localhost:3000/data";
    return this.http.get(url);
    
  }
  // image api
  getImage() {
    let url = "https://dummyjson.com/users";
    return this.http.get(url);
  }
  //  update api
  updateData(id:any,updatevalues:any) {

    let url = "http://localhost:3000/data/";
 
    return this.http.put(url + id,updatevalues).subscribe(data => {
      console.log(data);
    });
    
  }

  // delete api
  deleteRecord(id:any) {
    let url = "http://localhost:3000/data/";
    return this.http.delete(url+id).subscribe(data => {
      console.log(data);
    });

  }

  // insert records
  insertRecord(data:any) {
    let url = "http://localhost:3000/data";
    return this.http.post(url,data).subscribe(data => {
      console.log(data);
    });

  }

}
