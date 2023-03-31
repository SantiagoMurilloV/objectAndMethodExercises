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

const clientes = [
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 25,
        direccion: {
            calle: 'Av. Libertad',
            numero: 123,
            ciudad: 'Buenos Aires',
            pais: 'Argentina'
        }
    },
    {
        nombre: 'María',
        apellido: 'García',
        edad: 30,
        direccion: {
            calle: 'Calle 10',
            numero: 456,
            ciudad: 'Ciudad de México',
            pais: 'México'
        }
    },
    {
        nombre: 'Pedro',
        apellido: 'Martínez',
        edad: 40,
        direccion: {
            calle: 'Rua Augusta',
            numero: 789,
            ciudad: 'São Paulo',
            pais: 'Brasil'
        }
    }
]

let productWithDiscount = [];

function inventory(products){


    let expensive = [];
    let chep = [];
    

    expensive = products.filter(product => product.price > 50);

    chep = products.filter(product => product.price < 50);

    productWithDiscount = products.map( product =>({name: product.name , price: product.price, newPrice: product.price-(product.discount*product.price)}))

    return productWithDiscount

}


console.log(inventory(products))

console.log("nombre del comprador:")

clientes.find(cliente => cliente.name === "jose")


function sold(productWithDiscount){
    
}