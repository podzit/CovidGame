# CovidGame

Jeu de hasard en ligne pour rire de l'affrontement entre "complotistes" et "moutons".

## Tirage des cartes

Le tirage est aléatoire (random et random2) et le code construit ensuite le nom des cartes à afficher en .jpeg.

## Les cartes

Les cartes sont à faire au préalables (par exemple sur https://www.mtgcardmaker.com/) et à insérer dans le dossier img/
À chaque ajout de carte il faut augmenter var max et insérer dans la liste des if (random == 1) {valeur1 = 1}; la bonne valeur en fonction du numéro de la carte.

## Personnalisation du message de résultat

2 catégories sont définies dans les variables cat et cat2:
- 1 les comploteurs
- 2 les complotistes

C'est pour pouvoir personnaliser un message de résultat en fonction de la situation (var result)

## Tester

Le site est dispo en ligne sur https://covidgame.fun
