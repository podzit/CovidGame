import {deck} from './constants/deck.js';
import {phrase} from './constants/phrase.js';

var scoreWinToi = 0;
var scoreWinEnnemi = 0;

// Appel de la fonction jeu lors du clic sur le bouton
document.getElementById("bouton").onclick = function() {jeu()};

let afficheCarte = ({ categorie, groupe, force, nom, perso, info, effet }, DOM_Joueur) => {

  // On efface l'ancienne carte contenue dans DOM_Joueur
  DOM_Joueur.innerHTML = "";

  // On fait une copie du noeud DOM du modèle de la carte
  const DOM_Carte = document.getElementById("carte").cloneNode(true);
  DOM_Carte.id = `carte-${DOM_Joueur.id}`;
  DOM_Carte.style.display = "block"; // change le style pour que le html devienne visible (display: none; dans css)

  // On peuple les données de la carte dans le html
  DOM_Carte.querySelector('.perso').innerHTML = perso;
  DOM_Carte.querySelector('.force').innerHTML = force;
  DOM_Carte.querySelector('.image').style.backgroundImage = `url('assets/img/carte/${nom}.jpeg')`;
  DOM_Carte.querySelector('.bandeau').innerHTML = `${categorie} / ${groupe}`;
  DOM_Carte.querySelector('.info').innerHTML = info;
  DOM_Carte.querySelector('.effet').innerHTML = effet;

  // Ajoute la classe de force pour le mettre dans la couleur du niveau de force
  DOM_Carte.querySelector('.force').classList.add(`force-${force}`);

  // On rempli le noeud html du joueur par la carte nouvellement créée
  DOM_Joueur.appendChild(DOM_Carte);
}

// Déclaration de la fonction jeu
function jeu() {

  // Effet retournement des cartes
  document.getElementById('flip-card').classList.toggle('do-flip');
  document.getElementById('flip-card2').classList.toggle('do-flip2');

  // Tirage aléatoire des cartes
  let [carteToi, carteEnnemi] = [
    deck[Math.floor(Math.random() * deck.length)],
    deck[Math.floor(Math.random() * deck.length)]
  ];

  afficheCarte(carteToi, document.getElementById("img-toi"));
  afficheCarte(carteEnnemi, document.getElementById("img-ennemi"));

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

  document.getElementById("bouton").innerHTML = `REJOUER`;

}
