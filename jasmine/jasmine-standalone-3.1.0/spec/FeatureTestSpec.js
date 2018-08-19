'use strict';

describe("Feature Test: ", function () {
  var menu;
  var order;
  var calculateOrder;
  var receipt;

  beforeEach(function(){
    // menu = jasmine.createSpyObj('Menu', ['getMenu', 'getMenuHeader', 'getMenuFooter']);
    // calculateOrder = jasmine.createSpyObj('CalculateOrder', ['calculate', 'calculateOrderWithTax', 'returnTaxAmount']);
    // receipt = jasmine.createSpyObj('Receipt', ['getReceipt']);
    menu = new Menu();
    calculateOrder = new CalculateOrder();
    receipt = new Receipt();
    order = new Order(menu, calculateOrder, receipt);
  });

  describe('View menu', function(){
    it('A User can view a menu to order food from', function() {
      expect(order.viewMenu()).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}');
    });
  });

  describe('View order', function(){
    it('A User can add users, quatity and view their order', function() {
      order.addTable(1, 2, "Jane, John");
      order.addItem(1, '"Cafe Latte": 4.75');
      order.addItem(2, '"Chocolate Chip Muffin": 4.05');
      expect(order.viewOrder()).toEqual('Table: 1 / [2]\nJane, John\n1 x "Cafe Latte": 4.75\n,2 x "Chocolate Chip Muffin": 4.05\n\nTax: 1.11\nBalance: 13.96');
    });
  });

  describe('View receipt', function(){
    it('A User can view a receipt of their order', function() {
      order.addTable(1, 2, "Jane, John");
      order.addItem(1, '"Cafe Latte": 4.75');
      order.addItem(2, '"Chocolate Chip Muffin": 4.05');
      var menuHeader = 'The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708'
      var customerTableNumber = 'Table: 1 / '
      var customerTableCustomers = '[2]';
      var customerTableCustomersNames = 'Jane, John'
      var customerOrder = '1 x "Cafe Latte": 4.75\n2 x "Chocolate Chip Muffin": 4.05\n'
      var customerOrderTax = 1.11;
      var customerOrderWithTax = 13.96;
      var menuFooter = 'Thank you!'
      var receiptOutput = menuHeader + "\n\n" + customerTableNumber + customerTableCustomers + "\n" + customerTableCustomersNames + "\n" + customerOrder + "\n" + "Tax " + customerOrderTax + "\n" + "Total: " +  customerOrderWithTax + "\n" + menuFooter;
      receipt.getReceipt(receiptOutput);
      expect(order.submitOrder()).toEqual('The Coffee Connection\n\n123 Lakeside Way\nPhone: +1 (650) 360-0708\n\nTable: 1 / [2]\nJane, John\n1 x "Cafe Latte": 4.75\n2 x "Chocolate Chip Muffin": 4.05\n\nTax 1.11\nTotal: 13.96\nThank you!');
    });
  });

});
