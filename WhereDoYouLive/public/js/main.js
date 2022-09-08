import {createCard} from './create-card.js'

const btnSubmit = document.getElementById('submit');
const inpRicerca = document.getElementById('ricerca');
const searchBar = document.querySelector('.question');


//eventRicerca

searchBar.addEventListener('submit', (e) => {
  e.preventDefault();
  getCity(inpRicerca);
});


inpRicerca.addEventListener('click', (e) => {
  om();
});



//pulizia
function om() {
  const inpRicerca = document.getElementById('ricerca');
  inpRicerca.value = "";
  const noCity = document.querySelector('.nocity');
  noCity.remove()
}


function rem() {
  document.getElementById("ris").innerHTML = "";
  document.getElementById("ris2").innerHTML = "";
  document.getElementById("ris3").innerHTML = "";
}



//ricerca città

function getCity(inpRicerca) {
  if (inpRicerca == "") return;
  rem();
  var SearchValue = inpRicerca.value;
  var searchValueFont = SearchValue.replace(/ /g, "-").toLowerCase();
  var url = 'https://api.teleport.org/api/urban_areas/slug:' + searchValueFont + '/scores/'
   
  
  fetch(url)
      .then(response => response.json())
      
      .then(result =>  result.categories.forEach((item) => {

        const card = document.createElement("div");
        card.classList.add('card');
        const box = document.getElementById('ris');
        box.style.display = 'flex';
        box.appendChild(card);
        card.style.border = '3px solid' + item.color;
      
        card.innerHTML =
          '<br>' +
          '<h3>' + item.name + '</h3>' +
          '<progress id="progress" max="10" value="' + item.score_out_of_10 + '"></progress>' +
          '<h4>' + item.score_out_of_10.toFixed(1) + '/10</h4>'
    
        
           }     
         )               
       )
        //title
        .then(cityName =>{
          const title = document.getElementById('title');
          title.innerText = '' + searchValueFont.toUpperCase() + '';
            }
        )

        //Footer
        .then( footer=>{
          const footerPage = document.getElementById('footer');
               footerPage.style.position = 'relative';
        })

       
      .catch((err) =>{
        console.log('Errore: '+err.message) 
         const noCity = document.createElement("div");
               noCity.classList.add('nocity');
               noCity.innerText = 'Please enter the correct English city name.';

         const searchBar = document.querySelector('.question');
               searchBar.append(noCity);

       })
      
       

   
      .finally(() => {
        console.log('Close the connection.');
      }
      )
  
    }



 
  