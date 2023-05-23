export interface Driver {
  database: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: 'theDatabae',
//   password: '23qsdqwe23s',
//   port: 2345,
// };

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string
  ) {}

  public connect(): void {
    // code.
  }

  public disconnect(): void {
    // code.
  }

  public isConnected(name: string): boolean {
    return true;
  }
}


class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  public connect(): void {
    // code.
  }

  public disconnect(): void {
    // code.
  }

  public isConnected(name: string): boolean {
    return false;
  }
}
