// Another application problem that could be solved using array methods in
//   JavaScript is searching for items in a dataset. For example, suppose
//   you have a dataset with user information and you need to search for a particular user by name


// this program searches by name if K==1 and filters by age if k = 2

function users(usersData,k,name_,age_){
    let userName = [];
    let ages = [];
    
    switch(true){
        case(k===1):
        userName = usersData.find(user => user.name === name_);
        return userName;
        break;
        case(k===2):
        ages = usersData.filter(user => user.age >= age_);
        return ages;
        break;
        default:
            return "";
    }
};


const usersData = [
    {
        "name": "Juan",
        "lastname": "Pérez",
        "age": 30,
    },
    {
        "name": "María",
        "lastname": "González",
        "age": 25,
    },
    {
        "name": "Pedro",
        "lastname": "Fernández",
        "age": 40,
    },
    {
        "name": "Ana",
        "lastname": "Martínez",
        "age": 35,
    },
    {
        "name": "Carlos",
        "lastname": "López",
        "age": 28,
    }
]  ;

let k = 2;
let name_= 'Ana';
let age_ = 30

console.log(users(usersData,k,name_,age_))