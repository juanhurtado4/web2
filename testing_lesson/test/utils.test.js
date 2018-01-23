const mocha = require('mocha')
const chai = require('chai')
const utils = require('../utils')
const sc = require('../../shopping_cart/shopping_cart')
const ShoppingCart = sc.ShoppingCart
const Product = sc.Product
const expect = chai.expect;

// console.log(utils.sayHello())
// console.log(utils.addTwoNumbers(5, 5))

it('should have a name', () => {
    let laptop = new Product('macbook', 3000, 1)
    expect(laptop.name).to.be.a('string')
    expect(laptop.name).to.equal('macbook')
})

it('is showing how testing without chair', () => {
    if (5 > 6) {
        throw new Error('This test failed');
    }
})

it('should say hello', () => {
    const hello = utils.sayHello()
    expect(hello).to.be.a('string')
    expect(hello).to.equal('Hello')
    expect(hello).to.have.lengthOf(5)
})

it('should return area of (5,5): 25', () => {
    const areaOf25 = utils.area(5, 5)
    expect(areaOf25).to.be.a('number')
    expect(areaOf25).to.equal(25)
})

it('should return perimeter of 5: 20', () => {
    const perimeterOf5 = utils.perimeter(5, 5)
    expect(perimeterOf5).to.be.a('number')
    expect(perimeterOf5).to.equal(20)
})

it('should add 5 plus 5: 10', () => {
    const add5and5 = utils.addTwoNumbers(5, 5)
    expect(add5and5).to.be.a('number')
    expect(add5and5).to.equal(10)
})