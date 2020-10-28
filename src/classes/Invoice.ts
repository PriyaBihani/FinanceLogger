import { HasFormatter } from '../Interfaces/HasFormatter'

// classes
export class Invoice implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
      readonly client: string,
      private details: string,
      public  amount: number
    ){}

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}