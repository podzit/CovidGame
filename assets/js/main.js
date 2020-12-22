var scoreWinToi = 0;
var scoreWinEnnemi = 0;

// Appel de la fonction jeu lors du clic sur le bouton
document.getElementById("bouton").onclick = function() {jeu()};

import {deck} from './data.js';

// Déclaration de la fonction jeu
function jeu() {

// Tirage des cartes
let carteToi = deck[Math.floor(Math.random() * Math.floor(deck.length))]
let carteEnnemi = deck[Math.floor(Math.random() * Math.floor(deck.length))];

// Affichage des cartes
document.getElementById("img-toi").innerHTML = `<img src="assets/img/${carteToi.categorie}/${carteToi.nom}.jpeg" />`;
document.getElementById("img-ennemi").innerHTML = `<img src="assets/img/${carteEnnemi.categorie}/${carteEnnemi.nom}.jpeg" />`;

// Génération de la phrase
const motVainqueur = ['Wahou!','Super!','Great!','Bravo!','Formidable!','Yes!','Wouhou!','Bien joué!','Et bim!']
const motPerdant  = ['Looser!','Boooo!','Oups!','Dommage!','Raté!','Désolé!','Aïe!','Zut!','Ouch!']
const verbe = ['a buté','a trucidé','a défoncé','a explosé','a exterminé','a réduit en miette',
'a anihilé','a dézingué','a déglingué','a vitrifié','a décalqué','a démembré','a atomisé','a écartelé',
'a abattu','a écrasé','a égorgé','a anéanti','a assassiné','a étouffé','a étranglé','a étripé','a bousillé',
'a crevé','a décapité','a décimé','a démoli','a détruit','a descendu','a empoisonné','a exécuté','a exterminé',
'a fait disparaitre','fait sauter','a flingué','a foudroyé','a fusillé','a guillotiné','a lynché',
'a massacré','a occis','a pendu','a poignardé','a pourfendu','a refroidi','a saigné',
'a immolé','a supprimé','a électrocuté']
let gagne = motVainqueur[Math.floor(Math.random() * Math.floor(motVainqueur.length))];
let perd = motPerdant[Math.floor(Math.random() * Math.floor(motPerdant.length))];
let action = verbe[Math.floor(Math.random() * Math.floor(verbe.length))];

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

// débug
//console.log(carteToi.nom)

// Affichage des résultats
  
  document.getElementById("resultat").innerHTML = `${result}`;

  // Affichage des scores
document.getElementById("scoreWinToi").innerHTML = `Score: ${scoreWinToi}`;
document.getElementById("scoreWinEnnemi").innerHTML = `Score: ${scoreWinEnnemi}`;

}
