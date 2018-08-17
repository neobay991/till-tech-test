'use-strict';

describe("Unit Test: ", function () {
  var menu;
  var calculateOrder;

  beforeEach(function(){
    menu = new Menu();
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
