'use strict';
(function(exports){

var priceList;
var shopDetails;

function Menu() {}

Menu.prototype.getMenu = function() {
  this.output1 = [];
  $.get('src/hipstercoffee.json',function(data){
    priceList = data[0].prices[0];
    shopDetails = (data[0].shopName + '\n \n' + data[0].address + '\n' + "Phone: " + "+" + data[0].phone[0] + " " + "(" + data[0].phone[1] + data[0].phone[2] + data[0].phone[3] + ") " + data[0].phone[4] + data[0].phone[5] + data[0].phone[6] + "-" + data[0].phone[7] + data[0].phone[8] + data[0].phone[9] + data[0].phone[10])
      console.log(shopDetails + "\n \n" + JSON.stringify(priceList));
        // console.log(shopDetails);
  });
    return shopDetails + '\n \n' + JSON.stringify(priceList);
};


// Menu.prototype.storeMenu = function() {
//   this.jsonFile = this.temp1.responseText;
//
// }

// Menu.prototype.getPeople = function() {
//   console.log(8);
//   $.get("https://async-workshops-api.herokuapp.com/people", function(response) {
//     this._jsonFile
//     response.forEach(function(person) {
//       console.log(person.name)
//     });
//     console.log(11);
//   });
//   console.log(9);
// }
Menu.prototype.getMenu();
exports.Menu = Menu;
})(this);
