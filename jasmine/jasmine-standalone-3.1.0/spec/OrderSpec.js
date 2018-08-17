'use strict';

describe("Unit Test: ", function () {
  var menu;
  var order;
  var calculateOrder;

  beforeEach(function(){
    menu = new Menu();
    calculateOrder = new CalculateOrder();
    order = new Order(menu, receipt, calculateOrder);
  });
  describe('Order', function(){
    describe('#addItem', function(){
      it('Adds an item to an Order', function() {
        order.addItem('"Cafe Latte": 4.75');
        expect(order._customerOrder).toEqual('"Cafe Latte": 4.75');
      });
    });

    describe('#calculateReceipt', function(){
      it('Prints out an ORder', function() {
        order.addItem('"Cafe Latte": 4.75');
        expect(order.viewOrder()).toEqual('"Cafe Latte": 4.75', );
      });
    });
  });

});
