# till-tech-test
==================

What is working:
-------
All of the following features listed below have been implemented.

Features implemented
-------
```
Version 1:

As a User,
I would like to be able to view a menu
So I can order some drinks and food

As a User,
I would like to be able to view my order
So I can see how much I need to pay

As a User,
I would like to be able to pay my bill
So I can come back again next time :-)

As a Product Owner
I would like the order total to include tax
So I can comply with the law

As a Product Owner
I would like the receipt to look like the sample specification
So I can sell tills to the local (and other) hipster coffee shops


Version 2
As a User
I would like the receipt to show my payment amount
So I have proof I have paid my bill

As a User
I would like the receipt to show any change due to me
So I know how much change I am going to get back

```

Features not implemented
-------
```

* Version 2 - Add functionality to handle discounts - in this example, a 5% discount on orders over $50, and a 10% muffin discount.
* Version 3 - Implement a user interface that can actually be used as a till

```

Tech stack
-------
* Full JavaScript vanilla app
* Jasmine framework used for running unit and feature tests


Instructions to Start
-------
* Clone the repo
* Open Terminal and type `run http-server`
* navigation to `[local:host]:///jasmine/jasmine-standalone-3.1.0/SpecRunner.html` e.g. `http://localhost:8081/jasmine/jasmine-standalone-3.1.0/SpecRunner.html`
* You can now run the tests and also use the same window's browser's console to interact with the app

**To install http-server:** In Terminal, type `npm install http-server -g)`, this will install http-server globally.

Browser console commands:
* `order = new Order(menu = new Menu, calculateOrder = new CalculateOrder, receipt = new Receipt, payment = new Payment);`
to create a new Order object that also initializes several other objects
* `order.addTable(table_no, total_customers, customer_names);` - get a table e.g. `order.addTable(1, 2, 'Jane, John');`
* `order.addItem(quantity, item);` - add an item to your order e.g. `order.addItem(1, 'Cafe Latte: 4.75');`
`order.addItem(2, 'Chocolate Chip Muffin: 4.05');`
* `order.viewOrder();`
* `order.submitOrder(bill, payment);` - submit your order with payment e.g. `order.submitOrder(13.96, 15.00);`

View receipt e.g. output: <br /><br />

```
The Coffee Connection

123 Lakeside Way
Phone: +1 (650) 360-0708

Table: 1 / [2]
Jane, John
1 x Cafe Latte: 4.75
2 x Chocolate Chip Muffin: 4.05

Tax $1.11
Total: $13.96
Cash: 15
Change: $1.04
Thank you!
```
