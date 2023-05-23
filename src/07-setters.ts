export class MyDate {
  // private year: number;
  // private month: number;
  // private day: number;

  // constructor(year: number, month: number, day: number) {
  //   this.year = year;
  //   this.month = month;
  //   this.day = day;
  // }

  // Define and assign.
  // Needs the type access: public, private, protected.
  // Also can use defaults.

  // _ can be used to define a private property.
  constructor(
    private year: number = 1980,
    private _month: number = 1,
    // private day: number = 1
    private _day: number = 1
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  // public getDay(): number {
  //   return this.day;
  // }

  // Getter: Must return sth.
  // Can protect an attribute.
  // Allow to create a new method and be consumed as a property from outsite.
  public get day(): number {
    return this._day;
  }

  public get isLeapYear(): boolean {
    return (
      (this.year % 400 === 0 || this.year % 100 !== 0) && this.year % 4 == 0
    );
  }

  public get month(): number {
    return this._month;
  }

  public set month(value: number) {
    // Can make validations using rules.
    if (value >= 1 && value <= 12) {
      this._month = value;
    } else {
      throw new Error('month is out of range');
    }
  }
}

const myDate = new MyDate(1993, 7, 1);
console.log(myDate.printFormat());
myDate.month = 12;
console.log('this runs', myDate.month);
myDate.month = 78;
console.log('this never runs', myDate.month);
