// Answer 1: Understanding the JSON schema

const item = {
    required: ["name", "price", "size"]
};

const shirtJSON = '{"name": "Shirt", "price": 20, "size": "M"}';
const pantsJSON = '{"name": "Pants", "price": 30, "size": "L"}';
const shoeJSON = '{"name": "Shoe", "price": 50, "size": 9}';

// Answer 2: Convert the JSON objects

const shirtObject = JSON.parse(shirtJSON);
const pantsObject = JSON.parse(pantsJSON);
const shoeObject = JSON.parse(shoeJSON);

// Answer 3: Parent class

class Item {
    constructor(item) {
        Object.assign(this, item);
    }
    getItemDescription() {
        return `This item is a ${this.name}, it costs ${this.price} and is a size ${this.size}.`;
    }
}

// Answer 4: Child Classes
// Child 1

class Shirt extends Item {
    constructor(item, neckLine) {
        super(item);
        this.neckLine = neckLine;
    }
    getShirtNeckLine() {
        return `The ${this.name} is a ${this.neckLine}.`;
    }
}

// Child 2

class Pants extends Item {
    constructor(item, fitType) {
        super(item);
        this.fitType = fitType;
    }
    getFitType() {
        return `The ${this.name} are ${this.fitType}.`;
    }
}

// Child 3

class Shoes extends Item {
    constructor(item, brand) {
        super(item);
        this.brand = brand;
    }
    getBrand() {
        return `The ${this.name} brand is ${this.brand}.`;
    }
}

// Answer 5: Singleton Shopping Cart
// Shopping cart class

let instance = null;
class ShoppingCart {
    constructor() {
        if(!instance) {
            this.items = [];
            instance = this;
        } else {
            return instance;
        }
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
    }
    getItemCount() {
        return `You have a total of ${this.items.length} items in you cart.`;
    }
    getTotal() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        return `Your total is ${total}`;
    }
}

// Answer 6: Creating Instances:

const shirt = new Shirt(shirtObject, "V-neck");
const shoes = new Shoes(shoeObject, "Adidas");
const pants = new Pants(pantsObject, "slim fit");

console.log(shirt.getItemDescription());
console.log(pants.getItemDescription());
console.log(shoes.getItemDescription());

console.log(shirt.getShirtNeckLine());
console.log(pants.getFitType());
console.log(shoes.getBrand());

// Answer 7: Adding objects to the Cart/Displaying information in the console:

const cart = new ShoppingCart();
cart.addItem(shirt);
cart.addItem(pants);
cart.addItem(shoes);

console.log(cart.getItemCount());
console.log(cart.getTotal());
cart.removeItem("Shirt");
console.log(cart.getTotal());
