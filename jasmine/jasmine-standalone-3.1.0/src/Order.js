'use strict';
(function(exports){
  var calculateOrder = new CalculateOrder();
  var menu = new Menu();
  var receipt = new Receipt();

  var customerOrder = [];

  function Order() {}

  Order.prototype.viewMenu = function() {
    return menu.getMenu();
  }

  Order.prototype.addItem = function(person, quatity, item) {
    customerOrder.push(person + ": " + quatity + " x " + item + "\n")

    var x = parseInt(quatity);
    for (var i = 0; i < x; ++i) {
      this.addOrderBalance(item)
    };
    return customerOrder;
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

  Order.prototype.viewReceipt = function() {
    var output = "";
    for (var i = 0; i < customerOrder.length; i++) {
       output += customerOrder[i];
    }

    return receipt.getReceipt(menu.getMenuHeader(), output, calculateOrder.returnTaxAmount(), calculateOrder.calculateOrderWithTax(), menu.getMenuFooter());
  }

  exports.Order = Order;
})(this);
