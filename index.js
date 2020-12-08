import { Product } from "./src/Product.js";
import { Cart, DISCOUNT } from "./src/Cart.js";

const a = new Product('Apple', 10);
const b = new Product('Orange', 20);
const discA = {
    value: 10,
    type: DISCOUNT.TYPE_PERCENTAGE
}
const discB = {
    value: 20,
    type: DISCOUNT.TYPE_ABSOLUTE
}

try {
    const cart = new Cart();
    cart.addProduct(a);
    cart.addProduct(b);
    cart.addProduct(b);
    cart.addProduct(b);
    cart.addDiscount(discA);
    cart.calculate();
    console.log(cart.showCart());
} catch (error) {
    console.log(error);
}
