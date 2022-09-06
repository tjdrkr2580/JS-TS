type Score = "A" | "B" | "C" | "D";

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [grade: number]: Score;
}

let user: User = {
  name: "xx",
  age: 30,
  birthYear: 2000,
};

user.age = 10;
user.name = "yy";
user.gender = "male";
user.birthYear = 1990;

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

interface IsAdult {
  (age: number): boolean;
}

const e: IsAdult = (age) => {
  return age > 19;
};

e(30);

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go...");
  }
}

const f = new Bmw("green");
