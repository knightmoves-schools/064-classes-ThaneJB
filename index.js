class Person {
   constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
}

let person = new Person(`John`, `Stevens`);

var guests = [];


  for (let i = 0; i < 4; i++) {
    guests.push(person.firstName);
  }

