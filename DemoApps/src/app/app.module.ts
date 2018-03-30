import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/Forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { EmpRepositoryComponent } from './emp-repository/emp-repository.component';
import { EmpFilterPipe } from './emp-filter.pipe';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { RestClientComponent } from './rest-client/rest-client.component';
import { EmpServiceService } from "./emp-service.service";
import { HttpModule } from "@angular/http";

const appRoutes : Routes=[
  { path: '', component: CalcComponent},
  { path: 'EmpDemo', component: EmpRepositoryComponent},
  { path: 'RestDemo', component: RestClientComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    EmpRepositoryComponent,
    EmpFilterPipe,
    EmpDetailComponent,
    NewEmpComponent,
    RestClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
