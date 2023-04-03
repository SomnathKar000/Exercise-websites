class Product{
    constructor(itemName){
        this.itemName=itemName;
        console.log("pass by bed"+Product);
    }
    get getItemName(){
        return this.itemName+ " this is product";
    }
}

class Bed extends Product{
    constructor(itemName){
        super(itemName);
    }
    get getItemName(){
        return this.itemName+" this is bed";

    }
}
let pen = new Product("Pen");
let pencil = new Bed("Pencil");
console.log(pencil.getItemName)

console.log(pen.getItemName)
