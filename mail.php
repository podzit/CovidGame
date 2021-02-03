<!DOCTYPE html>
<html>
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GNMWL78TM7"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-GNMWL78TM7');
    </script>
    <!---FIN DU SCRIPT GOOGLE ANALYTICS-->
    <title>***Covid Game v3.0***</title>
    <link rel="icon" href="favicon.ico" />
    <link rel="stylesheet" href="assets/main.css">
    <link rel="stylesheet" href="assets/carte.css">
    <meta property="og:image" content="https://covidgame.fun/assets/img/covid.jpg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:title" content="CovidGame" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://covidgame.fun" />
    <meta property="og:description" content="Qui des comploteurs ou des complotistes vaincront ?" />
    <meta name="Content-Language" content="fr">
    <meta name="Description" content="Jeu en ligne pour rigoler autour du Covid19">
    <meta name="Keywords" content="jeu;france;fr;cartes;covid19;covid;complots;humour;nouvelordremondial;complistes;comploteurs;raoult;hydroxychloroquine;vaccin;masque;illuminatis;Qanon;Deepstate">
    <meta name="Subject" content="CovidGame">
    <meta name="Copyright" content="PodzIT 2020">
    <meta name="Author" content="PodzIT">
    <meta name="Identifier-Url" content="covidgame.fun">
    <meta name="Revisit-After" content="1 day">
    <meta name="Robots" content="all">
    <meta name="Rating" content="general">
    <meta name="Distribution" content="global">
    <meta name="Geography" content="France">
    <meta name="viewport" content="width=device-width, initial-scale=0.5">
    <meta charset="UTF-8">

  </head>
  <body>
  <main>
      <h1>Covid Game</h1>
      <div class="jeu">

<?php

  // variables
  $destinataire = 'skankinbuzz@gmail.com';
  $message_envoye = "Ta proposition de carte a bien été envoyée !<br> Si elle est acceptée tu recevras un mail.";    
  $message_non_envoye = "L'envoi de ta proposition a échoué.";

  // Cette fonction sert à vérifier la syntaxe d'un email
  function IsEmail($email)    
	{
    		$value = preg_match('/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!\.)){0,61}[a-zA-Z0-9_-]?\.)+[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!$)){0,61}[a-zA-Z0-9_]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/', $email);    	
		return (($value === 0) || ($value === false)) ? false : true;
  };

  
  // récupération des valeurs du formulaire
  $nomperso = $_POST['nomperso'];
  $force = $_POST['force'];
  $guilde = $_POST['guilde'];
  $groupe = $_POST['groupe'];
  $infos = $_POST['infos'];
  $effet = $_POST['effet'];
  $email = $_POST['email'];
  $captcha = $_POST['captcha'];

  if ($captcha == 5)
  {
    $captcha = true;
  }
  else {
    $captcha = false;
  }

  // On va vérifier les variables et l'email ...
  $email = (IsEmail($email)) ? $email : '';
  
  $message = 'Nom du perso: ' .$nomperso. ' | Force: ' .$force. ' | Guilde: ' .$guilde. ' | Groupe: ' .$groupe. ' | Infos: ' .$infos. ' | Effet: ' .$effet. "\r\n";

  // on génère puis envoie le mail
  	
		if ($captcha)
    	{ 		
    		$headers  = 'From:'.$email. "\r\n";    		
        $headers .= 'X-Mailer:PHP/'.phpversion();

        // Remplacement de certains caractères spéciaux
        $message = html_entity_decode($message);
        $message = str_replace('&#039;',"'",$message);
        $message = str_replace('&#8217;',"'",$message);
        $message = str_replace('<br>','',$message);
        $message = str_replace('<br />','',$message);
        

    		// Envoi du mail		
		    $objet = "Nouvelle carte";
    		mail($destinataire, $objet, $message, $headers); 		
        echo '<p>'.$message_envoye.'</p>';
      }
    else
      {
        echo '<p>'.$message_non_envoye.'</p>';
      }

  ?>

</div>
</main>

    <!-- FOOTER -->
    <footer>
        <a href="https://github.com/podzit/CovidGame" target="_blank">
            Contribuer à ce site</a>
    </footer>
    <!-- FOOTER'S END -->

  </body>
</html>
