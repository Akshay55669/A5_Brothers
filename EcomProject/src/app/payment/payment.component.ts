import { Component, OnInit } from '@angular/core';

import{ render } from 'creditcardpayments/creditCardPayments';   // added npm i creditcardPayments

import '../../assets/js/project.js'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(){}



    hero = {name:'sourabh', cardnumber: '1234-1234-1234-1234'};

    ngOnInit(): void {
       render(
      {
      id:"#myPaypalButtons",
      currency:"IND",
      value:"10.00",
      onApprove: (details) =>{
       alert("Transaction Successfull");

     }
    }
     );
    }

  }







