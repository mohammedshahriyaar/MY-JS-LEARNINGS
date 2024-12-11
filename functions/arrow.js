// function hello()
// {
//     console.log(this);
// }
// hello();

// const a=()=>
// {
//     console.log(this);
// }

// a()
//another way of arrow func jab paranthesis likho toh no need of return statement willsee in react
const b=(num1 ,num2)=>({name:"shah"})

console.log(b(3,4))

// const b=(num1 , num2)=>( num1 + num2 )

// console.log(b(3,4))


const car = {
    model: 'A1',
    dis: 23,
    time: 10,
    speed1() {
      console.log(this);
      return this.dis / this.time;
    },
    speed2: () => {
      console.log(this);
      console.log(this.dis)
      return this.dis / this.time;
    },
  };
  
  console.log(car.speed1());  // working giving car obj 
  console.log(car.speed2()); // Giving window obj
  

//   notes

//   Arrow functions do not have their own this context; instead, they inherit the this value from their enclosing scope. In this case, the arrow function is defined inside the object literal, but arrow functions do not bind their own this. Therefore, in the context of speed2, this refers to the global object (e.g., window in a browser environment).

// The output of console.log(this) inside speed2 is an empty object {}, and the output of console.log(this.dis) is undefined. This is because the global object doesn't have a property named dis, and it results in undefined. As a result, the division this.dis / this.time in speed2 gives NaN (Not a Number).

// To fix this, you should avoid using arrow functions for methods inside objects when you need to access the object's properties or methods through this. Use regular functions for methods to ensure that this refers to the object itself.