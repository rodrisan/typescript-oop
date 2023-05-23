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
  constructor(
    private year: number = 1980,
    private month: number = 1,
    // private day: number = 1
    private _day: number = 1
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
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
      this.month += amount;
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
}

const myDate = new MyDate(1993, 7, 1);
console.log('1993=> isLeap? :', myDate.isLeapYear);
console.log(myDate.printFormat());
console.log(myDate.day);
// myDate.day = 12; // Can't assign values.
console.log(myDate.isLeapYear);


const myDate2 = new MyDate(2000, 7, 1);
console.log('2000 => isLeap? :', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 1);
console.log('2001 => isLeap? :', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 1);
console.log('2004 => isLeap? :', myDate4.isLeapYear);
