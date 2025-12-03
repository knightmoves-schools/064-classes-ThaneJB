class Person {
   constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
}

const person = new Person(John, Stevens);

const guests = [];

function guestCounter(guests) {
  for (let i = 0; i < 3; i++) {
    guests.push(person.firstName, person.lastName);
  }
 return guests;
}
