//  Item in a shopping cart.
const { builtinModules } = require("module");
const items = require("./fakeDb")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        // to keep track of all items
        items.push(this);
    }

    static findAll() {
        return items
    }
    // Function to update found item with matching name to data.

    static update(name, data) {
        let foundItem = Item.findAll(name);
        if (foundItem === undefined) {
            throw {message: "not Found", status: 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    // Function used to find and return item with matching name.

    static find(name) {
        const foundItem = items.find(v => v.name === name);
        if (foundItem === undefined) {
            throw {message: "Not Found", status: 404}
        }
        return foundItem
    }

    // Function to remove item with matching ID.

    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx === -1) {
            throw {message: "Not Found", status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports = Item;