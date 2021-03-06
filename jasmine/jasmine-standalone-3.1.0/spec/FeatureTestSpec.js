'use strict';

describe("Feature Test: ", function () {
  var menu;
  var order;
  var calculateOrder;
  var receipt;
  var payment;

  beforeEach(function(){
    menu = new Menu();
    calculateOrder = new CalculateOrder();
    receipt = new Receipt();
    payment = new Payment();
    order = new Order(menu, calculateOrder, receipt, payment);
  });

  describe('View menu', function(){
    it('A User can view a menu to order from', function() {
      expect(order.viewMenu()).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}');
    });
  });

  describe('View order', function(){
    it('A User can add friends, quatity and view their order', function() {
      order.addTable(1, 2, "Jane, John");
      order.addItem(1, 'Cafe Latte: 4.75');
      order.addItem(2, 'Chocolate Chip Muffin: 4.05');
      expect(order.viewOrder()).toEqual('Table: 1 / [2]\nJane, John\n1 x Cafe Latte: 4.75\n,2 x Chocolate Chip Muffin: 4.05\n\nTax: $1.11\nTotal: $13.96');
    });
  });

  describe('Take payment', function(){
    it('A User can pay for their order', function() {
      order.addTable(1, 2, "Jane, John");
      order.addItem(1, 'Cafe Latte: 4.75');
      order.addItem(2, 'Chocolate Chip Muffin: 4.05');
      order.viewOrder();
      expect(order.submitOrder(13.96, 15.00)).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n\nTable: 1 / [2]\nJane, John\n1 x Cafe Latte: 4.75\n2 x Chocolate Chip Muffin: 4.05\n\nTax $1.11\nTotal: $13.96\nCash: 15\nChange: $1.04\nThank you!');
    });
  });

  describe('Submit order', function(){
    it('A User can view a receipt of their order', function() {
      order.addTable(1, 2, "Jane, John");
      order.addItem(1, 'Cafe Latte: 4.75');
      order.addItem(2, 'Chocolate Chip Muffin: 4.05');
      expect(order.submitOrder(13.96, 15.00)).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n\nTable: 1 / [2]\nJane, John\n1 x Cafe Latte: 4.75\n2 x Chocolate Chip Muffin: 4.05\n\nTax $1.11\nTotal: $13.96\nCash: 15\nChange: $1.04\nThank you!');
    });

    it('A User cannot submit an order if there is no item in the order basket', function() {
      expect(order.submitOrder()).toEqual('Error: Please review your order. You have either not added any items to your order or your payment was not successful');
    });

    it('A User cannot submit an order if the payment is less than the order total', function() {
      order.addTable(1, 2, "Jane, John");
      order.addItem(1, 'Cafe Latte: 4.75');
      order.addItem(2, 'Chocolate Chip Muffin: 4.05');
      expect(order.submitOrder(13.96, 5)).toEqual('Error: Please review your order. You have either not added any items to your order or your payment was not successful');
    });
  });

});
