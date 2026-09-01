"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    const total = products.reduce((acc, item) => acc + item.price);
    return total;
};
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
console.log(calculateCartTotal(products));
//# sourceMappingURL=shop.js.map