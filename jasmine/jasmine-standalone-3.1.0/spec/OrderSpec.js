'use strict';

describe("Unit Test: ", function () {
  var menu;
  var order;
  var calculateOrder;

  beforeEach(function(){
    menu = jasmine.createSpyObj('Menu', ['getMenu']);
    calculateOrder = jasmine.createSpyObj('CalculateOrder', ['calculate', 'calculateOrderWithTax', 'returnTaxAmount']);
    // calculateOrder = new CalculateOrder();
    order = new Order(menu, calculateOrder);
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
      it('Prints out an Order with 8.64 tax', function() {
        calculateOrder.returnTaxAmount.and.returnValue(0.41);
        calculateOrder.calculateOrderWithTax.and.returnValue(5.16);
        order.addItem("Jane", 1, '"Cafe Latte": 4.75');
        expect(order.viewOrder()).toEqual('Jane: 1 x "Cafe Latte": 4.75\n\nTax: 0.41\nBalance: 5.16');
      });
    });
  });
});
