let hex = '123456789ABCDEF'

const randomcolor = function () {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    console.log(color);

    return color;
}

const start = document.getElementById('start');
const stopp = document.getElementById('stop');

let intervalid = null;

const changebackgroundcolor = function () {
    //do set interval only if interval id is null 
    if (!intervalid) {
        intervalid = setInterval(changecolor, 1000);
    }

    function changecolor() {
        document.body.style.backgroundColor = randomcolor();
    }


}

const stopchangebackgroundcolor = function () {
    clearInterval(intervalid);
    intervalid = null;
}




start.addEventListener('click', changebackgroundcolor);

stopp.addEventListener('click', stopchangebackgroundcolor)