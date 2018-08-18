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
    });

    describe('#calculate', function(){
      xit('Calculates 8.64% tax on an Order', function() {
        expect(calculateOrder.calculateTax(19.15)).toEqual(1.65);
      });
    });

    describe('#calculate', function(){
      it('Calculates an Order with 8.64% tax', function() {
        calculateOrder.calculate(4.75);
        calculateOrder.calculate(4.75);
        calculateOrder.calculate(4.75);
        calculateOrder.calculate(3.85);
        calculateOrder.calculate(6.40);
        calculateOrder.calculate(6.40);
        calculateOrder.calculate(8.20);
        calculateOrder.calculate(14.80);
        calculateOrder.calculate(11.40);
        expect(calculateOrder.calculateOrderWithTax()).toEqual(70.94);
      });
    });
  });

});
