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
  const affcarteToi = `
  <table class="imagecarte">
    <tr class="imagecarte">
      <td class="imagecarte">
        <table class="carte">
          <tr class="content">
            <tr class="top">
              <td class="top"></td>
            </tr>
            <tr class="bandeau">
              <td class="nom">${carteToi.perso}</td>
              <td class="force">Force ${carteToi.force}</td>
            </tr>
            <tr class="body">
              <td class="image" colspan="2" style="background-image:url(assets/img/carte/${carteToi.nom}.jpeg)"></td>
            </tr>
            <tr class="bandeau2">
              <td class="cat" colspan="2">${carteToi.categorie} / ${carteToi.groupe}</td>
            </tr>
            <tr class="info">
              <td class="info" colspan="2">${carteToi.info}<br/><br/>${carteToi.effet}</td>
            </tr>
            <tr class="bottom">
              <td class="bottom"></td>
            </tr>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;

  const affcarteEnnemi = `
  <table class="imagecarte">
    <tr class="imagecarte">
      <td class="imagecarte">
        <table class="carte">
          <tr class="content">
            <tr class="top">
              <td class="top"></td>
            </tr>
            <tr class="bandeau">
              <td class="nom">${carteEnnemi.perso}</td>
              <td class="force">Force ${carteEnnemi.force}</td>
            </tr>
            <tr class="body">
              <td class="image" colspan="2" style="background-image:url(assets/img/carte/${carteEnnemi.nom}.jpeg)"></td>
            </tr>
            <tr class="bandeau2">
              <td class="cat" colspan="2">${carteEnnemi.categorie} / ${carteEnnemi.groupe}</td>
            </tr>
            <tr class="info">
              <td class="info" colspan="2">${carteEnnemi.info}<br/><br/>${carteEnnemi.effet}</td>
            </tr>
            <tr class="bottom">
              <td class="bottom"></td>
            </tr>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;

  document.getElementById("img-toi").innerHTML = `${affcarteToi}`;
  document.getElementById("img-ennemi").innerHTML = `${affcarteEnnemi}`;

  let gagne = phrase.motVainqueur[Math.floor(Math.random() * phrase.motVainqueur.length)];
  let perd = phrase.motPerdant[Math.floor(Math.random() * phrase.motPerdant.length)];
  let action = phrase.verbe[Math.floor(Math.random() * phrase.verbe.length)];

  // Son
  var audio = document.getElementById("audio");
  const audiowin = `<audio autoplay><source src="assets/audiowin.ogg" type="audio/ogg"></audio>`;
  const audioloose = `<audio autoplay><source src="assets/audioloose.ogg" type="audio/ogg"></audio>`;

  // Affichage du résultats en fonction des cas
  if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'Comploteurs' && carteEnnemi.categorie == 'Complotistes') {
    var result = `${gagne} ${carteToi.perso} ${action} ${carteEnnemi.perso}`;
    audio.innerHTML = `${audiowin}`;
    scoreWinToi ++;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'Comploteurs' && carteEnnemi.categorie == 'Comploteurs') {
    result = `${gagne} Entre comploteurs, ${carteToi.perso} ${action} ${carteEnnemi.perso}`;
    scoreWinToi ++;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'Complotistes' && carteEnnemi.categorie == 'Comploteurs'){
    result = `${gagne} Tu as vaincu l'élite pédophile satanique avec ${carteToi.perso}`;
    audio.innerHTML = `${audiowin}`;
    scoreWinToi ++;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'Complotistes' && carteEnnemi.categorie == 'Complotistes'){
    result = `${gagne} ${carteEnnemi.perso} a succombé ! Tu es le survivant de ta guilde`;
    scoreWinToi ++;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'Complotistes' && carteEnnemi.categorie == 'Comploteurs'){
    result = `${perd} Le complot mondial t'${action} en utilisant ${carteEnnemi.perso}`;
    audio.innerHTML = `${audioloose}`;
    scoreWinEnnemi ++;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'Comploteurs' && carteEnnemi.categorie == 'Comploteurs'){
    result = `${perd} ${carteEnnemi.perso} t'${action}! Trop de complot tue le complot`;
    scoreWinEnnemi ++;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'Comploteurs' && carteEnnemi.categorie == 'Complotistes'){
    result = `${perd} ${carteEnnemi.perso} ${action} ${carteToi.perso}`;
    audio.innerHTML = `${audioloose}`;
    scoreWinEnnemi ++;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'Complotistes' && carteEnnemi.categorie == 'Complotistes'){
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
