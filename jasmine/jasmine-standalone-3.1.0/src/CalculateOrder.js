'use strict';

(function(exports){
  var orderTotal = 0.00;
  var orderTax = 0.00;
  var orderTotalWithTax = 0.00;

  function CalculateOrder() {

  }

  CalculateOrder.prototype.calculate = function(customerOrder) {
    orderTotal += customerOrder;
    this.calculateTax(orderTotal);
    return orderTotal;
  }

  CalculateOrder.prototype.calculateTax = function(orderTotal) {
    // Use Number to convert the string into a Number after calling toFixed();
    orderTax = Number(parseFloat(orderTotal * 0.0864).toFixed(2));
    return orderTax;
  }

  CalculateOrder.prototype.calculateOrderWithTax = function() {
    orderTotalWithTax += Number(parseFloat(orderTotal + orderTax).toFixed(2));
    return orderTotalWithTax;
  }

  exports.CalculateOrder = CalculateOrder;
})(this);
