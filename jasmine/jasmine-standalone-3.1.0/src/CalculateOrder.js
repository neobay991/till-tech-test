'use strict';

function CalculateOrder() {
  this._orderTotal = 0.00;
  this._orderTax = 0.00;
  this.orderTotalWithTax = 0.00;
}

CalculateOrder.prototype.calculate = function(customerOrder) {
  this._orderTotal += customerOrder;
  this.calculateTax(this._orderTotal);
  return this._orderTotal;
}

CalculateOrder.prototype.calculateTax = function(orderTotal) {
  // Use Number to convert the string into a Number after calling toFixed();
  this._orderTax = Number(parseFloat(orderTotal * 0.0864).toFixed(2));
  return this._orderTax;
}

CalculateOrder.prototype.calculateOrderWithTax = function() {
  this.orderTotalWithTax = Number(parseFloat(this._orderTotal + this._orderTax).toFixed(2));
  return this.orderTotalWithTax;
}

CalculateOrder.prototype.returnTaxAmount = function() {
  return this._orderTax;
}
