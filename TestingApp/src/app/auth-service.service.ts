import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceService {
  isAuthenciated() : boolean{
    if(!localStorage.getItem("details")==undefined)
      return false; 
    return true;
  }

  addFunc(v1:number, v2:number):number{
    return v1 + v2;
  }
  subFunc(v1:number, v2:number):number{
    return v1 - v2;
  }
  mulFunc(v1:number, v2:number):number{
    return v1 * v2;
  }
  divFunc(v1:number, v2:number):number{
    if(v2 == 0)
      throw "Not possible";
    return v1 / v2;
  }

  constructor() { }

}
