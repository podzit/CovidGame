/* Appel de la fonction jeu lors du clic sur le bouton */
document.getElementById("bouton").onclick = function() {jeu()};

/* Déclaration de la fonction jeu */

function jeu() {
  /* Mise à zéro des variables */
  var cat = undefined;
  var cat2 = undefined;
  var choix = undefined;
  var choix2 = undefined;
  var valeur1 = undefined;
  var valeur2 = undefined;
  var result = undefined;
  var min = undefined;
  var max = undefined;
  var max2 = undefined;
  var max3 = undefined;

  /* Nombre de cartes dans les dossier 1 et 2 */
  var max2 = 11 + 1;
  var max3 = 12 + 1;

  /* Tirage catégorie */
  min = 1;
  max = 3;
  cat = Math.floor(Math.random() * (max - min)) + min;
  cat2 = Math.floor(Math.random() * (max - min)) + min;

    /* Tirage cartes */
  if (cat == 1){
    choix = Math.floor(Math.random() * (max2 - min)) + min;
  }
  if(cat == 2){
    choix = Math.floor(Math.random() * (max2 - min)) + min;
  }
  if (cat2 == 1){
    choix2 = Math.floor(Math.random() * (max3 - min)) + min;
  }
  if(cat2 == 2){
    choix2 = Math.floor(Math.random() * (max3 - min)) + min;
  }

  /* Construction nom de la carte en num.jpeg*/
  var extension = '.jpeg';
  var sep = '/';

  var image = cat + sep + choix + extension;
  var image2 = cat2 + sep + choix2 + extension;

  /* Affichage en HTML */
  var code1 = "\<img src\=\"assets\/img\/";
  var code2 = "\" alt\=\"\" width\=\"400\" height\=\"560\" \/\>";
  var codeimage = code1 + image + code2;
  var codeimage2 = code1 + image2 + code2;
  var html = "\<tbody\>\<tr\>\<td style\=\"width\: 50\%\; text\-align\: center\;\"\>\<div align\=\"center\"\>";
  var html2 = "\<\/div\>\<\/td\>\<td style\=\"width\: 10\%\;\"\>\&nbsp\;\<\/td\>\<td style\=\"width\: 50\%\; text\-align\: center\;\"\>\<div align\=\"center\"\>";
  var html3 = "\<\/div\>\<\/td\>\<\/tr\>";
  var affimg = html + codeimage + html2 + codeimage2 + html3;

  /* Assignation des valeurs selon les cartes */
  if (cat == 1 && choix == 1){valeur1 = 1};
  if (cat == 1 && choix == 2){valeur1 = 2};
  if (cat == 1 && choix == 3){valeur1 = 2};
  if (cat == 1 && choix == 4){valeur1 = 3};
  if (cat == 1 && choix == 5){valeur1 = 3};
  if (cat == 1 && choix == 6){valeur1 = 4};
  if (cat == 1 && choix == 7){valeur1 = 4};
  if (cat == 1 && choix == 8){valeur1 = 4};
  if (cat == 1 && choix == 9){valeur1 = 5};
  if (cat == 1 && choix == 10){valeur1 = 5};
  if (cat == 1 && choix == 11){valeur1 = 6};
  if (cat == 2 && choix == 1){valeur1 = 1};
  if (cat == 2 && choix == 2){valeur1 = 1};
  if (cat == 2 && choix == 3){valeur1 = 2};
  if (cat == 2 && choix == 4){valeur1 = 2};
  if (cat == 2 && choix == 5){valeur1 = 3};
  if (cat == 2 && choix == 6){valeur1 = 3};
  if (cat == 2 && choix == 7){valeur1 = 4};
  if (cat == 2 && choix == 8){valeur1 = 4};
  if (cat == 2 && choix == 9){valeur1 = 4};
  if (cat == 2 && choix == 10){valeur1 = 5};
  if (cat == 2 && choix == 11){valeur1 = 5};
  if (cat == 2 && choix == 12){valeur1 = 6};

  if (cat2 == 1 && choix2 == 1){valeur2 = 1};
  if (cat2 == 1 && choix2 == 2){valeur2 = 2};
  if (cat2 == 1 && choix2 == 3){valeur2 = 2};
  if (cat2 == 1 && choix2 == 4){valeur2 = 3};
  if (cat2 == 1 && choix2 == 5){valeur2 = 3};
  if (cat2 == 1 && choix2 == 6){valeur2 = 4};
  if (cat2 == 1 && choix2 == 7){valeur2 = 4};
  if (cat2 == 1 && choix2 == 8){valeur2 = 4};
  if (cat2 == 1 && choix2 == 9){valeur2 = 5};
  if (cat2 == 1 && choix2 == 10){valeur2 = 5};
  if (cat2 == 1 && choix2 == 11){valeur2 = 6};
  if (cat2 == 2 && choix2 == 1){valeur2 = 1};
  if (cat2 == 2 && choix2 == 2){valeur2 = 1};
  if (cat2 == 2 && choix2 == 3){valeur2 = 2};
  if (cat2 == 2 && choix2 == 4){valeur2 = 2};
  if (cat2 == 2 && choix2 == 5){valeur2 = 3};
  if (cat2 == 2 && choix2 == 6){valeur2 = 3};
  if (cat2 == 2 && choix2 == 7){valeur2 = 4};
  if (cat2 == 2 && choix2 == 8){valeur2 = 4};
  if (cat2 == 2 && choix2 == 9){valeur2 = 4};
  if (cat2 == 2 && choix2 == 10){valeur2 = 5};
  if (cat2 == 2 && choix2 == 11){valeur2 = 5};
  if (cat2 == 2 && choix2 == 12){valeur2 = 6};

  /* Affichage du résultats en fonction des cas */
  if (valeur1 > valeur2 && cat == 1 && cat2 == 2) {
    result = "Bravo \! Tu as fais gagn\351 le nouvel ordre mondial";
  }
  else if (valeur1 > valeur2 && cat == 1 && cat2 == 1) {
    result = "Wahou \! Tu as tu\351 tes alli\351s";
  }
  else if (valeur1 > valeur2 && cat == 2 && cat2 == 1){
    result = "Yes \! Tu as vaincu l\'\351lite p\351dophile satanique";
  }
  else if (valeur1 > valeur2 && cat == 2 && cat2 == 2){
    result = "Wahou \! Tu es le survivant de ta guilde";
  }
  else if (valeur2 > valeur1 && cat2 == 1 && cat == 2){
    result = "Looser \! Le complot mondial a eu ta peau";
  }
  else if (valeur2 > valeur1 && cat2 == 1 && cat == 1){
    result = "Oups \! Trop de complot tue le complot";
  }
  else if (valeur2 > valeur1 && cat2 == 2 && cat == 1){
    result = "Looser \! Tu as perdu contre la guilde de la chloroquine";
  }
  else if (valeur2 > valeur1 && cat2 == 2 && cat == 2){
    result = "Dommage \! Tu as \351t\351 trahis par tes amis";
  }
  else{
    result = "Match nul\: Personne n\'est sorti vivant de ce duel";
  }

  /* débug */
  /*console.log(valeur1,valeur2,cat,cat2,choix,choix2);*/

  /* Centre l'affichage des résultats */
  var tableresult = "\<tr\>\<td colspan\=\"3\" style\=\"width\: 50\%\; text\-align\: center\;\"\>";
  var tableresult2 = "\<\/td\>\<\/tr\>\<\/tbody\>";
  var result2 = tableresult + result + tableresult2;

  /* code pour l'affichage d'un deuxième bouton en bas */
  /*var recharge = "\<p style\=\"text\-align\: center\; font\-size\:large\;\"\>\<button class\=\"button button2\" id\=\"bouton2\"\>REJOUER\<\/button\>\<\/p\>";*/

  var body = affimg + result2;

  /* Action pour affichage au niveau de la balise cartes */
  document.getElementById("cartes").innerHTML = body;

/* Action pour le deuxième bouton */
/*document.getElementById("bouton2").addEventListener("click", jeu);*/
}
