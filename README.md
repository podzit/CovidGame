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

Le joueur part avec 50$ en poche et doit miser pour lancer le jeu.
Il a le choix entre 1,2,5 ou 10$ de mise.
Si la force de la carte du joueur dépasse la force de la carte ennemie, le joueur gagne.

Les gains et pertes sont en fonction de plusieurs cas:
- Même catégorie (exemple comploteur vs comploteur) = mise x force de la carte vainqueure
- Catégorie différente (exemple complotiste vs comploteur) = Double de la mise x force de la carte vainqueure
- match nul = perte de la mise

Le jeu s'arrête quand la poche atteint 0$.
Si au cours du jeu, la poche atteint 500$ et plus, le joueur peut arrêter de jouer avec le bouton `Stop` et enregistrer son pseudo et son score pour apparaitre dans le tableau "High Score" (page `scores.php`) qui affiche les 10 meilleurs.

## Tester

Le site est dispo en ligne sur http://covidgame.free.fr (
Note: la version PHP sur le serveur n'est pas compatible avec la fonction random int() dans le fichier scoreRead.php
