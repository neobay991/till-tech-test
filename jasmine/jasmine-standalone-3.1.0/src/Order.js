'use strict';
(function(exports){

  var menu = new Menu;
  var customerOrder = [];

function Order() {}

Order.prototype.viewMenu = function() {
  return menu.getMenu();
}

Order.prototype.addItem = function(item) {
  customerOrder.push(item);
}

Order.prototype.viewOrder = function() {
  return customerOrder;
}


  exports.Order = Order;
})(this);
