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
    perso: 'La société secrête des illuminatis'
  },
  {
    categorie: 'comploteurs',
    force: 6,
    nom: 11,
    perso: 'La franc-maçonnerie'
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
    perso: "L'hydroxychloroquine"
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

// Génération de la phrase
const motVainqueur = ['Wahou!','Super!','Great!','Bravo!','Formidable!','Yes!','Wouhou!','Bien joué!','Et bim!']
const motPerdant  = ['Looser!','Boooo!','Oups!','Dommage!','Raté!','Désolé!','Aïe!','Zut!','Ouch!']
const verbe = ['a buté','a trucidé','a défoncé','a explosé','a exterminé','a réduit en miette',
'a anihilé','a dézingué','a déglingué','a vitrifié','a décalqué','a démembré','a atomisé','a écartelé',
'a abattu','a écrasé','a égorgé','a anéanti','a assassiné','a étouffé','a étranglé','a étripé','a bousillé',
'a crevé','a décapité','a décimé','a démoli','a détruit','a descendu','a empoisonné','a exécuté','a exterminé',
'a fait disparaitre','fait sauter','a flingué','a foudroyé','a fusillé','a guillotiné','a lynché',
'a massacré','a occis','a pendu','a poignardé','a pourfendu','a refroidi','a saigné',
'a immolé','a supprimé']
let gagne = motVainqueur[Math.floor(Math.random() * Math.floor(motVainqueur.length))];
let perd = motPerdant[Math.floor(Math.random() * Math.floor(motPerdant.length))];
let action = verbe[Math.floor(Math.random() * Math.floor(verbe.length))];

// Son
var audio = document.getElementById("audio");
const audiowin = `<audio autoplay><source src="assets/audiowin.ogg" type="audio/ogg"></audio>`;
const audioloose = `<audio autoplay><source src="assets/audioloose.ogg" type="audio/ogg"></audio>`;


// Affichage du résultats en fonction des cas
  if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'complotistes') {
    result = `${gagne} ${carteToi.perso} ${action} ${carteEnnemi.perso}`;
    audio.innerHTML = `${audiowin}`;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'comploteurs') {
    result = `${gagne} Entre comploteurs, ${carteToi.perso} ${action} ${carteEnnemi.perso}`;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'comploteurs'){
    result = `${gagne} Tu as vaincu l'élite pédophile satanique avec ${carteToi.perso}`;
    audio.innerHTML = `${audiowin}`;
  }
  else if (carteToi.force > carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'complotistes'){
    result = `${gagne} ${carteEnnemi.perso} a succombé ! Tu es le survivant de ta guilde`;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'comploteurs'){
    result = `${perd} Le complot mondial t'${action} en utilisant ${carteEnnemi.perso}`;
    audio.innerHTML = `${audioloose}`;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'comploteurs'){
    result = `${perd} ${carteEnnemi.perso} t'${action}! Trop de complot tue le complot`;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'comploteurs' && carteEnnemi.categorie == 'complotistes'){
    result = `${perd} ${carteEnnemi.perso} ${action} ${carteToi.perso}`;
    audio.innerHTML = `${audioloose}`;
  }
  else if (carteToi.force < carteEnnemi.force && carteToi.categorie == 'complotistes' && carteEnnemi.categorie == 'complotistes'){
    result = `${perd} Entre complotistes, ${carteEnnemi.perso} ${action} ${carteToi.perso}`;
  }
  else{
    result = `Match nul: Personne n'est sorti vivant de ce duel`;
  }

// débug
//console.log(index,numcarte)

// Affichage des résultats
  
  document.getElementById("resultat").innerHTML = `${result}`;

}
