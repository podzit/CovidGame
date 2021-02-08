	<head>
        <link rel="stylesheet" href="assets/css/card.css">
	</head>

<?php

// Get values from index
$characterName = $_POST['characterName'];
$force = $_POST['force'];
$guild = $_POST['guild'];
$group = $_POST['group'];
$info = $_POST['info'];
$effect = $_POST['effect'];

// Display values
echo '<div id="card" class="card" style="display:block; self-align: center;">
<div class="character">'.$characterName.'</div>
<div class="image"></div>
<div class="force" style="color: black;">'.$force.'</div>
<div class="band">'.$guild.' / '.$group.'</div>
<div class="info">'.$info.'</div>
<div class="effect">'.$effect.'</div>
</div>'

?>