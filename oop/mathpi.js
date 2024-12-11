// console.log(Math.PI);

// Math.PI = 6;

// console.log(Math.PI);


/// how do i change value of objects
//there is something called as getOwnPropertyDescriptor that tells us about what are 
//properties like enumerable,writable etc..





// console.log(Object.getOwnPropertyDescriptor(Math ,"PI"));


// Object.defineProperty(Math,"PI",{
//     writable:true
// })


// Math.PI = 6;

// console.log(Math.PI);

// This code defines the writable property descriptor for Math.PI to be true. 
// However, as mentioned earlier, attempting to change the value of Math.PI directly will not work, even if you set writable to true. 
// The properties of built-in objects are often implemented with special characteristics that prevent modification.


const item =
{
    name : 'chai',
    price : 50,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(item , "name"))


Object.defineProperty(item ,"name",{
    enumerable:false
})


console.log(Object.getOwnPropertyDescriptor(item , "name"))


for (const [key ,value ] of Object.entries(item)) {

    console.log(`${key} : ${value}`);
    
}

// the output here we cannot see chai because we stopped its iterable property