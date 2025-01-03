export class User {
    name: string;
    city: string;

    constructor(name: string, city:string) {
        this.name= name;
        this.city= city;
    }

    getFullName(){
        console.log(this.name + this.city); 
    }
}

const u1 = new User("Rupali", "pune")
u1.getFullName();
