'use strict';

describe("Unit Test: ", function () {
  var calculateOrder;

  beforeEach(function(){
    calculateOrder = new CalculateOrder();
  });

  describe('CalculateOrder', function(){

    describe('#calculate', function(){
      it('Calculates an Order', function() {
        expect(calculateOrder.calculate('"Cafe Latte": 4.75', '"Blueberry Muffin": 4.05')).toEqual(8.80);
      });
    });

  });

});
