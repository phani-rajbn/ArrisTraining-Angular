import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from "../emp-service.service";

@Component({
  selector: 'app-rest-client',
  templateUrl: './rest-client.component.html',
  styleUrls: ['./rest-client.component.css']
})
export class RestClientComponent implements OnInit {
  public data = [];
  public selectedEmp: any;
  public newEmp : any;
  constructor(private myservice : EmpServiceService) { 
    this.newEmp = { "empId" : 0, "empName": "",  "empAddress": ""};
  }

  ngOnInit() {
    this.myservice.getAll().subscribe(
      result=>{
        this.data = result;
      }
    )
  }

  insertRec(){
    debugger;    
    this.myservice.add(this.newEmp).subscribe(res=>{
      console.log(res);
    })
  }
  findEmp(emp): any{
    this.selectedEmp = emp;
  }
}
