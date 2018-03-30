import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//similar to promise of Javascript..

@Injectable()
export class EmpServiceService {

  constructor(private http: Http) { }

  add(data: any) : Observable<any>{
    console.log(data);
    //var rec ={"empID":55555, "empName":"Phaniraj","empAddress":"Bangalore"};
    debugger;
    //let headers = new Headers({ 'Content-Type': 'application/json'});
    //let options = new RequestOptions({ headers: headers });
    let url = 'http://localhost:1234';
    return this.http.post(url, data).map(res => {
      debugger;
      console.log(res);
    });
  }

  getAll() : Observable<any>{
    const url ='http://localhost:1234';
    return this.http.get(url).map(res =>{
      let data = res.json();
      console.log(data);
      return data;
    })
  } 
}
