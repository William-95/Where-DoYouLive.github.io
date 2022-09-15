export function createCard( x, className ,parent, elementCard){
  x=x;
  className=x.classList.add({className} );
  parent=parent;
  elementCard=x;
  console.log('ciao');
  const x =  document.createElement("div");

    x.classList.add({className} );
   const parent = document.getElementById(x);
    parent.style.display = 'flex';
    parent.appendChild({parm});
   elementCard.style.border = '3px solid' + item.color;
  
    elementCard.innerHTML =
      '<br>' +
      '<h3>' + item.name + '</h3>' +
      '<progress id="progress" max="10" value="' + item.score_out_of_10 + '"></progress>' +
      '<h4>' + item.score_out_of_10.toFixed(1) + '/10</h4>'

 }
 
 