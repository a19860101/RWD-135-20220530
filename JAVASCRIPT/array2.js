let drinks = ['礦泉水','阿薩姆紅茶','茉莉綠茶','美式咖啡'];

//push(),pop()
drinks.push('拿鐵','梅子綠茶');
drinks.pop();


//unshift(),shift()
drinks.unshift('可樂');
drinks.shift();

// splice() 拼接
// drinks.splice(1,0,'雪碧','黑松沙士')
// drinks.splice(1,1,'雪碧','黑松沙士')
// drinks.splice(2,1);

//slice() 切片
let myDrinks = drinks.slice(0,1); 

console.log(drinks);
console.log(myDrinks);