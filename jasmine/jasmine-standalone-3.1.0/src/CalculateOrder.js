'use strict';

(function(exports){
  var orderTotal = 0.00;

  function CalculateOrder() {

  }

  CalculateOrder.prototype.calculate = function(customerOrder) {
    orderTotal += customerOrder;
    return orderTotal;
  }
  exports.CalculateOrder = CalculateOrder;
})(this);
