export class Employee {
    public empID : number;
    public empName: string;
    public empAddress : string;

     constructor(values:Object ={}) {
        Object.assign(this, values);
    } 
/*     constructor(id:number, name:string, addr : string) {
     this.empID = id;
     this.empName = name;
     this.empAddress = addr;   
    } */
}
