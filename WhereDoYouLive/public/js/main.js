import  { createBox,clearSearchBar,removeDiv } from './create-function.js'


const inpRicerca = document.getElementById('ricerca');
const searchBar = document.querySelector('.question');


//eventRicerca

searchBar.addEventListener('submit', (e) => {
  e.preventDefault();
  getCity(inpRicerca);
});


inpRicerca.addEventListener('click', (e) => {
  clearSearchBar();
});






//ricerca città

function getCity(inpRicerca) {
  if (inpRicerca == "") return;
  removeDiv();
  var SearchValue = inpRicerca.value;
  var searchValueFont = SearchValue.replace(/ /g, "-").toLowerCase();
  var url = 'https://api.teleport.org/api/urban_areas/slug:' + searchValueFont + '/scores/'
   
  
  fetch(url)
      .then(response => response.json())
       
        
      .then(result => 
 
            //card
          result.categories.forEach((item) => {
            createBox('card', 'card','ris',item,'','fixCard')
                
            },

            //summary
            createBox('summary','summary', 'ris2','',result,'','fixSummary') ,

            //score
            createBox('score','score', 'ris3','',result,'','','fixScore')
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
             console.log('Errore: '+err.message);
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



 
  //catchErrorDocument
window.onerror = function(msg, url, linenumber) {
  console.log('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
  return true;
}