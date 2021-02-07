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
    $rand = random_int(1,2500);
    $tab[$rand]['nom'] = $data[0];
    $tab[$rand]['record'] = $data[1];
}
fclose($fichier);

// tri décroissant des valeurs
array_multisort( array_column($tab, "record"), SORT_DESC, $tab );

// affichage des scores
if(isset($tab) && is_array($tab) && count($tab) > 0)
{
    echo '<table class="center">';
    foreach ($tab as $key => $value) { 
        $tour++;
        echo '<tr>';
        echo '<td>'.$value['nom'].'</td><td class="vide"></td><td class="record">'.$value['record'].'</td>';
        echo '</tr>';
        if ($tour == $end) break;
    }
    echo '</table>';
}

?>