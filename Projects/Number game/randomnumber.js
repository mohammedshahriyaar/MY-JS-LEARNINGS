let randomnumber = Math.round(Math.random()*100 +1)
// console.log(randomnumber)

const submit = document.querySelector('#subt');
const userinput= document.querySelector('#guessField')

const guessarea = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const Startagain = document.querySelector('.resultParas');


const p = document.createElement('p')

let guesscount = 1

let play = true // to start game

if(play)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess)
    })
}
// if ever want to store guesses use a guess array


function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert("Please enter a valid number:")
    }
    else if( guess < 1)
    {
        alert("Please enter a number >=1")
    }
    else if( guess > 100)
    {
        alert("Please enter a number less than 100");
    }
    else
    {
        if(guesscount==11)
        {
            displayGuess(guess);
            displayMessage(`GAme OVer . The number was  ${randomnumber}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess)
{
    if(guess===randomnumber)
    {
        displayMessage("You are good at  guessing");
        endGame();
    }
    else if( guess < randomnumber)
    {
        displayMessage("guess a higher value");
    }
    else if( guess > randomnumber)
    {
        displayMessage("GueSS a  Lowwer Value");
    }

}

function displayGuess(guess)
{
    userinput.value='';
    guessarea.innerHTML += `${guess}`;
    guesscount++;
    remaining.innerHTML = `${11 - guesscount}`;
}
function displayMessage(message)
{
    lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame()
{
    userinput.value='';
    userinput.setAttribute('disabled','');
    p.classList.add('button') // for whatever in p to behave as button
    p.innerHTML = `<h2 id = "newgame"> STart A nEw GAmE</h2>`
    Startagain.appendChild(p);
    play=false;
    newGame();
}

function newGame()
{
    const button = document.querySelector('#newgame')
    button.addEventListener('click' , function(e)
    {
        randomnumber = Math.round(Math.random()*100 +1);
        guessarray=[];
        guesscount=1;
        guessarea.innerHTML='';
        remaining.innerHTML = `${11 - guesscount}`;
        userinput.removeAttribute('disabled');
        Startagain.removeChild(p);
        play= true;
    })
}