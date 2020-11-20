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
const validation = document.getElementById ('checkbox1')
const errorFirst = document.getElementById ('error-first');
const errorLast = document.getElementById ('error-last');
const errorMail = document.getElementById ('error-mail');
const errorBirth = document.getElementById ('error-birth');
const errorQuantity = document.getElementById ('error-quantity');
const errorCity = document.getElementById ('error-city');
const errorValidation = document.getElementById ('error-validation');



form.addEventListener('submit', (e) => {
  e.preventDefault();
})

function validate () {
  if (firstName.value === '' || firstName.value == null && firstName.length < 2) {
    errorFirst.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.';
    setTimeout(() => {
      errorFirst.style.display = 'none';
    }, 3000)

    return false;
  } 
  else if (lastName.value === '' || lastName.value == null && lastName.length < 2) { 
    errorLast.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du Nom.';
    setTimeout(() => {
      errorLast.style.display = 'none';
    }, 3000)

    return false;
  } 
  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
    errorMail.innerText = 'Veuillez renseigner une addresse mail valide';
    setTimeout(() => {
      errorMail.style.display = 'none';
    }, 3000)

    return false;
  }
  // else if (!birthDate.value.match(dateFormat)) { 
  //   alert ("Veuillez remplir votre date d'anniversaire");
  //   return false;
  // }
  else if (!quantityTournament.value.match(numbers)) { 
    errorQuantity.innerText = 'Vous devez indiquer un nombre';
    setTimeout(() => {
      errorQuantity.style.display = 'none';
    }, 3000)    
    return false;
  }

  else if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    errorCity.innerText = 'Vous devez choisir une ville';
    setTimeout(() => {
      errorCity.style.display = 'none';
    }, 3000)          
    return false;
  }

  else if (!validation.checked) {
    errorValidation.innerText = 'Vous devez vérifier que vous acceptez les termes et conditions';
    setTimeout(() => {
      errorValidation.style.display = 'none';
    }, 3000)          
    return false;
  }

}