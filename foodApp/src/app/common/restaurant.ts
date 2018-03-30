export class Restaurant {
    public id:number;
    public name:string;
    public location:string;
    public image: string;
    public cuisine:string

    constructor(id:number, name:string, address:string, cuisine:string) {
         this.id = id;
         this.name = name;
         this.location = address;
         this.cuisine = cuisine;
    }
}
