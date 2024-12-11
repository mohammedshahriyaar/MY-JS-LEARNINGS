let  mark = 10;
mark="33"

console.log(typeof mark);


let a ="44abc"
// let value = Number(mark);
let value = Number(a);

console.log(value); //gives NAN  but type of "44abc" is detected as number

// "33" => 33
// "44abc"=>NaN  but type of NaN is number
// true =>1 ;false =0



let istrue =1;
let boolis = Boolean(istrue);
console.log(boolis);

//""=>false
// true =>1 ;false =0
//"shah" =>true