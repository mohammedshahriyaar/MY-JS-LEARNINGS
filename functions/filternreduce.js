// const a=[1,2,4,5,6,7,8,9,10];

// a.forEach( (i)=> 
// {
//     console.log(i);
// })


// //basic for each ends here

// // why filter and reduce?
// // because for each doesnt return anything to manipulate


// const b =a.filter( (i) => i>=5)
// console.log(b);
//another representation using {}
//while using {} we use return for arraow function
// const b =a.filter( (i) =>
// {
//     return i>=8
// })
// console.log(b);

// next method 
 
// const c=[]

// a.forEach( (i)=> {
//     if(i>8){
//         c.push(i);
//     }  
// })

// console.log(c);


//++++++++++++++++++ map now+++++++++++++++

// let b= a.map( (i)=>i+10)
// console.log(b);
// console.log(b);



//+++++++++++ reduce +++++++++++

// reduce( (accumulator,currval))


const a=[1,2,3]


// let ans = a.reduce( function(acc,currval)
// {
//     console.log(`acc: ${acc} and curr val: ${currval}`);
//     return acc + currval
// },0 )

// console.log(ans)


//arrow format


// let ans = a.reduce((acc,currval)=>{
//     return acc + currval
// },0)

// console.log(ans);



const cart = [

    {
        name:"js",
        price:200
    }
    ,
    {
        name:"cpp",
        price:300
    }
    ,
    {
        name:"java",
        price:500
    }
    ,
    {
        name:"andro",
        price:1100
    }
]


let ans = cart.reduce(
    (acc,item)=>
    {
        return acc +  item.price;
    }
,0)

console.log(ans);