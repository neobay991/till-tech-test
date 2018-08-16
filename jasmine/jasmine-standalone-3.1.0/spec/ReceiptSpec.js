'use-strict';

describe("Unit Test: ", function () {
  var receipt;

  beforeEach(function(){
    receipt = new Receipt();
  });

  describe('Receipt', function(){
    it('#initialize: When the Receipt object is initialized', function() {
      expect(receipt._order).toEqual(" ");
    });

    it('#calculateReceipt: Calculates the price of an order', function() {
      receipt._order = ['{Cafe Latte: 4.75}, {Flat White: 4.75}'];
      expect(receipt.calculate()).toEqual(9.50);
    });
  });
});
