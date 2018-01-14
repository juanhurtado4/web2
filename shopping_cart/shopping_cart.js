let shoppingCart = {
    products: {},

    addItem(item){
        this.products[item.id] = item;
    },

    removeItem(item){
        delete this.products[item.id]
    },

    getAllItems(){
        return Object.values(this.products)
    },

    increaseQuantity(item){
        this.products[item.id] += 1
    },
    
    decreaseQuantity(item){
        if (this.products[item.id] - 1 < 1) {
            this.removeItem(item);
        } else {
            this.products[item.id] += 1;
        }
    },

    getTotal(value) {
        let allItems = this.getAllItems()
        return allItems.reduce((item, item2) => item.value + item2.value)
    },
        
    getTotalQuantity() {
        return getTotal('quantity');
    },

    getTotalPrice() {
        return getTotal('price');
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