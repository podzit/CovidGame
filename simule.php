<!DOCTYPE html>

	<head>
        <link rel="stylesheet" href="assets/css/carte.css">
	</head>

<?php

// récupération des valeurs du formulaire
$nomperso = $_POST['nomperso'];
$force = $_POST['force'];
$guilde = $_POST['guilde'];
$groupe = $_POST['groupe'];
$infos = $_POST['infos'];
$effet = $_POST['effet'];

// Mise en forme des variables récupérées
echo '<div id="carte" class="carte" style="display:block; self-align: center;">
<div class="perso">'.$nomperso.'</div>
<div class="image"></div>
<div class="force" style="color: black;">'.$force.'</div>
<div class="bandeau">'.$guilde.' / '.$groupe.'</div>
<div class="info">'.$infos.'</div>
<div class="effet">'.$effet.'</div>
</div>'

?>