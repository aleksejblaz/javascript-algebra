function napuniBody() {
  document.body.innerHTML += "<hr><p>Dobar dan svima!</p>";
}

let mojaDugaRecenica = `prvi-red-1 prvi-red-2 \n drugi-red \n treci-red`;
console.log(mojaDugaRecenica);

console.log("-------------");

let z = 5;
z += 8; //isto što i "z = z + 8;"
console.log(z);

console.log("-------------");

//Funkcija za zahvalu posle submit-a kontakt forme.
function pozdravi(e) {
  //blokiramo default-no ponašanje
  e.preventDefault();
  //dohvaćamo ime
  let ime = document.getElementById("fname").value;
  //dohvaćamo email
  let email = document.getElementById("email").value;
  //<pre> smo koristili kako bi napravili praznine i zatim videli kako trim funkcionise. <pre> nece raditi ako u input ne napravis razmak pre i posle imena. Tu nastupa trim koji brise razmake odnosno praznine.
  document.getElementById(
    "pozdrav"
  ).innerHTML = `Pozdrav <pre>${ime.trim()}</pre>. Hvala ti na upitu. Odgovorit ćemo ti uskoro na email ${email}.`;
}

//Funkcija za zamenu reci
function zameni(e, nacin) {
  e.preventDefault();
  let replacedString;
  let originalnaRecenica = document.getElementById("originalnaRecenica").value;
  let searchTerm = document.getElementById("searchTerm").value;
  let replaceTerm = document.getElementById("replaceTerm").value;

  if (nacin === "peske") {
    let indexStart = originalnaRecenica.indexOf(searchTerm);
    replacedString =
      originalnaRecenica.substring(0, indexStart) +
      replaceTerm +
      originalnaRecenica.substring(indexStart + searchTerm.length);
  } else {
    replacedString = originalnaRecenica.replace(searchTerm, replaceTerm);
  }
  document.getElementById("zamenjen").innerHTML = replacedString;
}
