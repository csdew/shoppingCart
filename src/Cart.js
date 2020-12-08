// *****************************
// Shopping cart object
// ******************************
import {Product} from "./Product.js"

export const DISCOUNT = {
    TYPE_ABSOLUTE: "absolute",
    TYPE_PERCENTAGE: "percentage"
}

export class Cart{

    constructor(){
        
       this.products = [];
       this.discount = null;
       this.counter = 0;
       this.sum = 0;
       this.endPrice = 0;
    }

    addProduct(product){

        if(!product instanceof Product){
            throw new Error("Product is invalid")
        }

        const foundProduct = this.products.find(productItem => product.id === productItem.id);
        if(foundProduct){
            foundProduct.quantity = foundProduct.quantity + 1;
        } else {
            product.quantity = 1;
            this.products.push(product);
        }
        
        this.counter++;
    }

    addDiscount(discount){

        if(discount && discount.type && discount.value){
            if(isNaN(discount.value)){
                throw new Error("Discount value must be a number");
            }
            if(discount.type !== DISCOUNT.TYPE_ABSOLUTE && discount.type !== DISCOUNT.TYPE_PERCENTAGE){
                throw new Error("Discount type is invalid");
            }
        }
        this.discount = discount;
    }

    calculate(){

        const products = this.products;
    
        for(let i=0; i<products.length; i++){
            const product = products[i];
            const quantity = product.quantity;
            const price = quantity * product.price;
            this.sum += price;
            this.endPrice = this.sum;
        }

        if(this.discount && this.discount.type === DISCOUNT.TYPE_ABSOLUTE) {
            this.endPrice = this.endPrice - this.discount.value;
        } else if (this.discount && this.discount.type === DISCOUNT.TYPE_PERCENTAGE) {
            this.endPrice = this.endPrice * (1-(this.discount.value/100));        
        } 
    }

    showCart(){
        
        return {
            products: this.products,
            totalQuantity: this.counter,
            discount: this.discount,
            price: this.sum,
            endPrice: this.endPrice
        }
    }

}