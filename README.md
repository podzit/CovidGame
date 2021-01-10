# CovidGame

Jeu de hasard en ligne pour rire de l'affrontement entre "complotistes" et "comploteurs".


## Les cartes

Les cartes sont créées en fonction du contenu de /assets/constants/deck.js

Pour ajouter une carte il faut éditer deck.js:

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
- Puis ajouter une image dans /assets/img/imgcarte avec l'extension jpeg et le nom correspondant à au champ "nom" dans deck.js (dimensions recommandées 329 x 234px)

## Personnalisation du message de résultat

Les résultats sont personnalisés en fonction de la catégorie et la force des 2 cartes.

Les phrases sont personnalisables dans /assets/constants/phrase.js

## Règles

Le joueur part avec 50$ en poche et dois miser.
Il a le choix entre 1,2,5 ou 10$ de mise.
Si la force de la carte du joueur dépasse la force de la carte ennemie, le joueur gagne.

Les gains et pertes sont en fonction de plusieurs cas:
- Même catégorie (exemple comploteur vs comploteur) = mise x force de la carte vainqueure
- Catégorie différente (exemple complotiste vs comploteur) = Double de la mise x force de la carte vainqueure
- match nul = perte de la mise

Si la poche atteint minimum 500$, à la fin de la partie, le joueur peut enregistrer son pseudo et son score pour apparaitre dans le tableau "high score" (page `scores.php`).
Le tableau n'affiche que les 10 meilleurs scores.

## Tester

Le site est dispo en ligne sur https://covidgame.fun
