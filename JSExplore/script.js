

// var x = 5;
// console.log(getName)

// function getName(){
//     console.log("zaki")
// }

// getName();
// console.log(x);
// // console.log(getName)

 
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("1");
//     }, 5000);
// });


// let p2 = Promise.resolve(console.log("1"));
    

// console.log(p1)



async function Check(params) {
    await Promise.resolve(console.log("1"));
    // await p2;
    console.log('2');
}
console.log('3');

Check();
console.log('4')