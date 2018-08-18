'use strict';
(function(exports){
  var calculateOrder = new CalculateOrder();
  var menu = new Menu();

  var customerOrder = [];

  function Order() {}

  Order.prototype.viewMenu = function() {
    return menu.getMenu();
  }

  Order.prototype.addItem = function(item) {
    customerOrder.push(item);
    this.addOrderBalance(item)
  }

  Order.prototype.addOrderBalance = function(item) {
    // split the string to get price
    var itemPrice = item.split(":");

    // convert the price string into a float
    var price = parseFloat(itemPrice[itemPrice.length - 1]);

    calculateOrder.calculate(price);
    return calculateOrder.calculateOrderWithTax();
  }

  Order.prototype.viewOrder = function() {
    return customerOrder + "\nTax: " + calculateOrder.returnTaxAmount() + "\nBalance: " + calculateOrder.calculateOrderWithTax();
  }

  exports.Order = Order;
})(this);
