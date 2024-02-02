// TASK 1 //
 
 const catalog = {
    " product A": 20,
    "product b": 40,
    "product c": 50,
}

function calculateProductTotal(product, quantity, giftWrapped) {
    let ProductPrice = catalog[product] * quantity
    if (giftWrapped) {
        ProductPrice += quantity
    } return ProductPrice;
}

function applyDiscount(cart, totalQuantity) {
    let discount = 0;
    if (cart.total > 200) {
        discount = Math.min(discount + 10, cart.total)
        cart.discountdisplay = "flat_10_discounts"
    }
    for (const product in cart.product) {
        const quantity = cart.product[product].quantity;
        if (quantity > 10) {
            const bulkdiscount = catalog[product] * quantity * 0.05;
            discount = Math.min(discount + bulkdiscount, cart.total);
            cart.discountdisplay = "bulk_5_discounts";
        }
        if (totalQuantity > 10) {
            const bulkdiscount = cart.total * 0.1;
            discount = Math.min(discount + bulkdiscount, cart.total);
            cart.discountdisplay = "bulk_10_discounts";
        }
        if (totalQuantity > 30) {
            const tiereddiscount = (totalQuantity - 15) * 0.5 * cart.total["product A"];
            discount = Math.min(discount + tiereddiscount, cart.total);
            cart.discountdisplay = "tiered_50_discounts";
        }
    }
    return discount;


} function ShippingFee(totalQuantity) {
    return Math.ceil(totalQuantity / 10) * 5;
}
const readline = require("readline-sync");
const cart = {
    products: {},
    total: 0,
    discountdisplay: null,

};
for (const product in catalog) {
    const quantity = parseInt(readline.question(`Enter the quantity Of ${product}: `), 10);
    const giftWrapped = readline.keyInYNStrict(`${product} wrapped as a gift?`);
    const ProductTotal = calculateProductTotal(product, quantity, giftWrapped);
    cart.products[product] = { quantity, total: ProductTotal, };
    cart.total += ProductTotal;


} const totalQuantity = Object.values(cart.products).reduce((acc, val) => acc + val.quantity, 0);
const discount = applyDiscount(cart, totalQuantity);
const shippingFeeAmount = ShippingFee(totalQuantity);

const subtotal = cart.total - discount;
const total = subtotal + shippingFeeAmount;


//output

console.log(`product details:`);
for (const product in cart.products) {
    console.log(`${product}:Qunatity-${cart.products[product].quantity},Total-$${cart.products[product].total}`);

}
console.log(`subtotal:$${subtotal.toFixed(2)}`);
if (cart.discountdisplay) {
    console.log(`Discount applied(${cart.discountdisplay}): -$${discount.toFixed(2)}`);
}
console.log(`shipping fee: $${shippingFeeAmount.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);




//steps

//step 1:Define catalog object
//step 2:create a function calculateProductTotal-it take product qauntity and flag for gift wrapping
//step 3:calculate the total price
//step 4:create function applyDiscount-it take shopping cart and total quantity of product
//step 5:check discount
//step 6:apply the discount and discount display in the cart
//step 7:create a function shippingFee- calculate shipping fee according based on the total qauntity of product
//step 8:use readline to get user input for each product quantity and whether its should be gift warpped
//step 9:calculate total to each product and update this into cart
//step 10:find the total of all products in cart
//step 11:call the 'applyDiscount' function to calculate discount
//step 12:call the 'shippingFee' function to calculate shipping fee
//step 13:calculate the subtotal by substracting discount from the total cart
//step 14:for getting final result add the shipping fee
//step 16:output-result:- Display the details of product in the cart
//step 16:display subtotal, shipping fee,discount(if any) and total