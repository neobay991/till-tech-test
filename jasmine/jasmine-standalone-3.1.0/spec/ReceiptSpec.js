'use strict';

describe("Unit Test: ", function () {
  var menu;
  var order;
  var calculateOrder;
  var receipt;

  beforeEach(function(){
    menu = new Menu();
    calculateOrder = new CalculateOrder();
    receipt = new Receipt();
    order = new Order(menu, receipt, calculateOrder);
  });

  describe('Receipt', function(){

    describe('#printReceipt', function(){
      it('Prints out a receipt', function() {
        var menuHeader = 'The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708'
        var customerOrder = '"Jane": 1 x "Cafe Latte": 4.75\n"John": 2 x "Chocolate Chip Muffin": 4.05\n'
        var customerOrderTax = 1.11
        var customerOrderWithTax = 13.96
        var menuFooter = 'Thank you!'
        expect(receipt.getReceipt(menuHeader, customerOrder, customerOrderTax, customerOrderWithTax, menuFooter)).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n\n"Jane": 1 x "Cafe Latte": 4.75\n"John": 2 x "Chocolate Chip Muffin": 4.05\n\nTax 1.11\nTotal: 13.96\nThank you!');
      });
    });

  });

});
