const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      const prophets = jsonObject['prophets'];
      for (let i = 0; i < prophets.length; i++ ) {
           let card = document.createElement('section');
           let h2 = document.createElement('h2');
           let para = document.createElement('p');
           let para_2 = document.createElement('p');
           let img = document.createElement('img');
         
           h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
           card.appendChild(h2);
           document.querySelector('div.cards').appendChild(card);

           para.textContent = "Date of birth: " + prophets[i].birthdate;
           card.appendChild(para);
           document.querySelector('div.cards').appendChild(card);

           para_2.textContent ="Place of birth: " + prophets[i].birthplace;
           card.appendChild(para_2);
           document.querySelector('div.cards').appendChild(card);

           img.setAttribute('src', prophets[i].imageurl);
           img.setAttribute('alt', "An image of " + prophets[i].name + ' ' + prophets[i].lastname);
           card.appendChild(img);
           document.querySelector('div.cards').appendChild(card);
      
    }
  
  })

  .catch(function(error){
    alert("Sorry the data is not available now.");
});

  

