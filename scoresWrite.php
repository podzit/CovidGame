<?php

// Values
$file = 'assets/scores.csv';
$length = 1024;
$delimiter = ",";

// Get form values
$name = htmlspecialchars($_POST['name']);
$record = htmlspecialchars($_POST['record']);

// Array construction
if (is_numeric($record)){
	$array = array(
		array($name, $record)
	);
}

// File writing
if (!empty($record) && is_numeric($record)){
	if ($f = @fopen($file, 'a')) {
		foreach ($array as $line) {
			fputcsv($f, $line);
		}
		fclose($f);
	}
}

?>