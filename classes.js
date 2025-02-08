//class-> (ES6 function) provides a more structured and cleaner way to 
//          work with the objects compared to traitional construstor funcitons 
//          ex.static keyword,encapsulation,inheritance 

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
        
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);

    }


    calculateTotal(salesTax){
        return this.price + (this.price*salesTax);
    }


}

const salesTax=0.05;

const product1=new Product("Shirt",1000.00);
const product2=new Product("Pant",1200.00);
const product3=new Product("Underwear",100.00);


product1.displayProduct();
const total= product1.calculateTotal(salesTax);
console.log(`Total Price (with tax): ${total.toFixed(2)}`)