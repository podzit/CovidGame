
// Différentes parties HTML
export const DOM_jeu = document.getElementById("jeu");
export const DOM_poche = document.getElementById("poche");
export const DOM_form = document.getElementById("form");
export const DOM_gameover = document.getElementById("gameover");
export const DOM_pop1 = document.getElementById("pop1");
export const DOM_propcarte = document.getElementById("propcarte");
export const DOM_aide = document.getElementById("aide");
export const DOM_scorespop = document.getElementById("scorespop");

// Fonction suppression affichage du jeu
export function no_jeu() {
  DOM_jeu.style.display ="none";
  DOM_poche.style.display ="none";
};

// Sons
export const DOM_audiowin = document.getElementById("audiowin");
export const DOM_audioloose = document.getElementById("audioloose");
export const DOM_audiocarte = document.getElementById("audiocarte");

// Mises
export const DOM_mise1 = document.getElementById("mise1");
export const DOM_mise2 = document.getElementById("mise2");
export const DOM_mise5 = document.getElementById("mise5");
export const DOM_mise10 = document.getElementById("mise10");
export const DOM_stop = document.getElementById("stop");

// Affichage ou non des boutons de mise
export function mises(display) {
    DOM_mise1.style.display = display;
    DOM_mise2.style.display = display;
    DOM_mise5.style.display = display;
    DOM_mise10.style.display = display;
    DOM_stop.style.display = display;
  }

// Affichage des boutons de mise en fonction de la poche
export function miselimit(limit) {
  if (limit == 1) {
    DOM_mise1.style.display = "inline-block";
    DOM_mise2.style.display = "none";
    DOM_mise5.style.display = "none";
    DOM_mise10.style.display = "none";
  }
  else if (limit == 2) {
    DOM_mise1.style.display = "inline-block";
    DOM_mise2.style.display = "inline-block";
    DOM_mise5.style.display = "none";
    DOM_mise10.style.display = "none";
  }
  else if (limit == 5) {
    DOM_mise1.style.display = "inline-block";
    DOM_mise2.style.display = "inline-block";
    DOM_mise5.style.display = "inline-block";
    DOM_mise10.style.display = "none";
  }
  else if (limit == 10) {
    mises("inline-block");
  };
}

// Couleur des boutons
function buttoncolor(over,out) {
  DOM_mise1.addEventListener("mouseover", function() {
    DOM_mise1.style.backgroundColor = over;
  });
  DOM_mise1.addEventListener("mouseout", function() {
    DOM_mise1.style.backgroundColor = out;
  });
  DOM_mise2.addEventListener("mouseover", function() {
    DOM_mise2.style.backgroundColor = over;
  });
  DOM_mise2.addEventListener("mouseout", function() {
    DOM_mise2.style.backgroundColor = out;
  });
  DOM_mise5.addEventListener("mouseover", function() {
    DOM_mise5.style.backgroundColor = over;
  });
  DOM_mise5.addEventListener("mouseout", function() {
    DOM_mise5.style.backgroundColor = out;
  });
  DOM_mise10.addEventListener("mouseover", function() {
    DOM_mise10.style.backgroundColor = over;
  });
  DOM_mise10.addEventListener("mouseout", function() {
    DOM_mise10.style.backgroundColor = out;
  });
};

export function boutons(pointerevents,color) {
  DOM_mise1.style.pointerEvents = pointerevents;
  DOM_mise2.style.pointerEvents = pointerevents;
  DOM_mise5.style.pointerEvents = pointerevents;
  DOM_mise10.style.pointerEvents = pointerevents;
  DOM_mise1.style.backgroundColor = color;
  DOM_mise2.style.backgroundColor = color;
  DOM_mise5.style.backgroundColor = color;
  DOM_mise10.style.backgroundColor = color;
  if (color == '#4CAF50') {
    buttoncolor("#008CBA", "#4CAF50");
  };
}

export function afficheCarte({ categorie, groupe, force, nom, perso, info, effet }, DOM_Joueur) {

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

// Effet retournement des cartes
export function flipCartes() {
  document.getElementById('flip-card').classList.toggle('do-flip');
  document.getElementById('flip-card2').classList.toggle('do-flip2');
};
