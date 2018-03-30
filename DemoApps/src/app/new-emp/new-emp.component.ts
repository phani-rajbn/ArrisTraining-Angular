import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from "../Utils/employee";
import { FormsModule, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {
  newForm : FormGroup;
  public valueId: number;
  public valueName : string;
  public valueAddress : string;
  public errorMessage : string;
  @Output() onSave : EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor() { }

  ngOnInit() {
    
  }
  setDetails(values){
    debugger;
    if(values.empId > 200){
      this.errorMessage ="Not valid";
      return;
    }
    var emp = new Employee({empID:this.valueId, empName : this.valueName, empAddress: this.valueAddress});
    this.onSave.emit(emp);
    //value->get the value, touched->check whether the control is consumed
    //dirty=>not validated, pristine->Not submited, errors->to get all the errors of the dom....

  }
}
