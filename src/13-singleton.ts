// Avoid to create multiple instances of the same class.

export class MyService {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }
}

const myService1 = new MyService('Service 1');
console.log('myService1', myService1.name);

const myService2 = new MyService('Service 2');
console.log('myService2', myService2.name);

console.log('same instance? ', myService1 === myService2);
