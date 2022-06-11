import { Component, Input } from "@angular/core";
// decorator --
@Component({
  selector : 'app-property-card',
  templateUrl : 'property-card.component.html',
  styleUrls : ['property-card.component.css']

}

)
export class propertycardcomponent{
  @Input() property : any

  

}
