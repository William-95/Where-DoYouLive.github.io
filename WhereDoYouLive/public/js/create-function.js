//crea div
export function createBox(element, className, box, item, result, fixCard, fixSummary, fixScore) {
  element = document.createElement("div");
  element.classList.add(className);
  const parent = document.getElementById(box);
  parent.style.display = 'flex';
  parent.appendChild(element);

  if (fixCard) {
    element.style.border = '3px solid' + item.color;

    element.innerHTML =
      '<br>' +
      '<h3>' + item.name + '</h3>' +
      '<progress id="progress" max="10" value="' + item.score_out_of_10 + '"></progress>' +
      '<h4>' + item.score_out_of_10.toFixed(1) + '/10</h4>'
  } else if (fixSummary) {
    element.innerHTML =
      '' + result.summary + ''
  } else if (fixScore) {
    element.innerHTML =
      '<b>Teleport City Score: ' + result.teleport_city_score.toFixed(2) + '%</b>'
  }
}



//pulizia
export function clearSearchBar() {
  const inpRicerca = document.getElementById('ricerca');
  inpRicerca.value = "";
  const noCity = document.querySelector('.nocity');
  noCity.remove()
}


export function removeDiv() {
  document.getElementById("ris").innerHTML = "";
  document.getElementById("ris2").innerHTML = "";
  document.getElementById("ris3").innerHTML = "";
}
