'use strict';

describe("Unit Test: ", function () {
  var payment;

  beforeEach(function(){
    payment = new Payment();
  });

  describe('Payment', function(){
    describe('#processPayment', function(){
      it('Processes a payment and returns true if the payment amount is more than the order total', function() {
        expect(payment.processPayment(10, 15)).toEqual(true);
      });

      it('Processes a payment and returns true if the payment amount is equal to the order total', function() {
        expect(payment.processPayment(10, 10)).toEqual(true);
      });

      it('Processes a payment and returns false if the payment amount is less than the order total', function() {
        expect(payment.processPayment(10, 5)).toEqual(false);
      });
    });

    describe('#change', function(){
      it('returns the change from a payment', function() {
        expect(payment.change(15, 10)).toEqual(5);
      });

      it('returns no change if the payment is equal to the order total', function() {
        expect(payment.change(15, 15)).toEqual(0);
      });
    });
  });

});
