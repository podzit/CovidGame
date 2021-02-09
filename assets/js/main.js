import { deck } from './constants/deck.js';
import { words, over } from './constants/words.js';
import { betLimit, bets, buttons, cardDisplay, noGame, flipCards } from './constants/display.js';
import { DOM_audioWin, DOM_audioLoose, DOM_audioCard, DOM_help, DOM_formRecord, DOM_gameOver, DOM_rulesPop, DOM_cardProp, DOM_scoresPop, DOM_stop, DOM_bet1, DOM_bet2, DOM_bet5, DOM_bet10 } from './constants/display.js'; 

var win = 0;
var bet = 0;
var gain = 0;
var pocket = 50;
var hiScore = 50;

DOM_formRecord.style.display = "none";
DOM_cardProp.style.display = "none";
DOM_stop.style.display = "none";

// Display record form
function record() {
  DOM_formRecord.style.display = "block";
  document.getElementById("score").innerHTML = `Ton meilleur score: ${hiScore}`;
  document.getElementById("record").value = `${hiScore}`;
};

// Click on bet's buttons
DOM_bet1.onclick = function () { game(bet = 1); };
DOM_bet2.onclick = function () { game(bet = 2); };
DOM_bet5.onclick = function () { game(bet = 5); };
DOM_bet10.onclick = function () { game(bet = 10); };

// Click on footer's buttons
document.getElementById("rulesButton").onclick = function() {
  DOM_rulesPop.style.display = "block"
};
document.getElementById("closeRules").onclick = function() {
  DOM_rulesPop.style.display = "none"
};
document.getElementById("scoresButton").onclick = function() {
  DOM_scoresPop.style.display = "block"
};
document.getElementById("closeScores").onclick = function() {
  DOM_scoresPop.style.display = "none"
};
document.getElementById("cardPropButton").onclick = function() {
  DOM_cardProp.style.display = "block";
  noGame();
  bets("none");
  DOM_stop.style.display = "none";
  DOM_gameOver.style.display = "none";
  document.getElementById("helpButton").onclick = function(){
    DOM_help.style.display = "block"
  };
  document.getElementById("closeHelp").onclick = function(){
    DOM_help.style.display = "none"
  };
};

document.getElementById("titleButton").onclick = function(){window.location = "index.php";}

// Principal game function
function game(round) {
  
  document.getElementById("pocket").innerHTML = `Ta poche: ${pocket}$`;
  buttons("none","grey");
  document.getElementById("vs").style.display = "none";

  // Swoosh sound effect
  DOM_audioCard.play();

  // First round
  if (round == 1) {

    flipCards();

  // Card random choice
    let [playerCard, ennemyCard] = [
      deck[Math.floor(Math.random() * deck.length)],
      deck[Math.floor(Math.random() * deck.length)]
    ];

  // Timeout to slow card display
    setTimeout(() => {  
      cardDisplay(playerCard, document.getElementById("playerImage"));
      cardDisplay(ennemyCard, document.getElementById("ennemyImage"));
    }, 700);

    let winner = words.winWord[Math.floor(Math.random() * words.winWord.length)];
    let looser = words.looseWord[Math.floor(Math.random() * words.looseWord.length)];
    let action = words.verb[Math.floor(Math.random() * words.verb.length)];
    let end = over.mock[Math.floor(Math.random() * over.mock.length)];

  // Result conditions
    if (playerCard.force > ennemyCard.force && playerCard.guild != ennemyCard.guild) {
      win = 1;
      gain = playerCard.force*(2*bet);
      if (playerCard.guild == 'Comploteurs'){
        var result = `${winner} ${playerCard.character} ${action} ${ennemyCard.character}`;
      }
      else {
        result = `${winner} Tu as vaincu l'élite pédophile satanique avec ${playerCard.character}`;
      };
    }
    else if (playerCard.force > ennemyCard.force && playerCard.guild == ennemyCard.guild) {
      win = 2;
      gain = playerCard.force*bet;
      if (playerCard.guild == 'Comploteurs'){
        result = `${winner} Entre comploteurs, ${playerCard.character} ${action} ${ennemyCard.character}`;
      }
      else {
        result = `${winner} ${ennemyCard.character} a succombé ! Tu es le survivant de ta guilde`;
      };
    }
    else if (playerCard.force < ennemyCard.force && playerCard.guild != ennemyCard.guild){
      win = 0;
      gain = - (ennemyCard.force*(2*bet));
      if (ennemyCard.guild == 'Comploteurs') {
        result = `${looser} Le complot mondial t'${action} en utilisant ${ennemyCard.character}`;
      }
      else {
        result = `${looser} ${ennemyCard.character} ${action} ${playerCard.character}`;
      };
    }
    else if (playerCard.force < ennemyCard.force && playerCard.guild == ennemyCard.guild){
      win = 2;
      gain = - (ennemyCard.force*bet);
      if (ennemyCard.guild == 'Comploteurs') {
        result = `${looser} ${ennemyCard.character} t'${action}! Trop de complot tue le complot`;
      }
      else {
        result = `${looser} Entre complotistes, ${ennemyCard.character} ${action} ${playerCard.character}`;
      };
    }
    else {
      result = `Match nul: personne n'est sorti vivant de ce duel`;
      win = 2;
      gain = - bet;
    };

  // Display slower
    setTimeout(() => {  

  // Enabling bets buttons
      buttons("auto","#4CAF50");

  // Result displaying
      document.getElementById("result").innerHTML = `${result}`;

  // Gain displaying
      if (gain < 0){
        document.getElementById("gain").innerHTML = `Perte ${gain}$`;
      }
      else {
        document.getElementById("gain").innerHTML = `Gain ${gain}$`;
        if (hiScore < (gain + pocket)){
          hiScore = gain + pocket;
        }
      };
  
      pocket = gain + pocket;
      document.getElementById("pocket").innerHTML = `Ta poche: ${pocket}$`;
      
      jQuery('#resultPopup').slideDown();
      jQuery('#resultPopup').fadeOut(5000);

  // Click on stop button
      document.getElementById("stop").onclick = function () {
        bets("none");
        noGame();
        record()
      };

  // Audio conditions
      if (win == 0) {DOM_audioLoose.play();}
      else if (win == 1) {DOM_audioWin.play ();}
    }, 710);

  // Game Over
    setTimeout (() => {
      if (pocket <= 0 && pocket < 2 && pocket < 5 && pocket < 10) {
        bets("none");
        setTimeout(() => {
          noGame();
          if (hiScore >= 500){
            record();
          }
          else {
            DOM_gameOver.style.display = "block";
            document.getElementById("overWords").innerHTML = `${end}`;
            document.getElementById("replay").onclick = function () {location.reload()};
          };
        }, 500);  
      }

  // Bets buttons displaying conditions
      else if (pocket < 2 && pocket < 5 && pocket < 10) {
        betLimit(1);
      }

      else if (pocket >= 2 && pocket < 5 && pocket < 10) {
        betLimit(2);
      }

      else if (pocket >= 2 && pocket >= 5 && pocket < 10) {
        betLimit(5);
      }

      else if (pocket >= 2 && pocket >= 5 && pocket >= 10) {
        betLimit(10);
      };

  // Stop button displaying condition
      if (pocket >= 500) {
        DOM_stop.style.display = "inline-block";
      }
      else {
        DOM_stop.style.display = "none";
      };

    }, 1000);

  // Set round 2
  round = 2;
  }

  // Back card in flip effect starting round 2
  else {
    setTimeout(() => {
    document.getElementById("playerImage").innerHTML = `<img src="assets/img/back.png"></img>`;
    document.getElementById("ennemyImage").innerHTML = `<img src="assets/img/back.png"></img>`;
    }, 345);
    game(1);
  };
};