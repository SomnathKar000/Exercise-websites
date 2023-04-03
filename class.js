
// const Product1= class{
//     constructor(itemName, price, discount, productCode){
//         this.itemName= itemName;
//         this.price= price;
//         this.discount=discount;
//         this.productCode= productCode;
//     }
// };

// let cola = new Product1("Cola ",30, 5,"C-20");

// console.log(Product1);

class Product{
    constructor(itemName, price, discount, productCode){
        this.itemName= itemName;
        this.price= price;
        this.discount=discount;
        this.productCode= productCode;
        
    }
    get getDiscount(){
        return this.discount;
    }
    set setDiscount(value){
        this.discount=value;
    }
    discountValue(){
        return this.discount*this.price/100;
    }
};

let pencil = new Product("Pencil",20,2,"P-50");
// console.log(pencil);
// pencil.setDiscount=45;
// console.log(pencil.getDiscount);

console.log(pencil.discountValue());