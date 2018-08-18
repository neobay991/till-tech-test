'use strict';

describe("Unit Test: ", function () {
  var menu;

  beforeEach(function(){
    menu = new Menu();
  });

  describe('Menu', function(){
    describe('#getMenu', function(){
      it('Prints out a menu', function() {
        expect(menu.getMenu()).toBe('The Coffee Connection\n \n123 Lakeside Way\nPhone: +1 (650) 360-0708\n \n{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}');
      });
    });    
  });

});
