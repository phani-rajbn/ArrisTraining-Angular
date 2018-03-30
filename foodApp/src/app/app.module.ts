import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantService } from "./common/restaurant.service";
import { MenuComponent } from './menu/menu.component';
import { BigTextDirective } from './big-text.directive';
import { BillingComponent } from './billing/billing.component';
import { DataService } from "./data.service";


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RestaurantComponent,
    MenuComponent,
    BigTextDirective,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RestaurantService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
