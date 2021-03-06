const mocha = require('mocha');
const expect = require('chai').expect;
const { ShoppingCart, Product } = require('./shopping_cart')

let item;
let cart;
let item2;
beforeEach(() => {
    item = new Product('chicken', 10, 1);
    cart = new ShoppingCart();
    item2 = new Product('cheesecake', 3, 27)
})

describe('Testing Product', () => {
    it('should have a name', () => {
        expect(item.name).to.be.a('string');
        expect(item.name).to.equal('chicken');
    })
    it('should have a price', () => {
        expect(item.price).to.be.a('number');
        expect(item.price).to.equal(10);
    })
})

describe('Testing ShoppingCart', () => {
    it('Should return an array containing all items in cart', () => {
        expect(cart.getAllItems()).to.be.a('array');
    })
})

it('Should add a new item to the shopping cart', () => {
    cart.addItem(item);
    const cartItem = cart.getAllItems()[0]
    expect(cartItem.name).to.equal('chicken')
});

it('Should return the number of items in the cart', () => {
    expect(cart.getTotalQuantity()).to.be.a('number');
    expect(cart.getTotalQuantity()).to.equal(0);
    cart.addItem(item);
    expect(cart.getTotalQuantity()).to.equal(1);
});

it('Should remove items from cart', () => {
    cart.addItem(item);
    expect(cart.getTotalQuantity()).to.equal(1);
    cart.removeItem(item)
    expect(cart.getTotalQuantity()).to.equal(0);
});

// Stretch challenges
it('Should update the count of items in the cart', () => {
    expect(cart.getTotalQuantity()).to.equal(0);

    cart.addItem(item);
    expect(cart.getTotalQuantity()).to.equal(1);

    expect(item.quantity).to.equal(1);

    cart.increaseQuantity(item)
    expect(cart.getTotalQuantity()).to.equal(2);

    expect(item.quantity).to.equal(2);
});

it('Should remove an item when its count is 0', () => {
    expect(cart.getTotalQuantity()).to.equal(0);

    cart.addItem(item);
    expect(cart.getTotalQuantity()).to.equal(1);

    cart.addItem(item2);
    expect(cart.getTotalQuantity()).to.equal(2);

    cart.decreaseQuantity(item);
    expect(cart.getTotalQuantity()).to.equal(1);

    cart.decreaseQuantity(item2);
    expect(cart.getTotalQuantity()).to.equal(0);
});

it('Should return the total cost of all items in the cart', () => {
    expect(cart.getTotalPrice()).to.equal(0);
    cart.addItem(item);
    expect(cart.getTotalPrice()).to.equal(10);
    cart.addItem(item2);
    expect(cart.getTotalPrice()).to.equal(13);
});