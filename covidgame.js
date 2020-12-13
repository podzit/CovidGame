/* Appel de la fonction jeu lors du clic sur le bouton */
        
        document.getElementById("bouton").onclick = function() {jeu()};
        
        /* Déclaration de la fonction jeu */

        function jeu() {
            
            /* Mise à zéro des variables */

            var random = undefined;
            var random2 = undefined;
            var valeur1 = undefined;
            var valeur2 = undefined;
            var cat = undefined;
            var cat2 = undefined;
            var result = undefined;

            /* Tirage aléatoire des cartes*/

            var min=1; 
            var max=24;  
            random = Math.floor(Math.random() * (max - min)) + min;
            random2 = Math.floor(Math.random() * (max - min)) + min;

            /* Construction nom de la carte en num.jpeg*/

            var extension = '.jpeg';
            var image = (random)+(extension);
            var image2 = (random2)+(extension);

            /* Affichage en HTML */
            var code1 = "\<img src\=\"img\/";
            var code2 = "\" alt\=\"\" width\=\"400\" height\=\"560\" \/\>";
            var codeimage = code1 + image + code2;
            var codeimage2 = code1 + image2 + code2;
            var html = "\<tbody\>\<tr\>\<td style\=\"width\: 50\%\; text\-align\: center\;\"\>\<div align\=\"center\"\>";
            var html2 = "\<\/div\>\<\/td\>\<td style\=\"width\: 10\%\;\"\>\&nbsp\;\<\/td\>\<td style\=\"width\: 50\%\; text\-align\: center\;\"\>\<div align\=\"center\"\>"; 
            var html3 = "\<\/div\>\<\/td\>\<\/tr\>";
            var affimg = html + codeimage + html2 + codeimage2 + html3;


            /* Assignation des valeurs selon les cartes */

            if (random == 1){valeur1 = 1};
            if (random == 2){valeur1 = 2};
            if (random == 3){valeur1 = 2};
            if (random == 4){valeur1 = 3};
            if (random == 5){valeur1 = 3};
            if (random == 6){valeur1 = 4};
            if (random == 7){valeur1 = 4};
            if (random == 8){valeur1 = 4};
            if (random == 9){valeur1 = 5};
            if (random == 10){valeur1 = 5};
            if (random == 11){valeur1 = 6};
            if (random == 12){valeur1 = 1};
            if (random == 13){valeur1 = 1};
            if (random == 14){valeur1 = 2};
            if (random == 15){valeur1 = 2};
            if (random == 16){valeur1 = 3};
            if (random == 17){valeur1 = 3};
            if (random == 18){valeur1 = 4};
            if (random == 19){valeur1 = 4};
            if (random == 20){valeur1 = 4};
            if (random == 21){valeur1 = 5};
            if (random == 22){valeur1 = 5};
            if (random == 23){valeur1 = 6};

            if (random2 == 1){valeur2 = 1};
            if (random2 == 2){valeur2 = 2};
            if (random2 == 3){valeur2 = 2};
            if (random2 == 4){valeur2 = 3};
            if (random2 == 5){valeur2 = 3};
            if (random2 == 6){valeur2 = 4};
            if (random2 == 7){valeur2 = 4};
            if (random2 == 8){valeur2 = 4};
            if (random2 == 9){valeur2 = 5};
            if (random2 == 10){valeur2 = 5};
            if (random2 == 11){valeur2 = 6};
            if (random2 == 12){valeur2 = 1};
            if (random2 == 13){valeur2 = 1};
            if (random2 == 14){valeur2 = 2};
            if (random2 == 15){valeur2 = 2};
            if (random2 == 16){valeur2 = 3};
            if (random2 == 17){valeur2 = 3};
            if (random2 == 18){valeur2 = 4};
            if (random2 == 19){valeur2 = 4};
            if (random2 == 20){valeur2 = 4};
            if (random2 == 21){valeur2 = 5};
            if (random2 == 22){valeur2 = 5};
            if (random2 == 23){valeur2 = 6};

            /* Attribution à l'une ou l'autre des catégories en fonction du numéro de carte (cat1 = complot, cat2 = complotistes) */
            if (random < 12){
                    cat = 1;
                }
            if(random > 11){
                    cat = 2;
                }
            if (random2 < 12){
                    cat2 = 1;
                }
            if(random2 > 11){
                    cat2 = 2;
                }
            
            /* Affichage du résultats en fonction des cas */

            if (valeur1 > valeur2 && cat == 1 && cat2 == 2) {
                    result = "Bravo \! Tu as fais gagn\351 le nouvel ordre mondial";
                } 
            else if (valeur1 > valeur2 && cat == 1 && cat2 == 1) {
                    result = "Bravo \! Tu as tu\351 tes alli\351s";
                }
            else if (valeur1 > valeur2 && cat == 2 && cat2 == 1){
                    result = "Bravo \! Tu as vaincu l\'\351lite p\351dophile satanique";
                }
            else if (valeur1 > valeur2 && cat == 2 && cat2 == 2){
                    result = "Bravo \! Tu es le survivant de ta guilde";
                }
            else if (valeur2 > valeur1 && cat2 == 1 && cat == 2){
                    result = "Looser \! Le complot mondial a eu ta peau"; 
                }
            else if (valeur2 > valeur1 && cat2 == 1 && cat == 1){
                    result = "Looser \! Trop de complot tue le complot"; 
                }
            else if (valeur2 > valeur1 && cat2 == 2 && cat == 1){
                    result = "Looser \! Tu as perdu contre la guilde de la chloroquine";
            }
            else if (valeur2 > valeur1 && cat2 == 2 && cat == 2){
                    result = "Looser \! Tu as \351t\351 trahis par tes amis";
            }
            else{
                result = "Match nul\: Personne n\'est sorti vivant de ce duel";
            }

            /* débug */
            
            /* console.log(random,random2,valeur1,valeur2,cat,cat2); */

            
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