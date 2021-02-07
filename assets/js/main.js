import { deck } from './constants/deck.js';
import { phrase, over } from './constants/phrase.js';
import { miselimit, mises, boutons, afficheCarte, no_jeu, flipCartes } from './constants/affichage.js';
import { DOM_audiowin, DOM_audioloose, DOM_audiocarte, DOM_aide, DOM_form, DOM_gameover, DOM_pop1, DOM_propcarte, DOM_scorespop, DOM_stop, DOM_mise1, DOM_mise2, DOM_mise5, DOM_mise10 } from './constants/affichage.js'; 

var win = 0;
var mise = 0;
var gain = 0;
var poche = 50;
var hiscore = 50;

DOM_form.style.display = "none";
DOM_propcarte.style.display = "none";
DOM_stop.style.display = "none";

// Affichage du formulaire record
function record() {
  DOM_form.style.display = "block";
  document.getElementById("score").innerHTML = `Ton meilleur score: ${hiscore}`;
  document.getElementById("record").value = `${hiscore}`;
};

// Appui sur les mises
DOM_mise1.onclick = function () { jeu(mise = 1); };
DOM_mise2.onclick = function () { jeu(mise = 2); };
DOM_mise5.onclick = function () { jeu(mise = 5); };
DOM_mise10.onclick = function () { jeu(mise = 10); };

// Appui sur un bouton du footer
document.getElementById("popin").onclick = function() {
  DOM_pop1.style.display = "block"
};
document.getElementById("closepop").onclick = function() {
  DOM_pop1.style.display = "none"
};
document.getElementById("buttonscores").onclick = function() {
  DOM_scorespop.style.display = "block"
};
document.getElementById("closescores").onclick = function() {
  DOM_scorespop.style.display = "none"
};
document.getElementById("buttonpropcarte").onclick = function() {
  DOM_propcarte.style.display = "block";
  no_jeu();
  mises("none");
  DOM_stop.style.display = "none";
  DOM_gameover.style.display = "none";
  document.getElementById("buttonaide").onclick = function(){
    DOM_aide.style.display = "block"
  };
  document.getElementById("closeaide").onclick = function(){
    DOM_aide.style.display = "none"
  };
};

document.getElementById("buttontitre").onclick = function(){window.location = "index.php";}

// Déclaration de la fonction jeu
function jeu(tour) {
  
  document.getElementById("poche").innerHTML = `Ta poche: ${poche}$`;
  boutons("none","grey");
  document.getElementById("vs").style.display = "none";

  // Son swoosh
  DOM_audiocarte.play();

  // En cas de premier tour
  if (tour == 1) {

    flipCartes();

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
    let fin = over.moquerie[Math.floor(Math.random() * over.moquerie.length)];

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
    };

  // temporisation de l'affichage
    setTimeout(() => {  

  // réactivation des boutons
      boutons("auto","#4CAF50");

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
      };
  
      poche = gain + poche;
      document.getElementById("poche").innerHTML = `Ta poche: ${poche}$`;
      
      jQuery('#result-popup').slideDown();
      jQuery('#result-popup').fadeOut(5000);

  // appuie sur le bouton stop
      document.getElementById("stop").onclick = function () {
        mises("none");
        no_jeu();
        record()
      };

  // Son en fonction
      if (win == 0) {DOM_audioloose.play();}
      else if (win == 1) {DOM_audiowin.play ();}
    }, 710);

  // Game Over
    setTimeout (() => {
      if (poche <= 0 && poche < 2 && poche < 5 && poche < 10) {
        mises("none");
        setTimeout(() => {
          no_jeu();
          if (hiscore >= 500){
            record();
          }
          else {
            DOM_gameover.style.display = "block";
            document.getElementById("phraseover").innerHTML = `${fin}`;
            document.getElementById("rejouer").onclick = function () {location.reload()};
          };
        }, 500);  
      }

  // Affichage des boutons de mise en fonction du montant de la poche
      else if (poche < 2 && poche < 5 && poche < 10) {
        miselimit(1);
      }

      else if (poche >= 2 && poche < 5 && poche < 10) {
        miselimit(2);
      }

      else if (poche >= 2 && poche >= 5 && poche < 10) {
        miselimit(5);
      }

      else if (poche >= 2 && poche >= 5 && poche >= 10) {
        miselimit(10);
      };

  // affichage bouton stop
      if (poche >= 500) {
        DOM_stop.style.display = "inline-block";
      }
      else {
        DOM_stop.style.display = "none";
      };

    }, 1000);

  // Permet d'indiquer que ce n'est plus le premier tour
  tour = 2;
  }

  // En cas de deuxième tour affichage du dos des cartes dans le flip
  else {
    setTimeout(() => {
    document.getElementById("img-toi").innerHTML = `<img src="assets/img/back.png"></img>`;
    document.getElementById("img-ennemi").innerHTML = `<img src="assets/img/back.png"></img>`;
    }, 345);
    jeu(1);
  };
};