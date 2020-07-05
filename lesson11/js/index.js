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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++ ) {
          if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
           let card = document.createElement('section');
           let h1 = document.createElement('h1');
           let h3 = document.createElement('h3');
           let para = document.createElement('p');
           let para_2 = document.createElement('p');
           let para_3 = document.createElement('p');
           let img = document.createElement('img');
         
           h1.textContent = towns[i].name;
           card.appendChild(h1);
           document.querySelector('div.pueblito').appendChild(card);

           h3.textContent = towns[i].motto;
           card.appendChild(h3);
           document.querySelector('div.pueblito').appendChild(card);

           para.textContent = "Year Founded: " + towns[i].yearFounded;
           card.appendChild(para);
           document.querySelector('div.pueblito').appendChild(card);

           para_2.textContent ="Population: " + towns[i].currentPopulation;
           card.appendChild(para_2);
           document.querySelector('div.pueblito').appendChild(card);

           para_3.textContent ="Annual Rain Fall: " + towns[i].averageRainfall;
           card.appendChild(para_3);
           document.querySelector('div.pueblito').appendChild(card);

           img.setAttribute('src', "images/" + towns[i].photo);
           img.setAttribute('alt', "An image of " + towns[i].name);
           card.appendChild(img);
           document.querySelector('div.pueblito').appendChild(card);
      
    }
   }
  })

  .catch(function(error){
    alert("Sorry the data is not available now.");
});


    