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
    <title>***Covid Game***</title>
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
    <meta name="Keywords" content="jeu;france;fr;cartes;covid19;covid;complots;humour;nouvelordremondial;complistes;comploteurs;raoult;hydroxychloroquine;vaccin;masque;illuminatis;">
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

<?php
  // récupération des valeurs du formulaire
  $name = htmlspecialchars($_POST['name']);
  $record = htmlspecialchars($_POST['record']);

  // création d'un array
  $data = array(
    array($name, $record)
    );
  
  // définition des variables
  $file = 'assets/scores.csv';
  $taille = 1024;
  $delimiteur = ",";
  $tour = 0;
  $end = 10;
  $tab = array();

  // écriture dans le fichier
  if (!empty($record)){
    if ($f = @fopen($file, 'a')) {
      foreach ($data as $ligne) {
        fputcsv($f, $ligne);
        }
      fclose($f);
      }
    else {
      echo "Impossible d'acc&eacute;der au fichier.";
      }
  }
?>

<?php
  // lecture du fichier
  $fichier = fopen($file, "r");
  while (($data = fgetcsv($fichier, $taille, $delimiteur)) !== FALSE)
  {
    $tab[$data[0]]['nom'] = $data[1];
    $tab[$data[0]]['record'] = $data[2];
  }

  fclose($fichier);

  // tri décroissant des valeurs
  arsort($tab);
?>

<div class="jeu">
<h2> High Score </h2>
<?php
  // affichage des scores
  if(isset($tab) && is_array($tab) && count($tab) > 0)
  {
    echo '<table class="center">';
    foreach ($tab as $key => $value) { 
      $tour++;
      echo '<tr>';
      echo '<td>'.$key.'</td><td class="vide"></td><td class="record">'.$value['nom'].'</td><td>'.$value['record'].'</td>';
      echo '</tr>';
      if ($tour == $end) break;
    }

    echo '</table>';
  }
?>
<form action="index.html">
  <div class="button">
    <button type="submit">REJOUER</button>
  </div>
</form>
</div>
</main>

    <!-- FOOTER -->
    <footer>
        <a href="https://github.com/podzit/CovidGame" target="_blank">
            Contribuer à ce site
          <img src="assets/img/github.png" width=2%>
        </a>
    </footer>
    <!-- FOOTER'S END -->

  </body>
</html>
