import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from "./Utils/employee";

@Pipe({
  name: 'empFilter'
})
//In Angular, a pipe is a class that implements PipeTransform interface....
export class EmpFilterPipe implements PipeTransform {
  //U must  implement this function....
  transform(value: Employee[], search: string):Employee[] {
    debugger;
     if(search == undefined)
      return value;
     return value.filter(e=>e.empName.toLowerCase().includes(search.toLowerCase()) || e.empAddress.includes(search));
  }
}
