import {deck} from './constants/deck.js';
import {phrase} from './constants/phrase.js';

var replay = 0;
var win = 0;
var mise = 0;
var gain = 0;
var poche = 50;
var hiscore = 50;

const DOM_jeu = document.getElementById("jeu");
const DOM_poche = document.getElementById("poche");
const DOM_form = document.getElementById("form");
const DOM_gameover = document.getElementById("gameover");
const DOM_pop1 = document.getElementById("pop1");
DOM_form.style.display = "none";

// Mises
const DOM_mise1 = document.getElementById("mise1");
const DOM_mise2 = document.getElementById("mise2");
const DOM_mise5 = document.getElementById("mise5");
const DOM_mise10 = document.getElementById("mise10");
const DOM_stop = document.getElementById("stop");
DOM_stop.style.display = "none";

// Sons
const DOM_audiowin = document.getElementById("audiowin");
const DOM_audioloose = document.getElementById("audioloose");
const DOM_audiocarte = document.getElementById("audiocarte");

// Appuie sur un bouton
document.getElementById("mise1").onclick = function() {jeu(mise = 1)};
document.getElementById("mise2").onclick = function() {jeu(mise = 2)};
document.getElementById("mise5").onclick = function() {jeu(mise = 5)};
document.getElementById("mise10").onclick = function() {jeu(mise = 10)};
document.getElementById("popin").onclick = function() {(DOM_pop1.style.display = "block")};
document.getElementById("closepop").onclick = function() {(DOM_pop1.style.display = "none")};

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
function jeu(tour) {

  DOM_mise1.style.display = "none";
  DOM_mise2.style.display = "none";
  DOM_mise5.style.display = "none";
  DOM_mise10.style.display = "none";

  document.getElementById("poche").innerHTML = `Ta poche: ${poche}$`;

  // Son swoosh
  DOM_audiocarte.play();

  // En cas de premier tour
  if (replay == 0) {

  // Effet retournement des cartes
  document.getElementById('flip-card').classList.toggle('do-flip');
  document.getElementById('flip-card2').classList.toggle('do-flip2');

  // Tirage aléatoire des cartes
  let [carteToi, carteEnnemi] = [
    deck[Math.floor(Math.random() * deck.length)],
    deck[Math.floor(Math.random() * deck.length)]
  ];

  //pause pour retarder l'affichage des cartes
  setTimeout(() => {  
    afficheCarte(carteToi, document.getElementById("img-toi"));
    afficheCarte(carteEnnemi, document.getElementById("img-ennemi"));
  }, 700);

  let gagne = phrase.motVainqueur[Math.floor(Math.random() * phrase.motVainqueur.length)];
  let perd = phrase.motPerdant[Math.floor(Math.random() * phrase.motPerdant.length)];
  let action = phrase.verbe[Math.floor(Math.random() * phrase.verbe.length)];

  // Résultats en fonction des cas
  if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'Comploteurs' && carteEnnemi.categorie == 'Complotistes') {
    var result = `${gagne} ${carteToi.perso} ${action} ${carteEnnemi.perso}`;
    win = 1;
    gain = carteToi.force*(2*mise); 
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'Comploteurs' && carteEnnemi.categorie == 'Comploteurs') {
    result = `${gagne} Entre comploteurs, ${carteToi.perso} ${action} ${carteEnnemi.perso}`;
    win = 2;
    gain = carteToi.force*mise;;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'Complotistes' && carteEnnemi.categorie == 'Comploteurs'){
    result = `${gagne} Tu as vaincu l'élite pédophile satanique avec ${carteToi.perso}`;
    win = 1;
    gain = carteToi.force*(2*mise);
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'Complotistes' && carteEnnemi.categorie == 'Complotistes'){
    result = `${gagne} ${carteEnnemi.perso} a succombé ! Tu es le survivant de ta guilde`;
    win = 2;
    gain = carteToi.force*mise;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'Complotistes' && carteEnnemi.categorie == 'Comploteurs'){
    result = `${perd} Le complot mondial t'${action} en utilisant ${carteEnnemi.perso}`;
    win = 0;
    gain = - (carteEnnemi.force*(2*mise));
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'Comploteurs' && carteEnnemi.categorie == 'Comploteurs'){
    result = `${perd} ${carteEnnemi.perso} t'${action}! Trop de complot tue le complot`;
    win = 2;
    gain = - (carteEnnemi.force*mise);
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'Comploteurs' && carteEnnemi.categorie == 'Complotistes'){
    result = `${perd} ${carteEnnemi.perso} ${action} ${carteToi.perso}`;
    win = 0;
    gain = - (carteEnnemi.force*(2*mise));
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'Complotistes' && carteEnnemi.categorie == 'Complotistes'){
    result = `${perd} Entre complotistes, ${carteEnnemi.perso} ${action} ${carteToi.perso}`;
    win = 2;
    gain = - (carteEnnemi.force*mise);
  }
  else{
    result = `Match nul: Personne n'est sorti vivant de ce duel`;
    win = 2;
    gain = - mise;
  }

  // temporisation de l'affichage
  setTimeout(() => {  

  // Affichage des résultats
  document.getElementById("resultat").innerHTML = `${result}`;

  // Affichage des gains
  if (gain < 0){
    document.getElementById("gain").innerHTML = `Perte ${gain}$`;
  }
  else {
  document.getElementById("gain").innerHTML = `Gain ${gain}$`;
    if (hiscore < (gain + poche)){
      hiscore = gain + poche;
    }
  }
  
  poche = gain + poche;
  document.getElementById("poche").innerHTML = `Ta poche: ${poche}$`;

  // affichage bouton stop
  if (poche >= 500) {
    DOM_stop.style.display = "inline-block";
  }
  else {
    DOM_stop.style.display = "none";
  }

  // appuie sur le bouton stop
  document.getElementById("stop").onclick = function () {
    DOM_jeu.style.display = "none";
    DOM_poche.style.display ="none";
    DOM_stop.style.display = "none";
    DOM_form.style.display = "block";
    document.getElementById("score").innerHTML = `Ton meilleur score: ${hiscore}`;
    document.getElementById("record").value = `${hiscore}`;
  };

  // Son en fonction
  if (win == 0) {DOM_audioloose.play();}
  else if (win == 1) {DOM_audiowin.play ();}
  }, 710);

  // Game Over
  setTimeout (() => {
  if (poche <= 0 && poche < 2 && poche < 5 && poche < 10) {
    if (hiscore >= 500){
      DOM_jeu.style.display = "none";
      DOM_poche.style.display ="none";
      DOM_form.style.display = "block";
      document.getElementById("score").innerHTML = `Ton meilleur score: ${hiscore}`;
      document.getElementById("record").value = `${hiscore}`;
    }
    else {
      DOM_jeu.style.display = "none";
      DOM_poche.style.display ="none";
      DOM_gameover.style.display = "block";
      document.getElementById("rejouer").onclick = function () {location.reload()};
    }  
  }

  // Affichage des boutons de mise en fonction du montant de la poche
  else if (poche < 2 && poche < 5 && poche < 10) {
    DOM_mise1.style.display = "inline-block";    
    DOM_mise2.style.display = "none";
    DOM_mise5.style.display = "none";
    DOM_mise10.style.display = "none";
  }

  else if (poche >= 2 && poche < 5 && poche < 10) {
    DOM_mise1.style.display = "inline-block"; 
    DOM_mise2.style.display = "inline-block";
    DOM_mise5.style.display = "none";
    DOM_mise10.style.display = "none";
  }

  else if (poche >= 2 && poche >= 5 && poche < 10) {
    DOM_mise1.style.display = "inline-block"; 
    DOM_mise2.style.display = "inline-block";
    DOM_mise5.style.display = "inline-block";
    DOM_mise10.style.display = "none";
  }

  else if (poche >= 2 && poche >= 5 && poche >= 10) {
    DOM_mise1.style.display = "inline-block"; 
    DOM_mise2.style.display = "inline-block";
    DOM_mise5.style.display = "inline-block";
    DOM_mise10.style.display = "inline-block";
  }

  }, 1000);

  // Permet d'indiquer que ce n'est plus le premier tour
  replay ++;
  }

  // En cas de deuxième tour affichage du dos des cartes dans le flip
  else {
  setTimeout(() => {
  document.getElementById("img-toi").innerHTML = `<img src="assets/img/back.png"></img>`;
  document.getElementById("img-ennemi").innerHTML = `<img src="assets/img/back.png"></img>`;
  }, 345);
  replay = 0;
  jeu(0);
  }
}  