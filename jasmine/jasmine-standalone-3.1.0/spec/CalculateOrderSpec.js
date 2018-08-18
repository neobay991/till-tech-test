'use strict';

describe("Unit Test: ", function () {
  var calculateOrder;

  beforeEach(function(){
    calculateOrder = new CalculateOrder();
  });

  describe('CalculateOrder', function(){

    describe('#calculate', function(){
      xit('Calculates an Order', function() {
        calculateOrder.calculate(8.60);
        calculateOrder.calculate(5.55);
        expect(calculateOrder.calculate(5.00)).toEqual(19.15);
      });

      xit('Calculates 8.64% tax on an Order', function() {
        expect(calculateOrder.calculateTax(19.15)).toEqual(1.65);
      });

      xit('Calculates an Order with 8.64% tax', function() {
        calculateOrder.calculate(8.60);
        calculateOrder.calculate(5.55);
        calculateOrder.calculate(5.00);
        expect(calculateOrder.calculateOrderWithTax()).toEqual(20.80);
      });
    });

  });

});
