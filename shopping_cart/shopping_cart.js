let shoppingCart = {
    products: {},

    addItem: (item) => {
        this.products[item.id] = item;
    },

    removeItem: (item) => {
        delete this.products[item.id]
    }
};

class Product {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.quantity = 0;
        this.id = id + 1;
    }
};