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

  });

});
