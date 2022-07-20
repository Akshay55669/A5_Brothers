import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  hero = {name:'sourabh', cardnumber: '1234-1234-1234-1234'};
  ngOnInit(): void {
  }

}
