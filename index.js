class Person {
   constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
}

let person = new Person('John', 'Stevens');

const guests = [];

function guestCounter(guests) {
  for (let i = 0; i < 3; i++) {
    guests.push(person.firstName, person.lastName);
  }
 return guests;
}
