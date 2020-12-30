import {deck} from './constants/deck.js';
import {phrase} from './constants/phrase.js';

var scoreWinToi = 0;
var scoreWinEnnemi = 0;

// Appel de la fonction jeu lors du clic sur le bouton
document.getElementById("bouton").onclick = function() {jeu()};

// Déclaration de la fonction jeu
function jeu() {
  // Tirage des cartes
  let carteToi = deck[Math.floor(Math.random() * deck.length)]
  let carteEnnemi = deck[Math.floor(Math.random() * deck.length)];

  // Affichage des cartes
  document.getElementById("img-toi").innerHTML = `<img src="assets/img/${carteToi.categorie}/${carteToi.nom}.jpeg" />`;
  document.getElementById("img-ennemi").innerHTML = `<img src="assets/img/${carteEnnemi.categorie}/${carteEnnemi.nom}.jpeg" />`;

  let gagne = phrase.motVainqueur[Math.floor(Math.random() * phrase.motVainqueur.length)];
  let perd = phrase.motPerdant[Math.floor(Math.random() * phrase.motPerdant.length)];
  let action = phrase.verbe[Math.floor(Math.random() * phrase.verbe.length)];

  // Son
  var audio = document.getElementById("audio");
  const audiowin = `<audio autoplay><source src="assets/audiowin.ogg" type="audio/ogg"></audio>`;
  const audioloose = `<audio autoplay><source src="assets/audioloose.ogg" type="audio/ogg"></audio>`;

  // Affichage du résultats en fonction des cas
  if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'complotistes') {
    var result = `${gagne} ${carteToi.perso} ${action} ${carteEnnemi.perso}`;
    audio.innerHTML = `${audiowin}`;
    scoreWinToi ++;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'comploteurs') {
    result = `${gagne} Entre comploteurs, ${carteToi.perso} ${action} ${carteEnnemi.perso}`;
    scoreWinToi ++;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'comploteurs'){
    result = `${gagne} Tu as vaincu l'élite pédophile satanique avec ${carteToi.perso}`;
    audio.innerHTML = `${audiowin}`;
    scoreWinToi ++;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'complotistes'){
    result = `${gagne} ${carteEnnemi.perso} a succombé ! Tu es le survivant de ta guilde`;
    scoreWinToi ++;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'comploteurs'){
    result = `${perd} Le complot mondial t'${action} en utilisant ${carteEnnemi.perso}`;
    audio.innerHTML = `${audioloose}`;
    scoreWinEnnemi ++;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'comploteurs'){
    result = `${perd} ${carteEnnemi.perso} t'${action}! Trop de complot tue le complot`;
    scoreWinEnnemi ++;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'complotistes'){
    result = `${perd} ${carteEnnemi.perso} ${action} ${carteToi.perso}`;
    audio.innerHTML = `${audioloose}`;
    scoreWinEnnemi ++;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'complotistes'){
    result = `${perd} Entre complotistes, ${carteEnnemi.perso} ${action} ${carteToi.perso}`;
    scoreWinEnnemi ++;
  }
  else{
    result = `Match nul: Personne n'est sorti vivant de ce duel`;
  }

  // Affichage des résultats
  document.getElementById("resultat").innerHTML = `${result}`;

  // Affichage des scores
  document.getElementById("scoreWinToi").innerHTML = `Score: ${scoreWinToi}`;
  document.getElementById("scoreWinEnnemi").innerHTML = `Score: ${scoreWinEnnemi}`;
}
