// var message = "Hello Typescript !";// Type inference
// message = 10;

// var x; // any (bad)
// x = 10;
// x = "Hello !";
// x = { name: "XYZ" };
// x = [];

var message: string; // type annotation
message = "Hello Typescript";
console.log(message);

var b: boolean;
var s: string;
var n: number;

// Arrays
// let cars: string[] = ["BMW", "AUDI", "MERC"];
// // using object syntax - Generics
// var moreCars = new Array<string>("TATA", "MAHINDRA");

// var allCars: string[] = [...cars, ...moreCars]; // Spread Operator (with arrays)
// console.log(allCars);

// Spread Operator (with object)
// var person = { name: "Carlos Alcaraz", country: "Spain", sport: "LAWN TENNIS" };
// var player = { ...person, sport: "Tennis" };
// console.log(player);

// Destructuring with Objects
var person = {
  fname: "Carlos Alcaraz",
  country: "Spain",
  sport: "LAWN TENNIS",
  seeded: 3,
};
// var fname = person.fname;
// var country = person.country;
// OR

var { fname: Fullname, country, sport } = person;

// Destructuring with Arrays

let cars: string[] = ["BMW", "AUDI", "MERC"];
// var firstCar = cars[0];
// var secondCar = cars[1];
// OR

var [firstCar, , secondCar, thirdCar = "XYZ"]: string[] = cars;
console.log(thirdCar);

// function Add(x: number, y: number): number | string {
//   if (x < 0) {
//     return "X should be greater than zero !";
//   }
//   return x + y;
// }

// var result: string | number = Add(20, 20);

// Optional Parameters
// function PrintBook(author?: string, title?: string) {
//     console.log(author,title)
// }

// Default Parameters
function PrintBook(author: string = "Unknown", title: string = "Unknown") {
  console.log(author, title);
}
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");
PrintBook("Sumeet Wajpe");
PrintBook(undefined, "XYZ");

// Arrow Functions

// var Add = function (x, y) {
//   return x + y;
// };

// OR
// var Add = (x: number, y: number): number => {
//   return x + y;
// };

// OR
var Add = (x: number, y: number): number => x + y;

function Emp() {
  this.salary = 200000;
  setTimeout(() => {
    console.log(this);
  }, 2000);
}

var emp = new Emp();
