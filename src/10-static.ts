// Statics

console.log(Math.PI);
console.log(Math.max(1, 3, 5, 0));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}

console.log('MyMath.PI', MyMath.PI);
// Math.PI = 12;

console.log('MyMath.max', MyMath.max(12,3,12,3,34,4));

const numbers = [1,432,4,4124,2354,5,5];
console.log('MyMath.max spread array: ', MyMath.max(...numbers));

console.log('MyMath.max', MyMath.max(-1, -9, -8));
