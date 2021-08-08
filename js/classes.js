// class Guest{
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }

//   getFullInfo() {
//     console.log(`Guest ${this.name}
//       Room number ${this.roomNumber}`);
//   }

// };
// console.log(Guest);
// console.log(typeof Guest);
// console.log(Guest.prototype);

// const mango = new Guest('Mango', 46);
// console.log(mango);
// mango.getFullInfo()

const User = function ({ email, password }={}) {
  this.email = email;
  this.password = password;
}

User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};
const mango = new User({ email: 'mango@mail.com', password: 11111 })

mango.changeEmail('123@mail.com');
console.log(mango);