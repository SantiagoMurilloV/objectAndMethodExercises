// Suppose we have an array of objects that represent products with different properties,
//  including a unique identifier, and we want to get a new array that contains 
//  only products with a certain identifier.


const products = [
    { id: 1, name: 'T-shirt', price: 25 },
    { id: 2, name: 'Pants', price: 40 },
    { id: 3, name: 'Sneakers', price: 80 },
    { id: 4, name: 'Cap', price: 15 },
    { id: 5, name: 'Socks', price: 5 }
];

const idProduct = 4;

function find(products,idProduct){
    let findProduct = [];
    
    findProduct = products.filter(product => product.id === idProduct);
    return findProduct;
}

console.log(find(products,idProduct))