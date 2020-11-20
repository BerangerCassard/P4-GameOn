function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//  #1 TODO : close modal

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
};

// Close modal event
modalCross[0].addEventListener ("click", closeModal);


// #2 Implement form entries

// form must be valide when user click on "submit"
const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');

const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;


form.addEventListener('submit', (e) => {
  e.preventDefault();
})

function validate () {
  if (firstName.value === '' && firstName.lenght > 1) {
    alert ("Veuillez remplir le champ Prénom");
    return false;
  } 
  else if (lastName.value === '' && lastName.lenght > 1) { 
    alert ("Veuillez remplir le champ Nom");
    return false;
  } 
  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
    alert ("Veuillez remplir le champ email");
    return false;
  }
  // else if (!birthDate.value.match(dateFormat)) { 
  //   alert ("Veuillez remplir votre date d'anniversaire");
  //   return false;
  // }
  else if (!quantityTournament.value.match(numbers)) { 
    alert ("Veuillez indiquer le nombre de tournois");
    return false;
  }
  else if (!quantityTournament.value.match(numbers)) { 
    alert ("Veuillez indiquer le nombre de tournois");
    return false;
  }
  else if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    alert ("Veuillez choisir une ville");
    return false;
  }

}