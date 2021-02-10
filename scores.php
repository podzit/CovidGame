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
		<meta name="Description" content="Jeu en line pour rigoler auround du Covid19">
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
				<h2> High Score </h2>

				<?php

				// Values
				$file = 'assets/scores.csv';
				$length = 1024;
				$delimiter = ",";
				$round = 0;
				$end = 10;
				$tab = array();

				// Get form values
				$name = htmlspecialchars($_POST['name']);
				$record = htmlspecialchars($_POST['record']);

				// Array construction
				if (is_numeric($record)){
					$data = array(
						array($name, $record)
					);
				}
				else {
					echo "Erreur d'enregistrement";
				}

				// File writing
				if (!empty($record) && is_numeric($record)){
					if ($f = @fopen($file, 'a')) {
						foreach ($data as $line) {
							fputcsv($f, $line);
						}
						fclose($f);
					}
					else {
						echo "Impossible d'acc&eacute;der au file.";
					}
				}

				// file reading
				$file = fopen($file, "r");
				while (($data = fgetcsv($file, $length, $delimiter)) !== FALSE)
				{
					$rand = random_int(1,2500);
					$tab[$rand]['name'] = $data[0];
					$tab[$rand]['record'] = $data[1];
				}
				fclose($file);

				// Values desc sort
				array_multisort( array_column($tab, "record"), SORT_DESC, $tab );

				// Scores displaying
				if(isset($tab) && is_array($tab) && count($tab) > 0)
				{
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