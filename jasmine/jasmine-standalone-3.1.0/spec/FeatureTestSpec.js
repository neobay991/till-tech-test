'use strict';

describe("Feature Test: ", function () {
  var menu;
  var order;
  var calculateOrder;
  var receipt;

  beforeEach(function(){
    menu = new Menu();
    calculateOrder = new CalculateOrder();
    // receipt = new Receipt();
    order = new Order(menu, calculateOrder);
  });

  describe('View menu', function(){
    it('A User can view a menu to order food from', function() {
      expect(order.viewMenu()).toEqual('The Coffee Connection\n \n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}');
    });
  });

  describe('View order', function(){
    xit('A User can add users, quatity and view their order', function() {
      order.addItem('"Jane"', 1, '"Cafe Latte": 4.75');
      order.addItem('"John"', 2, '"Chocolate Chip Muffin": 4.05');
      expect(order.viewOrder()).toEqual('"Jane": 1 x "Cafe Latte": 4.75,"John": 2 x "Chocolate Chip Muffin": 4.05\nTax: 1.11\nBalance: 13.96');
    });
  });

  describe('View receipt', function(){
    xit('A User can add view a receipt of their order', function() {
      order.addItem(1, '"Cafe Latte": 4.75');
      order.addItem(2, '"Chocolate Chip Muffin": 4.05');
      expect(order.viewReceipt()).toEqual('The Coffee Connection\n \n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}');
    });
  });

});
