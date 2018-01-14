let shoppingCart = {
    products: {},

    addItem(item){
        this.products[item.id] = item;
    },

    removeItem(item){
        delete this.products[item.id]
    },

    get_all_items(){
        return Object.values(this.products)
    }



};

class Product {
    constructor(name, price, id) {
        this.name = name;
        this.price = price * this.quantity;
        this.quantity = 1;
        this.id = id;
    }
};