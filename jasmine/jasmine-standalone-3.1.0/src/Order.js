'use strict';
(function(exports){
  var calculateOrder = new CalculateOrder();
  var menu = new Menu();

  var customerOrder = [];
  var customerOrderBalance = 0;

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
    var itemPrice = item.split(": ");
    // var itemPrice2 = itemPrice[itemPrice.length - 1]

    // convert the price string into a float
    var price = parseFloat(itemPrice[itemPrice.length - 1]);

    // var price = parseFloat(Math.round(itemPrice2 * 100) / 100).toFixed(2);
    return customerOrderBalance = calculateOrder.calculate(price);
  }

  Order.prototype.viewOrder = function() {
    return customerOrder + "\nBalance: " + customerOrderBalance;
  }

  exports.Order = Order;
})(this);
