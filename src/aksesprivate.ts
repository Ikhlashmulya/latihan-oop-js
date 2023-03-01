class Person {

    private _name: string;
    private _age: number;

    constructor(name:string, age:number) {
        this._name = name;
        this._age = age;
    }

    public set name(val:string) {
        this.name = val;
    }

    public set age(val:number) {
        this._age = val;
    }

    public get name() {
        return this._name;
    }
    
    public get age() {
        return this._age;
    }
}

const person1 = new Person("Ikhlashmulya", 20);
console.log(person1.name);
console.log(person1.age);