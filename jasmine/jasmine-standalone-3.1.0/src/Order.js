'use strict';

  function Order(menu, calculateOrder, receipt) {
    this._calculateOrder = calculateOrder;
    this._menu = menu;
    this._receipt = receipt;

    this.customerOrder = [];
  }

  Order.prototype.viewMenu = function() {
    return this._menu.getMenu();
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

    this._calculateOrder.calculate(price);
    return this._calculateOrder.calculateOrderWithTax();
  }

  Order.prototype.viewOrder = function() {
    return this.customerOrder + "\nTax: " + this._calculateOrder.returnTaxAmount() + "\nBalance: " + this._calculateOrder.calculateOrderWithTax();
  }

  Order.prototype.submitOrder = function() {
    var customerOrderOutput = "";
    for (var i = 0; i < this.customerOrder.length; i++) {
       customerOrderOutput += this.customerOrder[i];
    }

    return this._receipt.getReceipt(this._menu.getMenuHeader(), customerOrderOutput, this._calculateOrder.returnTaxAmount(), this._calculateOrder.calculateOrderWithTax(), this._menu.getMenuFooter());
  }
