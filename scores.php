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

		<title>Covid Game v3.2</title>
		<link rel="icon" href="favicon.ico" />
		<link rel="stylesheet" href="assets/css/main.css">
  <link rel="stylesheet" href="assets/css/carte.css">
  <link rel="stylesheet" href="assets/css/jeu.css">
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
			<div class="jeu">
				<h2> High Score </h2>

				<?php

				// définition des variables
				$file = 'assets/scores.csv';
				$taille = 1024;
				$delimiteur = ",";
				$tour = 0;
				$end = 10;
				$tab = array();

				// récupération des valeurs du formulaire
				$name = htmlspecialchars($_POST['name']);
				$record = htmlspecialchars($_POST['record']);

				// création d'un array
				$data = array(
					array($name, $record)
				);

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

				<form action="index.php">
					<div class="button">
						<button type="submit">REJOUER</button>
					</div>
				</form>

			</div>

		</main>

		<!-- FOOTER -->
		<footer>

			<a href="https://github.com/podzit/CovidGame" target="_blank">Contribuer à ce site</a>
			
		</footer>
		<!-- FOOTER'S END -->

	</body>

	</html>