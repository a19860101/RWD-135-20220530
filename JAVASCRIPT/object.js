// let user = new Object();
// user.name = 'John';
// user.mail = 'john@gmail.com';
// user.gender = 'male';


let user = {
    name: 'John',
    mail: 'john@gmail.com',
    gender: 'male',
    skill: ['平面設計','網頁設計'],
    content:{
        title: 'content 1',
        qty: 123
    },
    active:function(){

    }
}
console.log(user.name);
console.log(user.mail);
console.log(user.skill);
console.log(user.content.title);

let drinks = [
    {
        name: '紅茶',
        price: '30'
    },
    {
        name: '綠茶',
        price: '30',
    },
    {
        name: '拿鐵',
        price: '45'
    }
];
// console.log(drinks[0]);
// console.log(drinks[1]);
// console.log(drinks[2]);
for(let data of drinks){
    console.log(data.name);
    console.log(data.price);
}
