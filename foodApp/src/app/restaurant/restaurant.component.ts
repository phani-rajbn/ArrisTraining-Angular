import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "../common/restaurant.service";
import { Restaurant } from "../common/restaurant";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public name: string;
  public address: string;
  public data : Restaurant[];
  public filterBy:string;
  public selectedData : Restaurant[];
  constructor(private service: RestaurantService) { }
  ngOnInit() {
    let details = JSON.parse(localStorage.getItem('details'));
    this.name = details.name;
    this.address = details.address;
    this.selectedData = this.data = this.service.getAll();
  }

  filter(type:string){
    if(type =="")
      this.selectedData = this.data;
    else{
      this.selectedData = this.data.filter(r=>r.cuisine.includes(type));
    }
  }
}
