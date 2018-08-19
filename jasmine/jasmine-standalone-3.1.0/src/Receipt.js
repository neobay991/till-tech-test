'use strict';

function Receipt(){
    this._receiptOutput;
}

Receipt.prototype.getReceipt = function(menuHeader, customerOrder,
  customerOrderTax, customerOrderWithTax, menuFooter) {
  this._receiptOutput = menuHeader + "\n\n" + customerOrder + "\n" + "Tax " +
  customerOrderTax + "\n" + "Total: " +  customerOrderWithTax +
  "\n" + menuFooter;

  return this._receiptOutput;
}
