import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "../common/restaurant.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Restaurant } from "../common/restaurant";
import { DataService } from "../data.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cart :any = [];
  selectedHotel : Restaurant;
  currentHotelMenu : any;
  billAmount:number =0;
  constructor(private router:Router, private service: RestaurantService, private route: ActivatedRoute, private cartService : DataService) { 
    //console.log(route);
    let id = route.snapshot.params.id;
    this.selectedHotel = this.service.get(id);
    this.currentHotelMenu = this.service.getMenuItems(id);
  }

  ngOnInit() {
  
  }

  addToCart(id, item){
    console.log(item);
    item['qty'] = 1;//TO add quantity also if required....
    this.cart.push(item);
    this.billAmount += item.price * item.qty;
  }

  removeItem(id, item){
    var index = this.cart.indexOf(this.cart.find(i=>i.name == item.name));
    this.cart.splice(index, 1);
  }

  moveToBilling(cart){
    this.cartService.cart = cart;
    this.router.navigate(["./billing"]);
  }
}
