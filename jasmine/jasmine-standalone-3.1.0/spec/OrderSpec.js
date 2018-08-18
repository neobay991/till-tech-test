'use strict';

describe("Unit Test: ", function () {
  var menu;
  var order;
  var calculateOrder;

  beforeEach(function(){
    menu = new Menu();
    calculateOrder = new CalculateOrder();
    order = new Order(menu);
  });
  describe('Order', function(){
    describe('#viewMenu', function(){
      it('Prints out a Menu', function() {
        expect(order.viewMenu()).toBe('The Coffee Connection\n \n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}');
      });
    });

    describe('#addOrderBalance', function(){
      xit('Returns a balance for an order', function() {
        order.addOrderBalance('"Cafe Latte":4.75')
        expect(order.addOrderBalance('"Cortado":4.55')).toEqual(9.3);
      });
    });

    describe('#viewOrder', function(){
      xit('Prints out an Order', function() {
        order.addItem('"Cafe Latte": 4.75');
        expect(order.viewOrder()).toEqual('"Cafe Latte":4.75\nBalance:4.75');
      });
    });
  });
});
