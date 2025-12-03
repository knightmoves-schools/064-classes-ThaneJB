class Person {
   constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastNamez = lastName;
   }
}

let person = new Person('John', 'Stevens');

var guests = [`${person.firstName} ${person.lastNamez}`];

function guest(){
  var guests = [`${person.firstName}`];
  console.log(guest);
}