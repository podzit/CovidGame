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
    <!---SCRIPT GOOGLE ANALYTICS'S END-->

    <title>Covid Game</title>
    <link rel="icon" href="favicon.ico" />
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/card.css">
    <link rel="stylesheet" href="assets/css/game.css">
    <link rel="stylesheet" href="assets/css/animation.css">
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
      <div id="game">

        <?php

        // Values
        $recipient = 'contact@covidgame.fun';
        $sentMessage = "Ta proposition de carte a bien été envoyée !<br> Si elle est acceptée tu recevras un mail.";    
        $errorMessage = "L'envoi de ta proposition a échoué.";

        // Email syntax verification
        function IsEmail($email)    
        {
          $value = preg_match('/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!\.)){0,61}[a-zA-Z0-9_-]?\.)+[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!$)){0,61}[a-zA-Z0-9_]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/', $email);    	
          return (($value === 0) || ($value === false)) ? false : true;
        };

        // Get form values
        $characterName = $_POST['characterName'];
        $force = $_POST['force'];
        $imageUrl = $_POST['imageUrl'];
        $guild = $_POST['guild'];
        $group = $_POST['group'];
        $info = $_POST['info'];
        $effect = $_POST['effect'];
        $email = $_POST['email'];
        $captcha = $_POST['captcha'];

        // Captcha verification
        if ($captcha == 5)
        {
          $captcha = true;
        }
        else {
          $captcha = false;
        }

        // Email verification
        $email = (IsEmail($email)) ? $email : '';

        // Message construction with values
        $message = 'Nom du perso: <b>'.$characterName.'</b><br>Force: <b>' .$force. '</b><br>Image: <b>' .$imageUrl. '</b><br>Guilde: <b>' .$guild. '</b><br>Groupe: <b>' .$group. '</b><br>Infos: <b>' .$info. '</b><br>Effet: <b>' .$effect. "</b>\r\n";

        // Headers construction	
        if ($captcha)
        {
          $headers  = 'From:'.$email. "\r\n";
          $headers .= "MIME-version: 1.0\n";
          $headers .= "Content-type: text/html; charset= iso-8859-1\n";

          // Strings replacement
          $message = html_entity_decode($message);
          $message = str_replace('&#039;',"'",$message);
          $message = str_replace('&#8217;',"'",$message);

          // Mail sending	
          $object = "Nouvelle carte";
          mail($recipient, $object, utf8_decode($message), $headers); 		
          echo '<p style="color: bisque;">'.$sentMessage.'</p>';
        }
        else
        {
          echo '<p style="color: bisque;">'.$errorMessage.'</p>';
        }

        ?>

        </div>

        <form action="index.php">
          <div class="button">
            <button type="submit">REJOUER</button>
          </div>
        </form>

      </main>

      <!-- FOOTER -->
      <footer>

        <a href="https://github.com/podzit/CovidGame" target="_blank">Contribuer à ce site</a>
        
      </footer>
      <!-- FOOTER'S END -->

    </body>

    </html>