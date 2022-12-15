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

let osoba = {};

function stvoriOsobu() {
  osoba.ime = uiObjekti.ime.value;
  osoba.prezime = uiObjekti.prezime.value;
  osoba.spol = uiObjekti.musko.checked
    ? "musko"
    : uiObjekti.zensko.checked
    ? "zensko"
    : "";
  osoba.godina = parseInt(uiObjekti.godine.value)
    ? parseInt(uiObjekti.godine.value)
    : undefined;
  osoba.jeliDugoImeIPrezime = function () {
    return osoba.ime.length > 6 && osoba.prezime.length > 6;
  };
  osoba.jeliParan = function () {
    return !(osoba.godina % 2);
  };
}

function provjeriOsobu(event) {
  //provjeriti je li osoba ima i ime i prezime dulje od 6 znakova
  event.preventDefault();

  stvoriOsobu();

  if (osoba.jeliDugoImeIPrezime()) {
    uiObjekti.provjerenaOsobaElement.innerHTML = `<p>Osoba ima i ime i prezime dulje od 6 znakova!</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML = `<p>Osoba nema i ime i prezime dulje od 6 znakova!</p>`;
  }

  if (osoba.spol !== "") {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi ste normalni!</p>`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML += `<p>Vi ste nenormalni!</p>`;
  }

  if (
    // parseInt(uiObjekti.godine.value) === NaN ||
    // uiObjekti.godine.value === ""
    //! je invertor koji izvrce pravilo true i false
    !osoba.godina
  ) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `Unesite broj godina da bismo vam odgovorili!`;
  } else if (osoba.jeliParan()) {
    uiObjekti.provjerenaOsobaElement.innerHTML += `Imate paran broj godina!`;
  } else {
    uiObjekti.provjerenaOsobaElement.innerHTML += `Imate neparan broj godina!`;
  }
}
