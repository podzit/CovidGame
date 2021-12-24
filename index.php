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
        <!--- GOOGLE ANALYTICS END -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="./assets/js/constants/papaparse.min.js"></script>
        <title id="title"></title>
        <link rel="icon" href="favicon.ico" />
        <link rel="stylesheet" href="assets/css/main.css">
        <link rel="stylesheet" href="assets/css/card.css">
        <link rel="stylesheet" href="assets/css/game.css">
        <link rel="stylesheet" href="assets/css/animation.css">
        <link rel="stylesheet" href="assets/css/pop.css">
        <meta property="og:image" content="https://podz.be/CovdiGame/assets/img/covid.jpg">
        <meta property="og:image:type" content="image/jpeg">
        <meta property="og:title" content="CovidGame" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://podz.be/CovdiGame/" />
        <meta property="og:description" content="Qui des comploteurs ou des complotistes vaincront ?" />
        <meta name="Content-Language" content="fr">
        <meta name="Description" content="Jeu en ligne pour rigoler autour du Covid19">
        <meta name="Keywords" content="jeu;france;fr;cartes;covid19;covid;complots;humour;nouvelordremondial;complistes;comploteurs;raoult;hydroxychloroquine;vaccin;masque;illuminatis;Qanon;Deepstate">
        <meta name="Subject" content="CovidGame">
        <meta name="Copyright" content="PodzIT 2020">
        <meta name="Author" content="PodzIT">
        <meta name="Identifier-Url" content="podz.be">
        <meta name="Revisit-After" content="1 day">
        <meta name="Robots" content="all">
        <meta name="Rating" content="general">
        <meta name="Distribution" content="global">
        <meta name="Geography" content="France">
        <meta name="viewport" content="width=device-width, initial-scale=0.5">
        <meta charset="UTF-8">
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
    </head>
    <body>

        <!-- Audio -->
        <audio id="audioWin"><source src="assets/audio/audiowin.ogg" type="audio/ogg"></audio>
        <audio id="audioLoose"><source src="assets/audio/audioloose.ogg" type="audio/ogg"></audio>
        <audio id="audioCard"><source src="assets/audio/audiocard.ogg" type="audio/ogg"></audio>
        <!-- Audio's end -->

        <main>

            <h1>
                <span id="titleButton">Covid Game</span>
                <input type="checkbox" id="muteButton" />
                <label id="muteLabel" for="muteButton"><img src="assets/img/muteoff.png" /></label>
            </h1>
            <div id="pocket" class="pocket"></div>
            

            <!-- Bet's buttons -->
            <button id="bet1">1$</button>
            <button id="bet2">2$</button>
            <button id="bet5">5$</button>
            <button id="bet10">10$</button>
            <button id="stop">Stop</button>
            <button id="allin">TAPIS !</button>
            <!-- Bet's buttons's end -->

            <!-- Game  -->
            <div id="game">
                <section id="resultPopup">
                    <div id="result"></div>
                    <div id="gain"></div>
                    <button id="replay">REJOUER</button>
                </section>
                <section>
                    <div class="deck">
                        <div class="playerName">Toi</div>
                        <div id="flipCard" class="flipCard3DWrapper">
                        <div id="playerImage"></div>
                        </div>
                    </div>
                    
                    <div id="vs">
                        <span class="fire">V</span>
                        <span class="burn">S</span>
                    </div>

                    <div class="deck">
                        <div class="playerName">L'ennemi</div>
                        <div id="flipCard2" class="flipCard3DWrapper2">
                        <div id="ennemyImage"></div>
                        </div>
                    </div>
                </section>
            </div>
            <!-- Game's end  -->

            <!-- Card template -->
            <div id="card" class="card">
                <div class="character"></div>
                <div class="image"></div>
                <div class="force"></div>
                <div class="band"></div>
                <div class="info"></div>
                <div class="effect"></div>
            </div>
            <!-- Card template'end -->

            <!-- High score form-->
            <div id="scoresPopForm" class="parentDisableScoresForm">
                <div class="popinScoresForm">
                    <div class="scoresForm">

                    <form name="formRecord" id="formRecord" method="post" onsubmit="return false">

                    <div class="label">
                    <label id="score"></label>
                    <input type="hidden" id="record" name="record" />
                    </div>
                    
                    <div class="label">
                    <label id="scoreName" for="name"></label>
                    <br/>
                    <input type="text" name="name" id="userName" required="required" pattern="[A-Za-z0-9-éèÉÈ]{1,20}" maxlength="20" />
                    </div>
                    
                    <div class="button">
                    <button type="submit" id="recordButton">Enregistrer</button>
                    </div>
                    
                    </form>

                    </div>
                </div>
            </div>
            <!-- High score form's end-->

            <!-- High score pop-in-->
            <div id="scoresPop" class="parentDisableScores">
                <div class="popinScores">
                    <div id="titleScores"></div>
                    <div id="scores" class="scores"></div>
                    <span id="closeScores" class="buttonS3"></span>
                </div>
            </div>
            <!-- High score pop-in's end -->

            <!-- Rules pop-in -->
            <div id="rulesPop" class="parentDisable">
                <div class="rulesPop">
                    <div class="rules" id="textRules"></div>
                    <span id="closeRules" class="buttonS3"></span>
                </div>
            </div>
            <!-- Rules pop-in's end -->

            <!-- Form card proposition -->
            <div id="cardPropPop" class="parentDisableCardProp">
                <div class="popinCardProp">
                    <form id="formCardProp" name="formCardProp" method="post" onsubmit="return false"><br/>
                    <div id="cardPropRules"></div>
                    <span id="helpButton" class="buttonS2">aide</span><br/>

                    <div class="label">
                        <label for="characterName">Nom du perso * </label>
                        <input type="text" id="characterName" name="characterName" required="required" pattern="[A-Za-z0-9 éèà]{1,20}" maxlength="20"></input>
                    </div>

                    <div class="label">
                        <label for="force">Force</label>
                        <select class="select" id="force" name="force">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>

                    <div class="label">
                        <label for="imageUrl">URL d'image</label>
                        <input type="text" id="imageUrl" name="imageUrl" value="https://"></input>
                    </div>

                    <div class="labelInline">
                        <label for="guild">Guilde</label>
                        <select class="select" id="guild" name="guild">
                            <option value="comploteurs">Comploteurs</option>
                            <option value="complotistes">Complotistes</option>
                        </select>
                    </div>

                    <div class="labelInline">
                        <label for="group">Groupe</label>
                        <select class="select" id="group" name="group">
                            <option value="inutiles">Inutiles</option>
                            <option value="tueurs">Tueurs</option>
                            <option value="lobbies">Lobbies</option>
                            <option value="milliardaires">Milliardaires</option>
                            <option value="médias">Médias</option>
                            <option value="sociétés secrètes">Sociétés secrètes</option>
                            <option value="religieux">Religieux</option>
                            <option value="patrons de pmu">Patrons de PMU</option>
                            <option value="lanceurs d'alerte">Lanceurs d'alerte</option>
                            <option value="prophètes">Prophètes</option>
                        </select>
                    </div>

                    <div class="label">
                        <label for="info">Infos du personnage</label>
                        <textarea id="info" name="info" pattern="[A-Za-z0-9]{1,100}" maxlength="100" rows="4" cols="50"></textarea>
                    </div>

                    <div class="label">
                        <label for="effect">Effet du personnage</label>
                        <textarea id="effect" name="effect" pattern="[A-Za-z0-9]{1,100}" maxlength="100" rows="4" cols="50"></textarea>
                    </div> 

                    <div class="label">
                        <label for="email">Ton e-mail * </label>
                        <input type="text" id="email" name="email" required="required" pattern="[A-Za-z0-9.+@]{1,30}" maxlength="30"></input>
                    </div>

                    <div class="label">
                        <label for="captcha"><img src="assets/img/captcha.png">* </label>
                        <input type="text" id="captcha" name="captcha" required="required" maxlength="2"></input>
                    </div>

                    <button type="submit" id="sendButton">Envoyer</button>
                    <button id="previewButton">Aperçu</button>
                    <button id="closeCardPropButton"></button>
                    </form>
                </div>
            </div>
            <!-- Form card proposition's end -->

            <!-- Card proposition pop-in -->
            <div id="cardPreviewDisplay" class="parentDisableCardPreview">
                <div class="popinPreview">
                        <div class="card" style="display:block;">
                        <div id="characterPreview" class="character"></div>
                        <div id="imagePreview" class="image"></div>
                        <div id="forcePreview" class="force" style="color: black;"></div>
                        <div id="bandPreview" class="band"></div>
                        <div id="infoPreview" class="info" style="overflow-wrap: break-word;"></div>
                        <div id="effectPreview" class="effect" style="overflow-wrap: break-word;"></div>
                        </div>
                    <span id="closePreview" class="buttonS3"></span>
                </div>
            </div>
            <!-- Card proposition pop-in's end -->

            <!-- Mail sending pop-in -->
            <div id="mailPop" class="parentDisableMail">
                <div class="popinMail">
                    <div id="mail" class="mail"></div>
                    <button id="replayButton"></button>
                </div>
            </div>
            <!-- Mail sending pop-in's end -->

            <!-- Help pop-in -->
            <div id="helpPop" class="parentDisableHelp">
                <div class="popinHelp">
                    <div id="help" class="help"></div>
                    <span id="closeHelp" class="buttonS3"></span>
                </div>
            </div>
            <!-- Help pop-in's end -->

        </main>

        <!-- FOOTER -->
        <footer>

            <a href="https://github.com/podzit/CovidGame" class="buttonS2" target="_blank">Contribuer à ce site</a> | 
            <span id="scoresButton" class="buttonS2">High Score</span> | 
            <span id="rulesButton" class="buttonS2">Règles du jeu</span> | 
            <span id="cardPropButton" class="buttonS2">Proposer une carte</span>

        </footer>
        <!-- FOOTER'S END -->

        <!-- Javascript -->
        <script type="module" src="assets/js/main.js"></script>

    </body>

    </html>
