// *****************************
// Product object
// ******************************
export class Product{

    constructor(name, price){
        this.id = this.generateId();
        this.name = name;
        this.price = price;
    }

    generateId() {
        return Math.floor(Math.random() * 100)
    }
}