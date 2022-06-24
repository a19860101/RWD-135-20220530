// 變數 variable
/* 
    命名規範
    1. 首字只可使用英文或底線
    2. 大小寫有別
    3. 不可使用保留字
*/
var a = 100;
var b = 'hello javascript~!';

var a = 333;

console.log(a);

let x = 99;
let y = 'hello let!!';

x = 100;

console.log(x,y);


// 常數 constant variable

const q = 'qwerty!!';

console.log(q);

/* 
    var vs let,const

    var可以重複宣告；let,const不行
    const不可以重新賦值
    var是function scope；let,const是block scope

*/

// 資料型別
/* 
    數值 Number
    字串 String
    布林 Boolean(true, false)

    未定義 Undefined
    空值 Null

    陣列 Array
    物件 Object

    函式 Function
    符號 Symbol
*/

let qq = null;
console.log(typeof(qq));
