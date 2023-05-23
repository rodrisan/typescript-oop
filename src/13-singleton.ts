// Avoid to create multiple instances of the same class.

export class MyService {
  static instance: MyService | null = null;

  private constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('runs only the first time');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('Service 1');
console.log('myService1', myService1.name);

const myService2 = MyService.create('Service 2');
console.log('myService2', myService2.name);

console.log('same instance? ', myService1 === myService2);
