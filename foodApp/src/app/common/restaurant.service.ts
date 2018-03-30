import { Injectable } from '@angular/core';
import { Restaurant } from "./restaurant";

@Injectable()
export class RestaurantService {
  public data: Restaurant[] =[];
  public  menuItems =[];
  constructor() { 
    this.data.push(new Restaurant(11, 'Vasudev Adigas', 'Dickensons Road','South Indian'));
    this.data.push(new Restaurant(12, 'Chutney chang', 'Muesuem Road','Chinese'));
    this.data.push(new Restaurant(13, 'Bhimas', 'Church Street','Andhra'));
    this.data.push(new Restaurant(14, 'Shanti Sagar', 'MG Road','South Indian'));
    this.data.push(new Restaurant(15, 'Chow Min Jow', 'Brigade Road','Thai'));
    this.data.push(new Restaurant(16, 'Vidyarthi Bhavan', 'Gandhi Bazaar Road','South Indian'));
  
    //List of menu items................
    this.menuItems = [
      {
        "id":11, 
        "menu":[
          {"name":"1_item 1", "price": 100},
          {"name":"1_item 2", "price": 150},
          {"name":"1_item 3", "price": 120},
          {"name":"1_item 4", "price": 160}
        ]},
      {"id":12, "menu":[
        { "name": "2_item 1", "price": 130 },
        { "name": "2_item 2", "price": 150 },
        { "name": "2_item 3", "price": 110 },
        { "name": "2_item 4", "price": 100 }
      ]},
      {"id":13, "menu":[
        { "name": "3_item 1", "price": 50 },
        { "name": "3_item 2", "price": 170 },
        { "name": "3_item 3", "price": 123 },
        { "name": "3_item 4", "price": 166 }
      ]},
      {"id":14, "menu":[
        { "name": "4_item 1", "price": 100 },
        { "name": "4_item 2", "price": 150 },
        { "name": "4_item 3", "price": 120 },
        { "name": "4_item 4", "price": 160 }
      ]},
      {"id":15, "menu":[
        { "name": "5_item 1", "price": 110 },
        { "name": "5_item 2", "price": 100 },
        { "name": "5_item 3", "price": 220 },
        { "name": "5_item 4", "price": 360 }
      ]},
      {"id":16, "menu":[
        { "name": "6_item 1", "price": 700 },
        { "name": "6_item 2", "price": 450 },
        { "name": "6_item 3", "price": 120 },
        { "name": "6_item 4", "price": 210 }
      ]}
    ];
  }
  getAll(){
    return this.data;
  }

  get(id:number){
    return this.data.find(r=>r.id == id);
  }
  
  getMenuItems(id:number){
    return this.menuItems.find(m=>m.id== id);
  }
}
