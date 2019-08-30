class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const person = new Person("qq");
alert(person.getName());