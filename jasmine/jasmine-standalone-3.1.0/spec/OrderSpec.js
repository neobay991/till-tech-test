'use strict';

describe("Unit Test: ", function () {
  var menu;
  var calculateOrder;
  var receipt;
  var order;
  var payment;

  beforeEach(function(){
    menu = jasmine.createSpyObj('Menu', ['getMenu', 'getMenuHeader', 'getMenuFooter']);
    calculateOrder = jasmine.createSpyObj('CalculateOrder', ['calculate', 'calculateOrderWithTax', 'returnTaxAmount']);
    receipt = jasmine.createSpyObj('Receipt', ['getReceipt']);
    payment = jasmine.createSpyObj('Payment', ['savePayment', 'change', 'processPayment']);
    order = new Order(menu, calculateOrder, receipt, payment);
  });
  describe('Order', function(){
    describe('#viewMenu', function(){
      it('Prints out a Menu', function() {
        menu.getMenu.and.returnValue('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}');
        expect(order.viewMenu()).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}');
      });
    });

    describe('#addOrderBalance', function(){
      it('Returns a balance for an order', function() {
        calculateOrder.calculate.and.returnValue(9.3);
        calculateOrder.calculateOrderWithTax.and.returnValue(10.1);
        order.addOrderBalance('"Cafe Latte": 4.75')
        expect(order.addOrderBalance('"Cortado": 4.55')).toEqual(10.1);
      });
    });

    describe('#viewOrder', function(){
      it('Prints out an order with 8.64 tax', function() {
        calculateOrder.returnTaxAmount.and.returnValue(0.41);
        calculateOrder.calculateOrderWithTax.and.returnValue(5.16);
        order.addTable(1, 1, "Jane");
        order.addItem(1, '"Cafe Latte": 4.75');
        expect(order.viewOrder()).toEqual('Table: 1 / [1]\nJane\n1 x "Cafe Latte": 4.75\n\nTax: $0.41\nTotal: $5.16');
      });
    });

    describe('#makePayment', function(){
      it('Processes a payment and returns true if the payment amount is more than the balance', function() {
        payment.processPayment.and.returnValue(true);
        expect(order.makePayment(10, 15)).toEqual(true);
      });

      it('Processes a payment and returns true if the payment amount is equal to the balance', function() {
        payment.processPayment.and.returnValue(true);
        expect(order.makePayment(10, 10)).toEqual(true);
      });

      it('Processes a payment and returns false if the payment amount is less than the balance', function() {
        payment.processPayment.and.returnValue(false);
        expect(order.makePayment(10, 5)).toEqual(false);
      });
    });

    describe('#submitOrder', function(){
      it('Submits order and prints out a receipt', function() {
        order._customerOrder = ['1 x "Cafe Latte": 4.75\n2 x "Chocolate Chip Muffin": 4.05\n']
        var menuHeader = 'The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708'
        var customerTableNumber = '1'
        var customerTableCustomers = '2';
        var customerTableCustomersNames = 'Jane, John'
        var customerOrder = '1 x "Cafe Latte": 4.75\n2 x "Chocolate Chip Muffin": 4.05\n'
        var customerOrderTax = 1.11;
        var customerOrderWithTax = 13.96;
        var customerPayment = 15.00;
        var customerPaymentChange = 1.04;
        var menuFooter = 'Thank you!'
        var receiptOutput = menuHeader + "\n\n" + "Table: " + customerTableNumber + " / [" + customerTableCustomers + "]\n" + customerTableCustomersNames + "\n" + customerOrder + "\n" + "Tax " + "$" +
        customerOrderTax + "\n" + "Total: " + "$" +  customerOrderWithTax +
        "\n" + "Cash: " + customerPayment + "\nChange: " + "$" + customerPaymentChange + "\n" + menuFooter;
        receipt.getReceipt.and.returnValue(receiptOutput);
        expect(order.submitOrder()).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n\nTable: 1 / [2]\nJane, John\n1 x "Cafe Latte": 4.75\n2 x "Chocolate Chip Muffin": 4.05\n\nTax $1.11\nTotal: $13.96\nCash: 15\nChange: $1.04\nThank you!');
      });

      it('Throws an error if there is no item in the order basket', function() {
        order._customerOrder = [];
        expect(order.submitOrder()).toEqual("Error: Please add something to your order");
      });

    });
  });
});
