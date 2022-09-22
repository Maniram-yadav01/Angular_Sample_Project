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
