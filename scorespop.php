<head>
<link rel="stylesheet" href="assets/main.css">
</head>
<html>
<body class="reglebody">
<div class="regles">
<?php
  
  // définition des variables
  $file = 'assets/scores.csv';
  $taille = 1024;
  $delimiteur = ",";
  $tour = 0;
  $end = 10;
  $tab = array();

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
<h2 style="text-align: center;"> High Score </h2>
<?php
  arsort($tab);
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
<div align="center">
    <span class="buttonS2" onclick="parent.window.close();">Fermer</span>
</div>
</body>
</html>
