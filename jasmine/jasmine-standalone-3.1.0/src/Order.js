'use strict';

  function Order(menu, calculateOrder, receipt, payment) {
    this._calculateOrder = calculateOrder;
    this._menu = menu;
    this._receipt = receipt;
    this._payment = payment;

    this._customerOrder = [];
    this._customerTable = {
      number: 0,
      customers: 0,
      customers_names: "",
    };
  }

  Order.prototype.viewMenu = function() {
    return this._menu.getMenu();
  }

  Order.prototype.addTable = function(table_no, total_customers, customer_names) {
    this._customerTable.number = table_no;
    this._customerTable.customers = total_customers;
    this._customerTable.customers_names = customer_names;
  }

  Order.prototype.addItem = function(quantity, item, radix) {
    this._customerOrder.push(quantity + " x " + item + "\n");

    var x = parseInt(quantity, radix);
    for (var i = 0; i < x; ++i) {
      this.addOrderBalance(item)
    }
    return this._customerOrder;
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
    return "Table: " + this._customerTable.number + " / [" +
    this._customerTable.customers + "]\n" +
    this._customerTable.customers_names + "\n" + this._customerOrder +
    "\nTax: " + "$" + this._calculateOrder.returnTaxAmount() + "\nTotal: " +
    "$" + this._calculateOrder.calculateOrderWithTax();
  }

  Order.prototype.submitOrder = function(bill, payment) {
    this.makePayment(bill, payment);
    var customerOrderOutput = ""
    if (this._customerOrder.length != 0 || this.makePayment(bill, payment) != false) {
      for (var i = 0; i < this._customerOrder.length; i++) {
         customerOrderOutput += this._customerOrder[i];
      }
    return this.viewReceipt(customerOrderOutput);
    } else {
      return 'Error: Please review your order. You have either not added any' +
      ' items to your order or your payment was not successful'
    }
  }

  Order.prototype.makePayment = function(bill, payment) {
    return this._payment.processPayment(bill, payment);
  }

  Order.prototype.paymentSuccessfull = function() {
    return this._payment.returnPaymentStatus();
  }

  Order.prototype.viewReceipt = function(customerOrderOutput) {
    if (this.paymentSuccessfull() === true) {
      return this._receipt.getReceipt(this._menu.getMenuHeader(),
      this._customerTable.number, this._customerTable.customers,
      this._customerTable.customers_names, customerOrderOutput,
      this._calculateOrder.returnTaxAmount(),
      this._calculateOrder.calculateOrderWithTax(),
      this._payment.returnPayment(), this._payment.returnChange(),
      this._menu.getMenuFooter());
    } else {
      return 'Error: Please review your order. You have either not added any' +
      ' items to your order or your payment was not successful'
    }
  }
