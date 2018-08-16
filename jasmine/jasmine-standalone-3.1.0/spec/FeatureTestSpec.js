'use-strict';

describe("Feature Test: ", function () {
  var receipt;

  beforeEach(function(){
    receipt = new Receipt();
  });

  describe('Receipt', function(){
    it('#initialize: When the Receipt object is initialized', function() {
      expect(receipt._order).toEqual(" ");
    });

    it('#calculateReceipt: Calculates the price of an order', function() {
      expect(receipt.calculate("Cafe Latte: 4.75, Flat White: 4.75")).toEqual(9.50);
    });
  });
});
