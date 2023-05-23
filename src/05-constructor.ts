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
    private day: number = 1
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this.day);
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
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  public getDay(): number {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 1);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log('() => ', myDate2.printFormat());

const myDate3 = new MyDate(2023);
console.log('(2023) => ', myDate3.printFormat());

const myDate4 = new MyDate(2023, 5);
console.log('(2023, 5) => ', myDate4.printFormat());
