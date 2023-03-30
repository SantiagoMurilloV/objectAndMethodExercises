// A store wants to inventory clothes according to their price and classify them into different groups,
//  expensive and cheap. also want to add a box to the information of what is the price with the discount

// expensive > 50
// cheap < 50


// the data are:


const products = [
    {
        "name": "Camisa",
        "price": 25.99,
        "discount": 0.2
    },
    {
        "name": "Pantalón",
        "price": 55.99,
        "discount": 0.1
    },
    {
        "name": "Chaqueta",
        "price": 80.99,
        "discount": 0.15
    },
    {
        "name": "Zapatos",
        "price": 60.99,
        "discount": 0.25
    },
    {
        "name": "gorra",
        "price": 15.99,
        "discount": 0.05
    }
]


function inventory(products){


    let expensive = [];
    let chep = [];
    let productWithDiscount = [];

    expensive = products.filter(product => product.price > 50);

    chep = products.filter(product => product.price < 50);

    productWithDiscount = products.map( product =>({name: product.name , price: product.price, newPrice: product.price-(product.discount*product.price)}))

    return productWithDiscount

}


console.log(inventory(products))