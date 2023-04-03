// A store wants to inventory clothes according to their price and classify them into different groups,
//  expensive and cheap. also want to add a box to the information of what is the price with the discount

// expensive > 50
// cheap < 50


// the data are:


const products = [
    {
        "name": "Shirt",
        "price": 25.99,
        "discount": 0.2
    },
    {
        "name": "Pants",
        "price": 55.99,
        "discount": 0.1
    },
    {
        "name": "Jacket",
        "price": 80.99,
        "discount": 0.15
    },
    {
        "name": "Shoes",
        "price": 60.99,
        "discount": 0.25
    },
    {
        "name": "cap",
        "price": 15.99,
        "discount": 0.05
    }
]

const customers = [
    {
        name: 'John',
        surname: 'Perez',
        age: 25,
        address: {
            street: 'Av. freedom',
            number: 123,
            city: 'Buenos Aires',
            country: 'ARGENTINA'
            }
    },
    {
        name: 'Mary',
        surname: 'Garcia',
        age: 30,
        address: {
            street: 'Calle 10',
            number: 456,
            city: 'Mexico City',
            country: 'MEXICO'
            }
    },
    {
        name: 'Peter',
        surname: 'Martinez',
        age: 40,
        address: {
            street: 'Rua Augusta',
            number: 789,
            city: 'São Paulo',
            country: 'BRAZIL'
        }
    }
]

let productWithDiscount = [];

function inventory(prod){


    let expensive = [];
    let chep = [];
    

    expensive = prod.filter(product => product.price > 50);

    chep = prod.filter(product => product.price < 50);

    productWithDiscount = prod.map( product =>({name: product.name , price: product.price, newPrice: product.price-(product.discount*product.price)}))

    return productWithDiscount

}

inventory(products)

console.log(productWithDiscount)


const CreateBill = (userName, productName, productQuant) => {
    let addressC = [];
    let name_ = customers.find(c => c.name === userName && c.surname ).name;
    let lastName_ = customers.find(c => c.name === userName && c.surname ).surname;
    let address_ = customers.find(c => c.name === userName && c.surname ).address;
    let productName_ = productWithDiscount.find(product => product.name === productName);
    let total = 0;
    if (productName_ && productName_.name === productName){
        total = productQuant * productName_.newPrice;
        console.log(`\nUser Name: ${name_} ${lastName_}`);
        console.log(`Address: ${address_.street}, ${address_.city}`);
        console.log(`Product Name: ${productName_.name}`);
        console.log(`Quantity: ${productQuant}`);
        console.log(`Price with discount: ${productName_.newPrice}`);
        console.log(`Total: ${total}\n`);
    } else {
        console.log("Product not found");
    }
}

let userN = "Peter";
CreateBill(userN, "Shirt", 2);