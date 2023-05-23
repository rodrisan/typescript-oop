import { Dog } from "./09-protected";

function getValue1(value: number) {
  return value;
}

function getValue2(value: number | string | number[]) {
  return value;
}

// Generics


// Multiple types

// function getValue3<T, myType2>(value: T) {
//   const arr: myType2 = [];
//   return value;
// }

// getValue3<number, string>(12).toFixed();
// getValue3<string, number>('12').toLowerCase();
// getValue3<number[], boolean>([1,23,32,3123,3]).forEach;



function getValue<T>(value: T) {
  return value;
}

getValue(12).toFixed();
getValue('12').toLowerCase();
getValue([]).forEach;

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([1,23,32,3123,3]).forEach;


// Example with Dog
const doggy = new Dog('Doggy', 'Rod');
getValue<Dog>(doggy).greeting();
