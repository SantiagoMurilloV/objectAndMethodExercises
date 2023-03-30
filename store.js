
// Let's say you have a dataset that contains information about products, such as their name, price, category,
//  and availability. If you want to find all products that are priced below a certain value or belong
//  to a specific category, you could use JavaScript's array methods to filter and search for relevant products.






function store(products, k){
    let  filterProduct = [];
    let OrderProduct = [];
    let  productsTransform = [];
    let  findProduct =[];
    switch(true){
        
        case(k===1):
            filterProduct = products.filter(product => product.price < 50);
            return filterProduct;
        break;
        case(k===2):
            OrderProduct = products.sort((a, b) => a.price - b.price);
            return OrderProduct;
        break;
        case(k===3):
            productsTransform = products.map(product => ({ name: product.name, price: product.price }));
            return productsTransform;
        break;
        case(k===4):
        findProduct = products.find(product => product.name === 'fridge');
        return findProduct;
        break;
        default:
            return "";

    }


}


const products = [
    {
        "name": "blender",
        "price": 100,
        "category": "Electronic",
        "availability": true
    },
    {
        "name": "bed",
        "price": 50,
        "category": "Home",
        "availability": true
    },
    {
        "name": "fridge",
        "price": 200,
        "category": "Electronics",
        "availability": false
    },
    {
        "name": "table",
        "price": 80,
        "category": "Home",
        "availability": true
    },
    {
        "name": "microwave",
        "price": 150,
        "category": "Electronics",
        "availability": true
    }
];

console.log(store(products, 4))


