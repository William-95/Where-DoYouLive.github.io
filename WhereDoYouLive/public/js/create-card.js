 export function createCard(element, className ,parent, elementCard){

  console.log(element+className+parent+elementCard);
  const element =  document.createElement("div");

    element.classList.add({className} );
   const parent = document.getElementById(parent);
    parent.style.display = 'flex';
    parent.appendChild({element});
   elementCard.style.border = '3px solid' + item.color;
  
    elementCard.innerHTML =
      '<br>' +
      '<h3>' + item.name + '</h3>' +
      '<progress id="progress" max="10" value="' + item.score_out_of_10 + '"></progress>' +
      '<h4>' + item.score_out_of_10.toFixed(1) + '/10</h4>'

 }
 