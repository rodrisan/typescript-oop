export class Animal {
  constructor(public name: string) {}

  public move() {
    console.log('Animal moving');
  }

  public greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

const nimi = new Animal('Nimi');
nimi.move();
console.log(nimi.greeting());

export class Dog extends Animal {
  constructor(
    name: string,
    private _owner: string
    ) {
    super(name);
  }
  public bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('wooof');
    }
  }

  get owner() {
    return this._owner;
  }
}

const doggy = new Dog('Doggy', 'Rod');
doggy.move();
doggy.bark(5);
console.log(doggy.greeting());
console.log(doggy.owner);
