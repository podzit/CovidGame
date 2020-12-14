// Appel de la fonction jeu lors du clic sur le bouton
document.getElementById("bouton").onclick = function() {jeu()};

// Déclaration de la fonction jeu

function jeu() {
// Mise à zéro des variables
  var valeur1 = undefined;
  var valeur2 = undefined;
  var result = undefined;
  
//Déclaration des catégories
const categories = ['comploteurs', 'complotistes'];

// On prend un nombre au hasard compris entre 0 et la taille du array categories-1
var index = Math.floor(Math.random() * Math.floor(categories.length));
var index2 = Math.floor(Math.random() * Math.floor(categories.length));

// Nombre de cartes dans les dossier 1 et 2
const min = 1;
const max = 11 + 1;
const max2 = 12 + 1;

// Tirage cartes
  if (categories[index] == 'comploteurs'){
      var numcarte = Math.floor(Math.random() * (max - min)) + min;
      }

  if (categories[index] == 'complotistes'){
      var numcarte = Math.floor(Math.random() * (max2 - min)) + min;
      }

  if (categories[index2] == 'comploteurs'){
      var numcarte2 = Math.floor(Math.random() * (max - min)) + min;
      }

  if (categories[index2] == 'complotistes'){
      var numcarte2 = Math.floor(Math.random() * (max2 - min)) + min;
      }

// Construction nom de la carte en num.jpe
  var extension = '.jpeg';
  var sep = '/';

  var image = categories[index] + sep + numcarte + extension;
  var image2 = categories[index2] + sep + numcarte2 + extension;

  document.getElementById("img-toi").innerHTML = `<img src="assets/img/${image}" />`;
  document.getElementById("img-ennemi").innerHTML = `<img src="assets/img/${image2}" />`;

// Assignation des valeurs selon les cartes
  if (categories[index] == 'comploteurs' && numcarte == 1){valeur1 = 1};
  if ((categories[index] == 'comploteurs' && numcarte == 2)||(categories[index] == 'comploteurs' && numcarte == 3)){valeur1 = 2};
  if ((categories[index] == 'comploteurs' && numcarte == 4)||(categories[index] == 'comploteurs' && numcarte == 5)){valeur1 = 3};
  if ((categories[index] == 'comploteurs' && numcarte == 6)||(categories[index] == 'comploteurs' && numcarte == 7)||(categories[index] == 'comploteurs' && numcarte == 8)){valeur1 = 4};
  if ((categories[index] == 'comploteurs' && numcarte == 9)||(categories[index] == 'comploteurs' && numcarte == 10)){valeur1 = 5};
  if (categories[index] == 'comploteurs' && numcarte == 11){valeur1 = 6};
  if ((categories[index] == 'complotistes' && numcarte == 1)||(categories[index] == 'complotistes' && numcarte == 2)){valeur1 = 1};
  if ((categories[index] == 'complotistes' && numcarte == 3)||(categories[index] == 'complotistes' && numcarte == 4)){valeur1 = 2};
  if ((categories[index] == 'complotistes' && numcarte == 5)||(categories[index] == 'complotistes' && numcarte == 6)){valeur1 = 3};
  if ((categories[index] == 'complotistes' && numcarte == 7)||(categories[index] == 'complotistes' && numcarte == 8)||(categories[index] == 'complotistes' && numcarte == 9)){valeur1 = 4};
  if ((categories[index] == 'complotistes' && numcarte == 10)||(categories[index] == 'complotistes' && numcarte == 11)){valeur1 = 5};
  if (categories[index] == 'complotistes' && numcarte == 12){valeur1 = 6};

  if (categories[index2] == 'comploteurs' && numcarte2 == 1){valeur2 = 1};
  if ((categories[index2] == 'comploteurs' && numcarte2 == 2)||(categories[index2] == 'comploteurs' && numcarte2 == 3)){valeur2 = 2};
  if ((categories[index2] == 'comploteurs' && numcarte2 == 4)||(categories[index2] == 'comploteurs' && numcarte2 == 5)){valeur2 = 3};
  if ((categories[index2] == 'comploteurs' && numcarte2 == 6)||(categories[index2] == 'comploteurs' && numcarte2 == 7)||(categories[index2] == 'comploteurs' && numcarte2 == 8)){valeur2 = 4};
  if ((categories[index2] == 'comploteurs' && numcarte2 == 9)||(categories[index2] == 'comploteurs' && numcarte2 == 10)){valeur2 = 5};
  if (categories[index2] == 'comploteurs' && numcarte2 == 11){valeur2 = 6};
  if ((categories[index2] == 'complotistes' && numcarte2 == 1)||(categories[index2] == 'complotistes' && numcarte2 == 2)){valeur2 = 1};
  if ((categories[index2] == 'complotistes' && numcarte2 == 3)||(categories[index2] == 'complotistes' && numcarte2 == 4)){valeur2 = 2};
  if ((categories[index2] == 'complotistes' && numcarte2 == 5)||(categories[index2] == 'complotistes' && numcarte2 == 6)){valeur2 = 3};
  if ((categories[index2] == 'complotistes' && numcarte2 == 7)||(categories[index2] == 'complotistes' && numcarte2 == 8)||(categories[index2] == 'complotistes' && numcarte2 == 9)){valeur2 = 4};
  if ((categories[index2] == 'complotistes' && numcarte2 == 10)||(categories[index2] == 'complotistes' && numcarte2 == 11)){valeur2 = 5};
  if (categories[index2] == 'complotistes' && numcarte2 == 12){valeur2 = 6};

// Affichage du résultats en fonction des cas
  if (valeur1 > valeur2 && categories[index] == 'comploteurs' && categories[index2] == 'complotistes') {
    result = "Bravo \! Tu as fais gagn\351 le nouvel ordre mondial";
  }
  else if (valeur1 > valeur2 && categories[index] == 'comploteurs' && categories[index2] == 'comploteurs') {
    result = "Wahou \! Tu as tu\351 tes alli\351s";
  }
  else if (valeur1 > valeur2 && categories[index] == 'complotistes' && categories[index2] == 'comploteurs'){
    result = "Yes \! Tu as vaincu l\'\351lite p\351dophile satanique";
  }
  else if (valeur1 > valeur2 && categories[index] == 'complotistes' && categories[index2] == 'complotistes'){
    result = "Wahou \! Tu es le survivant de ta guilde";
  }
  else if (valeur1 < valeur2 && categories[index] == 'complotistes' && categories[index2] == 'comploteurs'){
    result = "Looser \! Le complot mondial a eu ta peau";
  }
  else if (valeur1 < valeur2 && categories[index] == 'comploteurs' && categories[index2] == 'comploteurs'){
    result = "Oups \! Trop de complot tue le complot";
  }
  else if (valeur1 < valeur2 && categories[index] == 'comploteurs' && categories[index2] == 'complotistes'){
    result = "Looser \! Tu as perdu contre la guilde de la chloroquine";
  }
  else if (valeur1 < valeur2 && categories[index] == 'complotistes' && categories[index2] == 'complotistes'){
    result = "Dommage \! Tu as \351t\351 trahis par tes amis";
  }
  else{
    result = "Match nul\: Personne n\'est sorti vivant de ce duel";
  }

// débug
//console.log(index,numcarte)

// Affichage des résultats
  
  document.getElementById("resultat").innerHTML = `${result}`;

}
