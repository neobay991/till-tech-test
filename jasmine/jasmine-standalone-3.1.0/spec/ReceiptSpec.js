'use strict';

describe("Unit Test: ", function () {
  var receipt;

  beforeEach(function(){
    receipt = new Receipt();
  });

  describe('Receipt', function(){

    describe('#printReceipt', function(){
      it('Prints out a receipt', function() {
        var menuHeader = 'The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708'
        var customerTableNumber = '1'
        var customerTableCustomers = '2';
        var customerTableCustomersNames = 'Jane, John'
        var customerOrder = '1 x "Cafe Latte": 4.75\n2 x "Chocolate Chip Muffin": 4.05\n'
        var customerOrderTax = 1.11;
        var customerOrderWithTax = 13.96;
        var customerPayment = 15.00;
        var customerPaymentChange = 1.04;
        var menuFooter = 'Thank you!'
        expect(receipt.getReceipt(menuHeader, customerTableNumber, customerTableCustomers, customerTableCustomersNames, customerOrder, customerOrderTax, customerOrderWithTax, customerPayment, customerPaymentChange, menuFooter)).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n\nTable: 1 / [2]\nJane, John\n1 x "Cafe Latte": 4.75\n2 x "Chocolate Chip Muffin": 4.05\n\nTax $1.11\nTotal: $13.96\nCash: 15\nChange: $1.04\nThank you!');
      });
    });

  });

});
