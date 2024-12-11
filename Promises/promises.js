const promise_1 = new Promise( function(resolve, reject) //latest
{
    //do async task
    //db calls,crypo etc

    setTimeout(() => {
        console.log("task is completer")
        resolve()  //to consume this promise this is must
    }, 1000);
}
)
//promise created


//now consuming promise

promise_1.then( function(){                                                                  //then is directly linked to resolve
    console.log('promise consumed')

})                      




///// easier way
new Promise( function(resolve, reject)
{
    setTimeout(function()
    {
        console.log("Async task2")
        resolve()
    },1000)
}).then(function()
{
    console.log("async 2 resolbved");
})



//promise 3
//how we pass parameters in then
const promise_3 = new Promise(function(resolve , reject)
{
    setTimeout(function()
    {
        resolve({ username:"shah", email:"shah@gmail.com"})
    },1000)
})


promise_3.then(function(user)
{
    console.log(user);
})



//promise 4


const promise_4  = new  Promise( function( resolve , reject)
{
    setTimeout(function()
    {
        // let error = false;
        let error = true;
        if(!error)
        {
            resolve({username : "zak", email:"Zak@gmail.com" })
        }
        else
        {
            reject('Errror: Something is Wrong');
        }
    },1000)
})


promise_4
.then( (user) => {
    console.log(user);
    return user.username

})
.then( (username) =>{

    console.log(username);

})
.catch( function(error)
{
    console.log(error)
})
.finally( ()=>
{
    console.log("the promise is completed")
})





//promise 5

const promise_5 = new Promise( function( resolve , reject)
{
    setTimeout(function()
    {
        // let error = false;
        let error = true;
        if(!error)
        {
            resolve({username : "zak", password:"Zak123" })
        }
        else
        {
            reject('Errror: Login failed for Zak ');
        }
    },1000)
     
})

async function consumePromisefive ()
{
    try {
        const response = await promise_5
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromisefive()






async function getAllusers()
{
    try {
         const respones  = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await respones.json()
        console.log(data);
        
    } catch (error) {
        console.log("error is",error);
        
    }

}

getAllusers()