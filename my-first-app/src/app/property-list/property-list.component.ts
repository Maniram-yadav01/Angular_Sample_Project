import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<any> =[
    {
      "id":1,
      "Type" : "House1",
      "Price":35353,
      "Name":"Noida"
    },
    {
      "id":2,
      "Type" : "House2",
      "Price":35353,
      "Name":"Delhi"
    },
    {
      "id":7,
      "Type" : "House5",
      "Price":35353,
      "Name":"Lko"
    },
    {
      "id":4,
      "Type" : "House",
      "Price":35353,
      "Name":"Noida"
    },
    {
      "id":3,
      "Type" : "House",
      "Price":35353,
      "Name":"Noida"
    },
    {
      "id":4,
      "Type" : "House",
      "Price":35353,
      "Name":"Noida"
    },
    {
      "id":3,
      "Type" : "House",
      "Price":35353,
      "Name":"Noida"
    },
    {
      "id":4,
      "Type" : "House",
      "Price":35353,
      "Name":"Noida"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
