const uiObjekti = {
  ime: document.getElementById("fname"),
  prezime: document.getElementById("lname"),
  musko: document.getElementById("musko"),
  zensko: document.getElementById("zensko"),
  godine: document.getElementById("godine"),
  provjerenaOsobaElement: document.getElementById("provjerenaOsoba"),
};

// let ime = document.getElementById("fname");
// let prezime = document.getElementById("lname");
// let musko = document.getElementById("musko");
// let zensko = document.getElementById("zensko");
// let godine = document.getElementById("godine");
// let provjerenaOsobaElement = document.getElementById("provjerenaOsoba");

function provjeriOsobu(event) {
  //provjeriti je li osoba ima i ime i prezime dulje od 6 znakova
  event.preventDefault();

  if (uiObjekti.ime.value.length > 6 && uiObjekti.prezime.value.length > 6) {
    uiObjekti.provjerenaOsobaElement.innerHTML = `<p>Osoba ima i ime i prezime dulje od 6 znakova!</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML = `<p>Osoba nema i ime i prezime dulje od 6 znakova!</p>`;
  }

  if (uiObjekti.musko.checked || uiObjekti.zensko.checked) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi ste normalni!</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi ste nenormalni!</p>`;
  }

  if (
    parseInt(uiObjekti.godine.value) === NaN ||
    uiObjekti.godine.value === ""
  ) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `Unesite broj godina da bismo vam odgovorili!`;
  } else if (parseInt(uiObjekti.godine.value) % 2 && uiObjekti.godine.value) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `Imate neparan broj godina!`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML += `Imate paran broj godina!`;
  }
}
