import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: any;
  constructor(private housing:HousingService ) { }

  ngOnInit(): void {
    this.housing.getallproperties().subscribe(
      data =>{
        this.properties = data
      },error =>{
        console.log(error);
      }
    )
  }

}
