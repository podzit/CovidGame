# CovidGame

Jeu de hasard en ligne pour rire de l'affrontement entre "complotistes" et "comploteurs".


## Les cartes

Les cartes sont à faire au préalables (par exemple sur https://www.mtgcardmaker.com/) et à insérer dans le dossier assets/img/comploteurs ou complotistes selon la catégorie voulue

À chaque ajout de carte il faut éditer main.js:

- Ajouter dans le deck une nouvelle entrée sous la forme 
  
  {
  
    categorie: 'comploteurs', // Dossier où est le fichier
  
    force: 2, // Niveau sur la carte
    
    nom: 2 // Nom du fichier
  
  },


## Personnalisation du message de résultat

Les résultats sont personnalisés en fonction de la catégorie et la force des 2 cartes.


## Debug

En cas de problème décommenter la ligne console.log vers la fin du main.js


## Tester

Le site est dispo en ligne sur https://covidgame.fun
