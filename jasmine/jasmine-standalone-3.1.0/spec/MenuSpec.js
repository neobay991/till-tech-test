'use strict';

describe("Unit Test: ", function () {
  var menu;

  beforeEach(function(){
    menu = new Menu();
  });

  describe('Menu', function(){
    describe('#initialize', function(){
      it('Stores a JSON file containing shop and menu information', function() {
        expect(menu._jsonFile).toEqual([{
          "shopName": "The Coffee Connection",
          "address": "123 Lakeside Way",
          "phone": "16503600708",
          "prices": [
            {
              "Cafe Latte": 4.75,
              "Flat White": 4.75,
              "Cappucino": 3.85,
              "Single Espresso": 2.05,
              "Double Espresso": 3.75,
              "Americano": 3.75,
              "Cortado": 4.55,
              "Tea": 3.65,
              "Choc Mudcake": 6.40,
              "Choc Mousse": 8.20,
              "Affogato": 14.80,
              "Tiramisu": 11.40,
              "Blueberry Muffin": 4.05,
              "Chocolate Chip Muffin": 4.05,
              "Muffin Of The Day": 4.55
            }
          ]
        }]);
      });
    });

    describe('#printMenu', function(){
      it('Prints out a menu', function() {
        expect(menu.printMenu()).toEqual([{
          "prices": [
            {
              "Cafe Latte": 4.75,
              "Flat White": 4.75,
              "Cappucino": 3.85,
              "Single Espresso": 2.05,
              "Double Espresso": 3.75,
              "Americano": 3.75,
              "Cortado": 4.55,
              "Tea": 3.65,
              "Choc Mudcake": 6.40,
              "Choc Mousse": 8.20,
              "Affogato": 14.80,
              "Tiramisu": 11.40,
              "Blueberry Muffin": 4.05,
              "Chocolate Chip Muffin": 4.05,
              "Muffin Of The Day": 4.55
            }
          ]
        }]);
      });
    });
  });

});
