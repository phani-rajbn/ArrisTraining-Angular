import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public name:string;
  public address:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  save(){
    //localstorage is a feature  of HTML5 to store user information in the device that runs the app....
    var details = {'name': this.name, 'address': this.address};
    localStorage.setItem("details", JSON.stringify(details));
    this.router.navigate(['./restaurants']);
  }
}
