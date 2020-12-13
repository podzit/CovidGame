# CovidGame

Jeu de hasard en ligne pour rire de l'affrontement entre "complotistes" et "moutons".

## Tirage des catégories

Le tirage de la catégorie est aléatoire entre 1 (comploteurs) et 2 (complotistes) pour aller piocher dans les dossiers du même nom dans assets/img

## Tirage des cartes

Le tirage est aléatoire et le code construit ensuite le nom des cartes à afficher en .jpeg.

## Les cartes

Les cartes sont à faire au préalables (par exemple sur https://www.mtgcardmaker.com/) et à insérer dans le dossier assets/img/ 1 ou 2 selon la catégorie voulue

À chaque ajout de carte il faut augmenter var max2 et 3 et insérer dans la liste des if (cat == 1 && choix == 1){valeur1 = 1}; la bonne valeur en fonction du numéro de la carte.

## Personnalisation du message de résultat

Les résultats sont personnalisés en fonction de la catégorie et la valeur des 2 cartes.

## Debug

En cas de problème décommenter la ligne console.log vers la fin du main.js

## Tester

Le site est dispo en ligne sur https://covidgame.fun
