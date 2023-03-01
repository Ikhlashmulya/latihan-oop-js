"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    set name(val) {
        this.name = val;
    }
    set age(val) {
        this._age = val;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
const person1 = new Person("Ikhlashmulya", 20);
console.log(person1.name);
console.log(person1.age);
