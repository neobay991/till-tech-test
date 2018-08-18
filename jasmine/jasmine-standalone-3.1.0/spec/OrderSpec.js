'use strict';

describe("Unit Test: ", function () {
  var menu;
  var order;
  var calculateOrder;

  beforeEach(function(){
    menu = new Menu();
    calculateOrder = new CalculateOrder();
    order = new Order(menu);
  });
  describe('Order', function(){

    describe('#viewOrder', function(){
      it('Prints out an Order', function() {
        order.addItem('"Cafe Latte": 4.75');
        expect(order.viewOrder()).toEqual('"Cafe Latte": 4.75\nBalance: 4.75');
      });
    });
  });

});
