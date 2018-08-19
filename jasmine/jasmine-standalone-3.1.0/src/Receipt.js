'use strict';

function Receipt(){
  this._receiptOutput;
}

Receipt.prototype.getReceipt = function(menuHeader, customerTableNumber, customerTableCustomers, customerTableCustomersNames, customerOrder, customerOrderTax, customerOrderWithTax, customerPayment, customerPaymentChange, menuFooter) {
  this._receiptOutput = menuHeader + "\n\n" + "Table: " + customerTableNumber + " / [" + customerTableCustomers + "]\n" + customerTableCustomersNames + "\n" + customerOrder + "\n" + "Tax " + "$" +
  customerOrderTax + "\n" + "Total: " + "$" +  customerOrderWithTax +
  "\n" + "Cash: " + customerPayment + "\nChange: " + "$" + customerPaymentChange + "\n" + menuFooter;

  return this._receiptOutput;
}
