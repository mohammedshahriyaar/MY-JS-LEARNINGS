function setname(username)
{
    this.username=username;
    console.log("username set")
}

// what .call does is saves the refernce of the executed part for further use
function createUser(username,email,password)
{
    // setname(this,username)
    setname.call(this,username);

    this.email=email;
    this.password=password;

}

const shah = new createUser("shah","shah@gmail.com","124");

console.log(shah);