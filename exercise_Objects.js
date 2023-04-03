// const product ={
    // item_name: "Cola",
    // price: 89,
    // discount: "25%",
    // item_code: "C-45"
// }

// Factory function 

// function product(){
//     return{
//         item_name: "Cola",
//         price: 89,
//         discount: "25%",
//         item_code: "C-45"
//     };
// }

// const cola =product();
// console.log(cola);

// Constructor function

function Product(){
    this.item_name = "Cola";
    this.price = 89;
    this.discount = "25%";
    this.item_code = "C-45";
}

const cola = new Product();
console.log(cola);