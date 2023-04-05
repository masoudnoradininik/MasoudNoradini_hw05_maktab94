"use strict ";

// // --------- 1 ---------
// let user = {
//   name: "john",
//   age: 30,
//   sayHello: function () {
//     return console.log(`Hello ${this.name}`);
//   },
// };
// user.sayHello();

// // --------- 2 ---------
// const stopWatch = {
//   steps: 0,
//   increase() {
//     this.steps++;
//     return this;
//   },
//   decrease() {
//     this.steps--;
//     return this;
//   },
//   reset() {
//     this.steps = 0;
//     return this;
//   },
//   read() {
//     console.log(`تعداد قدم : ${this.steps}`);
//     return this;
//   },
// };
// stopWatch.increase().increase().increase().decrease().read();

// // --------- 3 ---------
// function sortArrayAge(arr) {
//   arr.sort((b, a) => b.age - a.age);
//   return arr;
// }

// const users = [
//   { name: "Jonas", age: 26 },
//   { name: "Caty", age: 18 },
//   { name: "Michel", age: 30 },
// ];
// console.log(sortArrayAge(users));

// // --------- 4 ---------

// // --------- 5 ---------

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());
// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );
