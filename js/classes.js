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

// const User = function ({ email, password }={}) {
//   this.email = email;
//   this.password = password;
// }

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };
// const mango = new User({ email: 'mango@mail.com', password: 11111 })

// mango.changeEmail('123@mail.com');
// console.log(mango);

class User {
  constructor(login, password) {
    this.login = login;
    this.password = password;    
  }
  showLogin() {
    // console.log(this.login);
  }
}

const user1 = new User('user1', 'qwerty')
// console.log(user1);

class NewUser extends User {
  constructor(name, age, login, password) {
    super(login, password)
    this.name = name;
    this.age = age;
  }
  updateAge() {
    return this.age += 1;
  }
}

const newUser1 = new NewUser('Vova', 25, 'volodymyr', 'qwertyui');
// console.log(newUser1);

// console.log(newUser1.updateAge());
// newUser1.showLogin();

// class BaseProduct{
//   constructor(title, price){
//     this.title = title;
//     this.price = price;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     return this._price = newPrice;
//   }

//   get title() {
//     return this._title
//   }
//   set title(value) {
//     return this._title = value
//   }
// }

// const baseProduct = new BaseProduct('banana', 28);
// console.log(baseProduct);

// console.log(baseProduct._price);
// console.log(baseProduct.price);
// baseProduct.price = 35;
// console.log(baseProduct.price);

// console.log(baseProduct._title);
// console.log(baseProduct.title);
// baseProduct.title = 'orange';
// console.log(baseProduct.title);
