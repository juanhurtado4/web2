class ShoppingCart {

    constructor() {
        this.products = {};
    }

    addItem(item) {
        this.products[item.id] = item;
    }

    removeItem(item) {
        delete this.products[item.id]
    }

    getAllItems() {
        return Object.values(this.products)
    }

    increaseQuantity(item) {
        item.quantity += 1
        item.updatePrice();
    }

    decreaseQuantity(item) {
        if (item.quantity - 1 < 1) {
            this.removeItem(item);
        } else {
            item.quantity += 1;
            item.updatePrice();
        }
    }

    getTotal(value) {
        let allItems = this.getAllItems()

        let total = 0
        for (let item of allItems) {
            total += item[value]
        }
        return total
    }

    getTotalQuantity() {
        return this.getTotal('quantity');
    }

    getTotalPrice() {
        return this.getTotal('price');
    }
};

class Product {
    constructor(name, price, id) {
        this.name = name;
        this.quantity = 1;
        this.price = price;
        this.id = id;
    }

    updatePrice() {
        this.price *= this.quantity;
    }
};

module.exports = { ShoppingCart, Product }

let test = true;
if (test) {
    // TODO: Implement test for decrease quantity

    let util = require('util');


    let shirt = new Product('shirt', 10, 1)
    let pants = new Product('pants', 20, 2)
    let hat = new Product('hat', 5, 3)
    let shoes = new Product('shoes', 100, 4)

    let cart = new ShoppingCart();

    cart.addItem(shirt);
    let allItemsTest = cart.getAllItems()
    let totalQuant = cart.getTotalQuantity()
    let totalPrice = cart.getTotalPrice()

    console.log('all items (shirt): ' + util.inspect(allItemsTest, false, null));
    console.log('total quant (1): ' + totalQuant)
    console.log('total price (10): ' + totalPrice)

    cart.addItem(pants);
    let allItemsTest2 = cart.getAllItems()
    let totalQuant2 = cart.getTotalQuantity()
    let totalPrice2 = cart.getTotalPrice()

    console.log('--------------------------------')
    console.log('second item')
    console.log('all items (shirt, pants): ' + util.inspect(allItemsTest2, false, null));
    console.log('total quant (2): ' + totalQuant2)
    console.log('total price (30): ' + totalPrice2)


    cart.increaseQuantity(shirt)
    console.log('--------------------------------')
    console.log('Increase quant')

    console.log('all items (shirt, pants): ' + util.inspect(cart.getAllItems(), false, null));
    console.log('total quant (3): ' + cart.getTotalQuantity())
    console.log('total price (40): ' + cart.getTotalPrice())
    cart.removeItem(shirt);
    console.log('all items (pants): ' + util.inspect(cart.getAllItems(), false, null));
    console.log('total price (20): ' + cart.getTotalPrice())

}