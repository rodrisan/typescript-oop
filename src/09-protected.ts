export class Animal {
  constructor(protected _name: string) {}

  public move() {
    console.log('Animal moving');
  }

  public greeting() {
    return `Hello, I'm ${this._name}`;
  }

  protected doSth() {
    console.log('do sth...');
  }
}

export abstract class Pet {
  constructor(protected _name: string) {}

  public move() {
    console.log('Animal moving');
  }

  public greeting() {
    return `Hello, I'm ${this._name}`;
  }

  protected doSth() {
    console.log('do sth...');
  }
}

const nimi = new Animal('Nimi');
nimi.move();
console.log(nimi.greeting());

export class Dog extends Animal {
  constructor(name: string, private _owner: string) {
    super(name);
  }
  public bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`wooof ${this._name}`);
    }
    this.doSth();
  }

  get owner() {
    return this._owner;
  }

  public move() {
    console.log('moving as dog :)');
    super.move();
  }
}

const doggy = new Dog('Doggy', 'Rod');
doggy.bark(5);
doggy.move();
