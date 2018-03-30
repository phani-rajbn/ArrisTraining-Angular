import { TestBed, inject } from '@angular/core/testing';
import { AuthServiceService } from './auth-service.service';

//Each Test code contains Test Suite..
describe('Service checks', ()=>{
  let service : AuthServiceService;    
  //setup...
  beforeEach(()=>{
      console.log("Setup is  happening...");
      service = new AuthServiceService();
      localStorage.setItem("details","SomeValue");
    });

    //teardown...
    afterEach(()=>{
      service = null;
      console.log("Service testing is done....");
      localStorage.removeItem("details");
    })

    it("should return false when no details are set", ()=>{
      expect(service.isAuthenciated()).toBeTruthy();
    });

    it("should add 2 numbers", ()=>{
      expect(service.addFunc(123, 213)).toBe((123+213));
    })
    it("should multiply 2 numbers", ()=>{
      expect(service.mulFunc(123, 213)).toBe((123 * 213));
    })
    it("should subtract 2 numbers", ()=>{
      expect(service.subFunc(123, 213)).toBe((123 - 213));
    })

    it("should throw error for divide by Zero", ()=>{
      expect(service.divFunc(123, 0)).toThrow();
    });
});