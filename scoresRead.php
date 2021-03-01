<?php

// Values
$file = 'assets/scores.csv';
$length = 1024;
$delimiter = ",";
$round = 0;
$end = 10;
$tab = array();

// File reading
$file = fopen($file, "r");
while (($array = fgetcsv($file, $length, $delimiter)) !== FALSE)
{
    $rand = random_int(1,2500);
    $tab[$rand]['name'] = $array[0];
    $tab[$rand]['record'] = $array[1];
}
fclose($file);

// Values desc sort
array_multisort( array_column($tab, "record"), SORT_DESC, $tab );

// Scores displaying
if(isset($tab) && is_array($tab) && count($tab) > 0) {
    echo '<table class="center">';
    foreach ($tab as $key => $value) { 
        $round++;
        echo '<tr>';
        echo '<td>'.$value['name'].'</td><td class="empty"></td><td class="record">'.$value['record'].'</td>';
        echo '</tr>';
        if ($round == $end) break;
    }
    echo '</table>';
}

?>