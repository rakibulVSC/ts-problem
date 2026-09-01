const getStockStatus=(stock:number):string=>{

    if(stock === 0){
        return "Out of Stock"
    }
    else if(stock >=1 && stock<=5){
        return "Almost Stock Out"
    }
    else if(stock>=6 && stock<=20){
        return "Available"
    }

    else{
        return "In Stock"
    }
}
console.log(getStockStatus(0))