'use strict';

(function(exports){

  var receipt2;

  function Receipt(){}

  Receipt.prototype.getReceipt = function(menuHeader, customerOrder, customerOrderTax, customerOrderWithTax, menuFooter) {

    receipt2 = customerOrder + "\n" + "Tax " + customerOrderTax + "\n" + "Total: " +  customerOrderWithTax + "\n" + menuFooter;

    return receipt2;
  }
      //
      // expect(order.viewReceipt()).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n"Jane": 1 x "Cafe Latte": 4.75\n"John": 2 x "Chocolate Chip Muffin": 4.05\n\nTax 1.11\nTotal: 13.96\nTThank you!');
  exports.Receipt = Receipt;
})(this);
