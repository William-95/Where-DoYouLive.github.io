export function createCard(item,element, className, box,fixCard){

  console.log('ciao');

   element =  document.createElement("div");
      element.classList.add( className );
   const parent=document.getElementById( box );
    parent.style.display = 'flex';
    parent.appendChild(element);
    
  if(fixCard) {
     element.style.border = '3px solid' + item.color;
  
   element.innerHTML =
      '<br>' +
      '<h3>' + item.name + '</h3>' +
      '<progress id="progress" max="10" value="' + item.score_out_of_10 + '"></progress>' +
      '<h4>' + item.score_out_of_10.toFixed(1) + '/10</h4>'
  }
 }
 