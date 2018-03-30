import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { MenuComponent } from "./menu/menu.component";
import { BillingComponent } from "./billing/billing.component";

const routes: Routes = [
  {
    path:'customer', component: CustomerComponent  
  },
  
  {
    path:'restaurants', component: RestaurantComponent  
  },
  
  {
    path:'menu/:id', component: MenuComponent  
  },
  {
    path:'billing', component: BillingComponent  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
