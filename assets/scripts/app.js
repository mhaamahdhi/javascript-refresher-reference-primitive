//import { apiKey } from "./util.js"
//import { apiKey, abc } from "./util.js"

//import { apiKey, abc as content } from "./util.js";

//import * as util from "./util.js"

//console.log(util.apiKey);
//console.log(content);

//const userMessage = "Hello world";
// //console.log(userMessage)

// function createGreeting(userName, message = " hello") {
//   // console.log(userName);
//   // console.log(message);

//   return "Hi, I am " + userName + ". " + message;
// }

// const greet1 = createGreeting("Max");
// console.log(greet1);
// const greet2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greet2);
// // greetUser();

// // revisiting about the objects & classes
// const user = {
//   name: "Aqueel ",
//   age: 26,
//   greet() {
//     // this is called as method
//     console.log("Hellow!");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi");
//   }
// }

// const user1 = new User("Manuel", 26);
// console.log(user1);

//arrays & array method like map

// const hobbies = ["Sports", "cooking", "Reading"];
// console.log(hobbies[0]);
// hobbies.push("working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports"); // arrow function

// console.log(index);

// const edittedhobbies = hobbies.map((item) => ({ text: item })); // converting the string to other componenets
// console.log(edittedhobbies);

// function transformToObjects(numberArray) {
//   // Todo: Add your logic
//   // should return an array of objects

//   const edittednumarr = numberArray.map((item) => ({ val: item })); // converting the string to other componenets
//   return edittednumarr;

// }
// const numberArray = ["one","two","three"];
// const transformObjects = transformToObjects(numberArray);

// console.log(transformObjects);

// destructuring

// const [firstname, lastname] = ["Aqueel", "Ahamed"];
// // const firstname = userNameData[0];
// // const lastname = userNameData[1];

// console.log(firstname);
// console.log(lastname);

// // destructuring function parameters
// const { name: userName, age } = {
//   name: "Aqueel",
//   age: 26
// };

// console.log(userName);
// console.log(age);

// // spread operator
// const hobbies = ["Sports", "cooking"];
// const user = {
//   name: "Aqueel",
//   age: 26
// };

// const newHobbies = ["Reading"];
// const mergeHobbies = [...hobbies, ...newHobbies]; // this ... dots make it as a array not like a nested array withoutht threee dots we can get the nested array
// console.log(mergeHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// };

// console.log(extendedUser);

// const password = prompt("Your Password : ");

// if (password === "Hello") {
//   console.log("Hello Works!!");
// } else if (password === "hello") {
//   console.log("Hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

//manipulating the DOM
// const list = document.querySelector("ul");
// list.remove();

// //function as values
// function handleTimeout() {
//   //this is as a normal function to create the function as values
//   console.log("Timed Out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed Out ...again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// //defining funciton inside of functions
// function init() {
//   function greet() {
//     console.log("Hi");
//   }
//   greet();
// }

// init();

//reference vs Primitive values

let userMessage = "Hello!"; //primitive value // we can't edit them
userMessage = userMessage.concat("!!!");

const hobbies = ["sports", "cooking"]; // arrays are object they are called as reference values

hobbies.push("working");
console.log(hobbies);
