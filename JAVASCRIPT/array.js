// Arrya 陣列

// let drinks = new Array();
// drinks[0] = '水';
// drinks[1] = '紅茶';
// drinks[2] = '綠茶';
// drinks[3] = '咖啡';

// let drinks = new Array('礦泉水','阿薩姆紅茶','茉莉綠茶','美式咖啡');

let drinks = ['礦泉水','阿薩姆紅茶','茉莉綠茶','美式咖啡'];

// console.log(drinks);
// console.log(drinks[0]);
// console.log(drinks[1]);
// console.log(drinks[2]);
// console.log(drinks[3]);

console.log(drinks.length);


//陣列迭代
// for(let i=0;i<drinks.length;i++){
//     console.log(drinks[i])
// }

// for(let data in drinks){
    // console.log(data);
    // console.log(drinks[data]);
// }
for(let data of drinks){
    console.log(data);
}