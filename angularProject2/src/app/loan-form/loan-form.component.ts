import { Component, OnInit } from '@angular/core';
import { Loan } from '../model/loan';
import { LoanService } from '../service/loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {

  loan:Loan;
  constructor(private loansrv:LoanService) { 
    this.loan = {amount:0,period:0,simpleInterest:0,rateOfInterest:0,amountPayable:0};
  }

  ngOnInit(): void {
  }
  compute(){
    this.loan.simpleInterest=this.loansrv.getSimpleInterest(this.loan);
    this.loan.amountPayable=this.loansrv.getAmountPayable(this.loan)
  }
}
