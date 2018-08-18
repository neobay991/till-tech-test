'use strict';
(function(exports){

  var menu = new Menu;

function Order() {}

Order.prototype.viewMenu = function() {
  return menu.getMenu();

}

  exports.Order = Order;
})(this);
