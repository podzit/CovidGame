# CovidGame

Jeu de hasard en ligne pour rire de l'affrontement entre "complotistes" et "comploteurs".


## Les cartes

Les cartes sont créées en fonction du contenu de /assets/constants/deck.js

pour ajouter une carte il faut éditer deck.js:

- Ajouter dans le deck une nouvelle entrée sous la forme 
```  
  {
  
    categorie: 'Comploteurs',
    
    groupe: 'Nom du groupe',
  
    force: 2, // Niveau sur la carte
    
    nom: 'nom du fichier image',
    
    perso: 'nom du personnage',
    
    info: 'Info du perso',
    
    effet: 'effet du perso'
  
  },
```
- Puis ajouter une image dans /assets/img/imgcarte avec l'extension jpeg et le nom correspondant à l'item "nom" dans deck.js (dimensions recommandées 342x232px) 

## Personnalisation du message de résultat

Les résultats sont personnalisés en fonction de la catégorie et la force des 2 cartes.

Les phrases sont personnalisables dans /assets/constants/phrase.js

## Debug

En cas de problème décommenter la ligne console.log vers la fin du main.js


## Tester

Le site est dispo en ligne sur https://covidgame.fun
