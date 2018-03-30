import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "../Utils/employee";

@Component({
  selector: 'app-emp-detail',
  template: '<div class="detail" *ngIf="selectedEmp"><h3> Details of the Employee</h3><p>{{selectedEmp.empID }}</p><p> {{selectedEmp.empName }}</p><p> {{selectedEmp.empAddress }}</p></div>'
})
//if a component is dependent on a data, it could be injected thro a directive called Input that is defined in the angular/core. 

export class EmpDetailComponent implements OnInit {
@Input() selectedEmp : Employee
  constructor() { }

  ngOnInit() {
  }

}
