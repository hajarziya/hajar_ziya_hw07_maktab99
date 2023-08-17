// map
// یک object iterable است iterable یعنی اینکه قابلیت
// Loop شدن دارد یعنی میشود روی آن متد Foreach زد ولی چون Object است متد های آرایه را نمیشود روش اعمال کرد مثل push
// .
// برای اینکه این Error بر طرف شود ما میتوانیم به دو شیوه عمل کنیم .
// 1_با متد array.from  آن را به صورت array در بیاوریم

// 2_با spreat (...) آن را به صورت آرایه در بیاوریم

let map = new Map();
map.set("name", "John");
let keys = [...map.keys()];

keys.push("more");

console.log(keys);

let map2 = new Map();
map.set("name", "John");
let keys2 = Array.from(map.keys());
keys2.push("more");
console.log(keys2);
