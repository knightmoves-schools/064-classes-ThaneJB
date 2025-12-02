class Person {
   constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
}

let person = new Person('John', 'Stevens');

let guests = [`${person.firstName} ${person.lastName},${person.firstName}`];
