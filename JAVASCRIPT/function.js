
// 函式宣告式 Function declaration (提升性)
function test(){
    let x = 100;
    // console.log(x);
    return x;
}

// 函式表達式 Function expression
let test2 = function(){
    let y = 999;
    return y;
}

function square(w,h){
    return w*h;
}

console.log(square(200,128));
console.log(square());

function go(x){
    return x;
}
console.log(go())

// 箭頭函式 arrow function

// function asdf(){
//     return 'asdf';
// }

// let asdf = ()=>{
//     return 'asdf';
// }

// 如果大括號內只有return，則大括號跟return皆可省略
// let asdf = () => 'asdf';

// 如果只有一個參數，則小括號可以省略
// let asdf = x => {return x};
// let asdf = x => x;

// let asdf = (x,y) => x + y;
// let asdf = function(x,y){
//     return x+y;
// }

// let asdf = function(){
//     return this;
// }
// let asdf = () => this;

// console.log(asdf(123,234));

let obj = {
    name:'test',
    active:function(){
        return this;
    }
}
let obj2 = {
    name:'test2',
    active:() => {
        return this;
    }
}
console.log(obj2.active());