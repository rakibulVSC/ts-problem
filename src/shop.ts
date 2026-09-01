
type product={
    name:string
    price:number
}

const calculateCartTotal=(products:product[]):number=>{
let total:number=products.reduce((acc,item)=> acc+item.price,0)
return total;
}
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
 console.log(calculateCartTotal(products))
