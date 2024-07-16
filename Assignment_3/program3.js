let string = 'INDIA';
let stringSplit = [...string];
stringSplit.splice(3,0,"ONES");

let res = stringSplit.join('');

console.log(res);