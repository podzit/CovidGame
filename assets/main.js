// Appel de la fonction jeu lors du clic sur le bouton
document.getElementById("bouton").onclick = function() {jeu()};

// Déclaration de la fonction jeu

function jeu() {

// Déclaration des cartes
const deck = [
  {
    categorie: 'comploteurs',
    force: 1,
    nom: 1 // <- la carte 1.jpeg
  },
  {
    categorie: 'comploteurs',
    force: 2,
    nom: 2
  },
  {
    categorie: 'comploteurs',
    force: 2,
    nom: 3
  },
  {
    categorie: 'comploteurs',
    force: 3,
    nom: 4
  },
  {
    categorie: 'comploteurs',
    force: 3,
    nom: 5
  },
  {
    categorie: 'comploteurs',
    force: 4,
    nom: 6
  },
  {
    categorie: 'comploteurs',
    force: 4,
    nom: 7
  },
  {
    categorie: 'comploteurs',
    force: 4,
    nom: 8
  },
  {
    categorie: 'comploteurs',
    force: 5,
    nom: 9
  },
  {
    categorie: 'comploteurs',
    force: 5,
    nom: 10
  },
  {
    categorie: 'comploteurs',
    force: 6,
    nom: 11
  },
  {
    categorie: 'complotistes',
    force: 1,
    nom: 1
  },
  {
    categorie: 'complotistes',
    force: 1,
    nom: 2
  },
  {
    categorie: 'complotistes',
    force: 2,
    nom: 3
  },
  {
    categorie: 'complotistes',
    force: 2,
    nom: 4
  },
  {
    categorie: 'complotistes',
    force: 3,
    nom: 5
  },
  {
    categorie: 'complotistes',
    force: 3,
    nom: 6
  },
  {
    categorie: 'complotistes',
    force: 4,
    nom: 7
  },
  {
    categorie: 'complotistes',
    force: 4,
    nom: 8
  },
  {
    categorie: 'complotistes',
    force: 4,
    nom: 9
  },
  {
    categorie: 'complotistes',
    force: 5,
    nom: 10
  },
  {
    categorie: 'complotistes',
    force: 5,
    nom: 11
  },
  {
    categorie: 'complotistes',
    force: 6,
    nom: 12
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
    result = "Bravo \! Tu as fais gagn\351 le nouvel ordre mondial";
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'comploteurs') {
    result = "Wahou \! Tu as tu\351 tes alli\351s";
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'comploteurs'){
    result = "Yes \! Tu as vaincu l\'\351lite p\351dophile satanique";
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'complotistes'){
    result = "Wahou \! Tu es le survivant de ta guilde";
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'comploteurs'){
    result = "Looser \! Le complot mondial a eu ta peau";
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'comploteurs'){
    result = "Oups \! Trop de complot tue le complot";
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'complotistes'){
    result = "Looser \! Tu as perdu contre la guilde de la chloroquine";
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'complotistes'){
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
