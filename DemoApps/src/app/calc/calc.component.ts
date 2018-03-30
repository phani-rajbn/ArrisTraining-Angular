import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  
  public value1: number = 123;
  public value2 : number = 234;
  public result : number =0;
  public operation : string;

  constructor() { }

  ngOnInit() {
  }
  divFunc() {
    this.result = this.value1 / this.value2;
  }
  mulFunc() {
    this.result = this.value1 * this.value2;
  }
  addFunc(){
    this.result = this.value1 + this.value2;
  }
  subFunc(){
    this.result = this.value1 - this.value2;
  }
//Ts file contain the data that U want to place inside the UI and operations that U want to do in the Ui...
  process(){
    debugger;
    switch (this.operation) {
      case "Add":
        this.addFunc();
        break;
    case "Subtract":
      this.subFunc();
      default:
    case "Multiply":
      this.mulFunc();
      break;
    case "Divide":
      this.divFunc();
      break;
    }
  }
}
