const form = document.querySelector('form');

form.addEventListener('submit',function(e){

    e.preventDefault();

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    // const results = document.getElementById('result');
    console.log(height);

    // const heightval=height.value;
    // console.log(heightval)

    if(height==='' || height < 0 || isNaN(height))
    {
        console.log("Please enter valid height");
    }

    else if(weight==='' || weight < 0 || isNaN(weight))
    {
        console.log("Please enter valid weight");
    }

    else
    {
        const bmi= (weight / ((height * height ) / 10000)) .toFixed(2);
         
        //display result
        document.getElementById('result').innerHTML=`${bmi}`;
    }
});