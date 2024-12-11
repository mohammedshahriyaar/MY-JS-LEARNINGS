function hello (a)
{
    return a;
}

console.log(hello(5))

//if we give no of args to hello function then it will no run
console.log(hello(5,7))

//to handle this we use rest operator(...)
//what rest does is collect all of them and return

// rest and spread are both same but meaning depends on situation


function hellorest(...a)
{
    return a;
}

console.log(hellorest(5,7,8 ))

const user=
{
    name:"Shah",
    age:18
}

function printt(obj)
{
    console.log(`name is ${obj.name} and age is${obj.age}`)
}

printt(user)