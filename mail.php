        <?php

        // Values
        $recipient = 'podz@free.fr';
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

        // Email verification
        $email = (IsEmail($email)) ? $email : '';

        // Message construction with values
        $message = 'Nom du perso: <b>'.$characterName.'</b><br>Force: <b>' .$force. '</b><br>Image: <b>' .$imageUrl. '</b><br>Guilde: <b>' .$guild. '</b><br>Groupe: <b>' .$group. '</b><br>Infos: <b>' .$info. '</b><br>Effet: <b>' .$effect. "</b>\r\n";

        // Headers construction	

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

        ?>