interface IPerson {
  name: string;
  sport: string;
  play?: () => void;
}
var person: IPerson = { name: "Djokovic", sport: "Tennis" };

interface IPlayer {
  country: string;
}
// class
class Person implements IPerson, IPlayer {
  name: string;
  sport: string;
  country: string;
  play() {
    console.log("Playing..");
  }
}
// class Car {
//   name: string = "BMW";
//   speed: number = 200;
// }

class Car {
  name: string;
  speed: number;
  constructor(name: string = "BMW", speed: number = 200) {
    this.name = name;
    this.speed = speed;
  }

  accelerate(): string {
    //return "The car " + this.name + " is running @ " + this.speed + " kmph !";
    return `The car ${this.name} is running @ ${this.speed} kmph !`;
  }
}

// var carObj = new Car("AUDI", 300);
// console.log(carObj.accelerate());

class JamesBondCar extends Car {
  isArmed: boolean;
  constructor(name: string, speed: number, isArmed: boolean) {
    super(name, speed);
    this.isArmed = isArmed;
  }
  accelerate() {
    return super.accelerate() + "Is it armed ? " + this.isArmed;
  }
}

var jbc = new JamesBondCar("Aston Martin", 400, true);
console.log(jbc.accelerate());

type Player = {
  name: string;
  age: number;
  sport: string;
  play: () => void;
};

var p: Player = {
  name: "Federer",
  sport: "Tennis",
  age: 41,
  play() {},
};

// Enhanced class Synatx
class EnhancedCar {
  constructor(public name: string = "BMW", public speed: number = 200) {}
}

var eCar = new EnhancedCar();

// Generics

function Swap<T>(x: T, y: T) {
  var temp: T;
  temp = x;
  x = y;
  y = temp;
}

Swap<number>(10, 20);
// Swap<string>(100, 200);

class Point<T, V> {
  l: T;
  b: V;
}

var point = new Point<string, number>();
