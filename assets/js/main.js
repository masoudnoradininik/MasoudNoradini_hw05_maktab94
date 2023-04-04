"use strict ";

// --------- 1 ---------
let user = {
  name: "john",
  age: 30,
  sayHello: function () {
    return console.log(`Hello ${this.name}`);
  },
};
user.sayHello();
