// var message = "Hello Typescript !";// Type inference
// message = 10;
// var x; // any (bad)
// x = 10;
// x = "Hello !";
// x = { name: "XYZ" };
// x = [];
var message; // type annotation
message = "Hello Typescript";
console.log(message);
var b;
var s;
var n;
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
var Fullname = person.fname, country = person.country, sport = person.sport;
// Destructuring with Arrays
var cars = ["BMW", "AUDI", "MERC"];
// var firstCar = cars[0];
// var secondCar = cars[1];
// OR
var firstCar = cars[0], secondCar = cars[2], _a = cars[3], thirdCar = _a === void 0 ? "XYZ" : _a;
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
function PrintBook(author, title) {
    if (author === void 0) { author = "Unknown"; }
    if (title === void 0) { title = "Unknown"; }
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
var Add = function (x, y) { return x + y; };
function Emp() {
    var _this = this;
    this.salary = 200000;
    setTimeout(function () {
        console.log(_this);
    }, 2000);
}
var emp = new Emp();
