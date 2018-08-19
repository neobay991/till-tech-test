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
      xit('Prints out a receipt', function() {
        order._customerOrder = ['{Cafe Latte:4.75}, {Flat White:4.75}'];
        expect(receipt.getReceipt()).toEqual();
      });
    });

  });

});
