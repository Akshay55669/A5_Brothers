import { Component, OnInit } from '@angular/core';

import{ render } from 'creditcardpayments/creditCardPayments';   // added npm i creditcardPayments

import '../../assets/js/project.js';// import js


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(){}
  handler:any = null; //pay2


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

     this.loadStripe(); //pay2
    }


    // payment 2 started
    pay(amount: any) {

      var handler = (<any>window).StripeCheckout.configure({
        //https://dashboard.stripe.com/test/dashboard  copy key from register this website
        key: 'pk_test_51LNdCXSHB2Ziscd1UI5W77QulGP6OBfksQajnt8aSO7oYzCYyR9IvSDO623V32wHkKmZzttIdGf9JZUQnNxmEPWn00D97VmXoW',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Token Created!!');
        }
      });

      handler.open({
        name: 'Demo Site',
        description: '2 widgets',
        amount: amount * 100
      });

    }

    //https://www.youtube.com/watch?v=eCGb3U3ua6Y watch this video for implementation

    loadStripe() {

      if(!window.document.getElementById('stripe-script')) {
        var s = window.document.createElement("script");
        s.id = "stripe-script";
        s.type = "text/javascript";
        s.src = "https://checkout.stripe.com/checkout.js";
        s.onload = () => {
          this.handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51LNdCXSHB2Ziscd1UI5W77QulGP6OBfksQajnt8aSO7oYzCYyR9IvSDO623V32wHkKmZzttIdGf9JZUQnNxmEPWn00D97VmXoW',
            locale: 'auto',
            token: function (token: any) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              console.log(token)
              alert('Payment Success!!');
            }
          });
        }

        window.document.body.appendChild(s);
      }
    }

  }







