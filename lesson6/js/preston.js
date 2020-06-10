const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

let week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
let date = new Date();
let weekname = week_names[date.getDay()];
let monthname = month_names[date.getMonth()];

const dateoutput = document.querySelector('.currentdate');

dateoutput.textContent = weekname + ", " + date.getDate() + " " + monthname + " " + date.getFullYear();

const pancake_alert = document.querySelector('.pancakes');
if (weekname === 'Friday'){
    pancake_alert.style.display = "block";
}

/* Calculating Windchill */
wind= document.getElementById("wind").textContent ;
temp= document.getElementById("temp").textContent ;
chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4);
document.getElementById("chill").textContent= chill;