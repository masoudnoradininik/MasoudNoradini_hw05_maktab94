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

// --------- 2 ---------
const stopWatch = {
  steps: 0,
  increase() {
    this.steps++;
    return this;
  },
  decrease() {
    this.steps--;
    return this;
  },
  reset() {
    this.steps = 0;
    return this;
  },
  read() {
    console.log(`تعداد قدم : ${this.steps}`);
    return this;
  },
};
stopWatch.increase().increase().increase().decrease().read();
