import { Component, OnInit } from '@angular/core';
import { Employee } from '../Utils/employee';

@Component({
  selector: 'app-emp-repository',
  templateUrl: './emp-repository.component.html',
  styleUrls: ['./emp-repository.component.css']
})
export class EmpRepositoryComponent implements OnInit {

  constructor() { }
    public empList : Employee[] = [];
    public selectedEmp : Employee;
  ngOnInit() {
    this.addEmployee(new Employee({empID:123, empName:'Phaniraj', empAddress:'Bangalore'}));
    this.addEmployee(new Employee({empID:124, empName:'Mohan', empAddress:'Mysore'}));
    this.addEmployee(new Employee({empID:125, empName:'David', empAddress:'Dharwad'}));
    this.addEmployee(new Employee({empID:126, empName:'Somnath', empAddress:'Mysore'}));
  }
  addEmployee(emp : Employee){
    this.empList.push(emp);
    console.log("Employee is added successfully");
  }

  getAll(){
    return this.empList;
  }
  find(id:number){
    this.selectedEmp = this.empList.find(e=>e.empID == id);
  }
}
