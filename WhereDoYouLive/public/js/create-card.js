 export function createCard(){
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