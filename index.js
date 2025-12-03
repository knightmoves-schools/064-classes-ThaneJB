class Person {
   constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastNamez = lastName;
   }
}

let person = new Person('John', 'Stevens');

let guests = [`${person.firstName} ${person.lastNamez},${person.firstName}`];
