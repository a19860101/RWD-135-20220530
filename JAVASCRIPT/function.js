
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
