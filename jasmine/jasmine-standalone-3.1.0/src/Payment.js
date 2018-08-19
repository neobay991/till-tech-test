'use strict';

function Payment(){
  this._customerPayment = 0;
  this._customerPaymentProcessed = false;
  this._customerPaymentChange = 0.00;
  this._billDifference = 0.00;
}

Payment.prototype.processPayment = function(bill, payment) {
  var payment_confirmation = "Thank you for ypur payment!"
  var payment_error = "Error: The order total is more than your payment please check your payment amount"

    if (payment > bill) {
      this._customerPayment = payment;
      this._customerPaymentChange = (payment - bill);
      this._customerPaymentChange = Number(parseFloat(this._customerPaymentChange).toFixed(2));
      this._customerPaymentProcessed = true;

    } else if (payment < bill) {
        this._customerPaymentProcessed = false;
    } else {
        this._customerPayment = payment;
        this._customerPaymentProcessed = true;
    };

    if (this._customerPaymentProcessed === true) {
      return "Bill: " + bill + " " + " Payment amount: " + this._customerPayment + " Change: " + this._customerPaymentChange + " " + payment_confirmation;
    } else {
      return payment_error;
    }
}
