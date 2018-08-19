'use strict';

  function Order(menu, calculateOrder) {
    this.calculateOrder = calculateOrder;
    this.menu = menu;
    var receipt = new Receipt();

    this.customerOrder = [];
  }

  Order.prototype.viewMenu = function() {
    return this.menu.getMenu();
  }

  Order.prototype.addItem = function(person, quatity, item) {
    this.customerOrder.push(person + ": " + quatity + " x " + item + "\n")

    var x = parseInt(quatity);
    for (var i = 0; i < x; ++i) {
      this.addOrderBalance(item)
    };
    return this.customerOrder;
  }

  Order.prototype.addOrderBalance = function(item) {
    // split the string to get price
    var itemPrice = item.split(":");

    // convert the price string into a float
    var price = parseFloat(itemPrice[itemPrice.length - 1]);

    this.calculateOrder.calculate(price);
    return this.calculateOrder.calculateOrderWithTax();
  }

  Order.prototype.viewOrder = function() {
    return this.customerOrder + "\nTax: " + this.calculateOrder.returnTaxAmount() + "\nBalance: " + this.calculateOrder.calculateOrderWithTax();
  }

  Order.prototype.viewReceipt = function() {
    var customerOrderOutput = "";
    for (var i = 0; i < customerOrder.length; i++) {
       customerOrderOutput += customerOrder[i];
    }

    return receipt.getReceipt(menu.getMenuHeader(), customerOrderOutput, this.calculateOrder.returnTaxAmount(), this.calculateOrder.calculateOrderWithTax(), menu.getMenuFooter());
  }
