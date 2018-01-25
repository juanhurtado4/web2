const mocha = require('mocha');
const expect = require('chai').expect;
const { ShoppingCart, Product } = require('./shopping_cart')

describe('Testing Product', () => {
    it('should have a name', () => {
        const item = new Product('chicken', 10, 1);
        expect(item.name).to.be.a('string');
        expect(item.name).to.equal('chicken');
    })
    it('should have a price', () => {
        const item = new Product('chicken', 10, 1);
        expect(item.price).to.be.a('number');
        expect(item.price).to.equal(10);
    })
})

describe('Testing ShoppingCart', () => {
    it('Should return an array containing all items in cart', () => {
        const cart = new ShoppingCart();
        const newItem = new Product('chocolate', 4, 2)
        expect(cart.getAllItems()).to.be.a('array');
        expect(cart.getTotalQuantity()).to.be.a('number');
        expect(cart.getTotalQuantity()).to.equal(0);
        cart.addItem(newItem);
        expect(cart.getTotalQuantity()).to.equal(1);
        const cartItem = cart.getAllItems()[0]
        expect(cartItem.name).to.equal('chocolate')
    })
})

it('Should return an array containing all items in cart');
it('Should add a new item to the shopping cart');
it('Should return the number of items in the cart');
it('Should remove items from cart');
// Stretch challenges
it('Should update the count of items in the cart');
it('Should remove an item when its count is 0');
it('Should return the total cost of all items in the cart');