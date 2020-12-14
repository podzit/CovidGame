// Appel de la fonction jeu lors du clic sur le bouton
document.getElementById("bouton").onclick = function() {jeu()};

// Déclaration de la fonction jeu

function jeu() {

// Déclaration des cartes
const deck = [
  {
    categorie: 'comploteurs',
    force: 1,
    nom: 1, // <- la carte 1.jpeg
    perso: 'Sibeth Ndiaye' 
  },
  {
    categorie: 'comploteurs',
    force: 2,
    nom: 2,
    perso: 'Jean Castex'
  },
  {
    categorie: 'comploteurs',
    force: 2,
    nom: 3,
    perso: 'Le masque'
  },
  {
    categorie: 'comploteurs',
    force: 3,
    nom: 4,
    perso: 'Big Pharma'
  },
  {
    categorie: 'comploteurs',
    force: 3,
    nom: 5,
    perso: 'George Soros'
  },
  {
    categorie: 'comploteurs',
    force: 4,
    nom: 6,
    perso: 'La 5G'
  },
  {
    categorie: 'comploteurs',
    force: 4,
    nom: 7,
    perso: 'Bill Gates'
  },
  {
    categorie: 'comploteurs',
    force: 4,
    nom: 8,
    perso: 'BFM TV'
  },
  {
    categorie: 'comploteurs',
    force: 5,
    nom: 9,
    perso: 'Le vaccin'
  },
  {
    categorie: 'comploteurs',
    force: 5,
    nom: 10,
    perso: 'Les illuminatis'
  },
  {
    categorie: 'comploteurs',
    force: 6,
    nom: 11,
    perso: 'Les franc-maçons'
  },
  {
    categorie: 'complotistes',
    force: 1,
    nom: 1,
    perso: 'Hold Up'
  },
  {
    categorie: 'complotistes',
    force: 1,
    nom: 2,
    perso: 'CNews'
  },
  {
    categorie: 'complotistes',
    force: 2,
    nom: 3,
    perso: 'Donald Trump'
  },
  {
    categorie: 'complotistes',
    force: 2,
    nom: 4,
    perso: 'Pascal Praud'
  },
  {
    categorie: 'complotistes',
    force: 3,
    nom: 5,
    perso: 'Q'
  },
  {
    categorie: 'complotistes',
    force: 3,
    nom: 6,
    perso: 'Christian Perronne'
  },
  {
    categorie: 'complotistes',
    force: 4,
    nom: 7,
    perso: 'Ema Krusi'
  },
  {
    categorie: 'complotistes',
    force: 4,
    nom: 8,
    perso: 'Eve Engerer'
  },
  {
    categorie: 'complotistes',
    force: 4,
    nom: 9,
    perso: 'Eric Zemmour'
  },
  {
    categorie: 'complotistes',
    force: 5,
    nom: 10,
    perso: 'Didier Raoult'
  },
  {
    categorie: 'complotistes',
    force: 5,
    nom: 11,
    perso: 'Hydroxychloroquine'
  },
  {
    categorie: 'complotistes',
    force: 6,
    nom: 12,
    perso: 'Sylvano Trotta'
  },
]

// Tirage des cartes
let carteToi = deck[Math.floor(Math.random() * Math.floor(deck.length))]
let carteEnnemi = deck[Math.floor(Math.random() * Math.floor(deck.length))];

// Affichage des cartes
document.getElementById("img-toi").innerHTML = `<img src="assets/img/${carteToi.categorie}/${carteToi.nom}.jpeg" />`;
document.getElementById("img-ennemi").innerHTML = `<img src="assets/img/${carteEnnemi.categorie}/${carteEnnemi.nom}.jpeg" />`;


// Affichage du résultats en fonction des cas
  if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'complotistes') {
    result = `Tu as fais gagné le nouvel ordre mondial avec ${carteToi.perso}`;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'comploteurs') {
    result = `Wahou ! Tu as tué ton ami ${carteEnnemi.perso}`;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'comploteurs'){
    result = `Yes ! Tu as vaincu l'élite pédophile satanique avec ${carteToi.perso}`;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'complotistes'){
    result = `${carteEnnemi.perso} a succombé ! Tu es le survivant de ta guilde`;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'comploteurs'){
    result = `Looser ! Le complot mondial a eu ta peau en utilisant ${carteEnnemi.perso}`;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'comploteurs'){
    result = `Oups ${carteEnnemi.perso} t'as assassiné ! Trop de complot tue le complot`;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'complotistes'){
    result = `Looser ! Tu as perdu contre ${carteEnnemi.perso} et sa guilde de la chloroquine`;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'complotistes'){
    result = `Dommage ! Tu as été trahis par ton ami ${carteEnnemi.perso}`;
  }
  else{
    result = `Match nul: Personne n'est sorti vivant de ce duel`;
  }

// débug
//console.log(index,numcarte)

// Affichage des résultats
  
  document.getElementById("resultat").innerHTML = `${result}`;

}
