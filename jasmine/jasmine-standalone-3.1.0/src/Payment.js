'use strict';

function Payment(){
  this._customerPayment = 0;
  this._customerPaymentProcessed = false;
  this._customerPaymentChange = 0.00;
}

Payment.prototype.processPayment = function(bill, payment) {
    if (payment >= bill) {
      this.savePayment(payment);
      this.change(payment, bill);
      this._customerPaymentProcessed = true;
    } else {
        this._customerPaymentProcessed = false;
    };

    return this._customerPaymentProcessed;
    //
    // if (this._customerPaymentProcessed === true) {
    //   return "Bill: " + bill + " " + " Payment amount: " + this._customerPayment + " Change: " + this._customerPaymentChange + " " + payment_confirmation;
    // } else {
    //   return payment_error;
    // }
}

Payment.prototype.savePayment = function(payment) {
  this._customerPayment = payment;
  return this._customerPayment;
}

Payment.prototype.change = function(payment, bill) {
  // Use Number to convert the string into a Number after calling toFixed();
  this._customerPaymentChange = Number(parseFloat(payment - bill).toFixed(2));
  return this._customerPaymentChange;
}
