import { Injectable } from '@angular/core';
import { Loan } from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  getSimpleInterest(loan:Loan): number{
    return loan.amount*(loan.rateOfInterest/100)*loan.period;
  }

  getAmountPayable(loan:Loan): number{
    return loan.amount+loan.simpleInterest;
  }
}

