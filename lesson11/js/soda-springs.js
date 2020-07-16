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
document.getElementById("chill").textContent = chill.toFixed(2);



//
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=2882079f1e2bd826f567208ce3164038"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = (jsObject.main.temp * 9/5 - 459.67).toFixed(2);
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;

});

const apiFOR = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=2882079f1e2bd826f567208ce3164038"

fetch(apiFOR)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

      for (let i = 0; i < 5; i++) {
        document.getElementById('day' + i).textContent = (jsObject.list[i].main.temp * 9/5 - 459.67).toFixed(2); 
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        const desc = jsObject.list[i].weather[0].description; 
        document.getElementById('icon' + i).setAttribute('src', imagesrc);  
        document.getElementById('icon' + i).setAttribute('alt', desc);
        }
        
    });

    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          console.table(jsonObject);  // temporary checking for valid response and data parsing
          const towns = jsonObject['towns'];
          for (let i = 0; i < towns.length; i++ ) {
             if (towns[i].name == "Soda Springs") {
               for (let e = 0; e < towns[i].events.length; e++) {
               let card = document.createElement('section');
               let para = document.createElement('p');
             
               pres = towns[i].events[e]
               para.textContent = pres;
               card.appendChild(para);
               document.querySelector('div.events').appendChild(card);
    
               
        }
        }
        } 
      })
    
      .catch(function(error){
        alert("Sorry the data is not available now.");
    });
        
    
    