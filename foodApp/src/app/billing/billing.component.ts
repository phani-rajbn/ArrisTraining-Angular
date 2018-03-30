import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private data:DataService) { }
  ngOnInit() {
    console.log(JSON.stringify(this.data.cart));
  }
}
