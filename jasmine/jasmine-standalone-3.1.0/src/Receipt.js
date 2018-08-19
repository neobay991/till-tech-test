'use strict';

(function(exports){

  var receiptOutput;

  function Receipt(){}

  Receipt.prototype.getReceipt = function(menuHeader, customerOrder, customerOrderTax, customerOrderWithTax, menuFooter) {

    receiptOutput = menuHeader + "\n\n" + customerOrder + "\n" + "Tax " + customerOrderTax + "\n" + "Total: " +  customerOrderWithTax + "\n" + menuFooter;

    return receiptOutput;
  }

  exports.Receipt = Receipt;
})(this);
