let users = [
    {
        id: 1,
        name: 'John',
        mail: 'john@gmail.com'
    },
    {
        id:2,
        name: 'Mary',
        mail: 'mary@gmail.com'
    },
    {
        id:3,
        name: 'Xavier',
        mail: 'xaxaxa@gmail.com'
    }
];

let drinks = [
    {
        id: 1,
        name: '紅茶',
        price: 20
    },
    {
        id: 2,
        name: '綠茶',
        price: 20
    },
    {
        id: 3,
        name: '奶茶',
        price: 30
    },
    {
        id: 4,
        name: '珍珠奶茶',
        price: 50
    },
    {
        id: 5,
        name: '拿鐵',
        price: 70
    },
];

//foreach
users.forEach(function(data){
    // console.log(data.mail);
    // console.log(data.name);
})

//map
let drinkName = drinks.map(function(data){
    return data.name;
})
let drinkPrice = drinks.map(function(data){
    return data.price;
})

// console.log(drinkPrice);

// filter
let cheap = drinks.filter(function(data){
    return data.price <= 30
})
let bubble = drinks.filter(function(data){
    return data.name == '珍珠奶茶';
})

drinks = drinks.filter(function(data){
    return data.name != '綠茶';
})

console.log(drinks);

// includes()

console.log(drinkName);
// let result = drinkName.includes('珍珠奶茶');
let result = drinkName.includes('摩卡');
console.log(result);

// reduce()
console.log(drinkPrice)
let total = drinkPrice.reduce(function(a,b){
    // return a;
    console.log(b)
})
console.log(total);
/* 
    a:20 b:20
    a:40 b:30
    a:70 b:50
    a:120 b:70
    a:190 b:undefined
*/