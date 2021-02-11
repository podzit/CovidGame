import { deck } from './constants/deck.js';
import { words, over } from './constants/words.js';
import { betLimit, bets, buttons } from './constants/display.js';
import { DOM_mute, DOM_audioWin, DOM_audioLoose, DOM_audioCard, DOM_help, DOM_rulesPop, DOM_scoresPop } from './constants/display.js';
import { DOM_stop, DOM_bet1, DOM_bet2, DOM_bet5, DOM_bet10 } from './constants/display.js';
import { DOM_formRecord, DOM_cardProp, DOM_playerImage, DOM_ennemyImage, DOM_pocket, DOM_result, DOM_gain } from './constants/game.js';
import { gameReady, gameOver, cardDisplay, noGame, flipCards } from './constants/game.js';

document.getElementById("title").innerHTML = "Covid Game v3.2"

var win = 0 , gain = 0 , bet = 0 , pocket = 0 , hiScore = 0;

export function reset(){
  gameReady();
  win = bet = gain = 0;
  pocket = hiScore = 50;
};

reset();

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
  document.getElementById("helpButton").onclick = function(){
    DOM_help.style.display = "block"
  };
  document.getElementById("closeHelp").onclick = function(){
    DOM_help.style.display = "none"
  };
};

document.getElementById("titleButton").onclick = function(){reset();}

// Principal game function
function game(round) {
  
  DOM_pocket.innerHTML = `Ta poche: ${pocket}$`;
  buttons("none","grey");
  document.getElementById("vs").style.display = "none";

  // Swoosh sound effect
  if (DOM_mute.checked){
    DOM_audioCard.pause();
  }
  else {
    DOM_audioCard.play();
  };

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
      cardDisplay(playerCard, DOM_playerImage);
      cardDisplay(ennemyCard, DOM_ennemyImage);
    }, 700);

    let winner = words.winWord[Math.floor(Math.random() * words.winWord.length)];
    let looser = words.looseWord[Math.floor(Math.random() * words.looseWord.length)];
    let action = words.verb[Math.floor(Math.random() * words.verb.length)];
    let end = over.mock[Math.floor(Math.random() * over.mock.length)];

  // Result conditions
    win = playerCard.force > ennemyCard.force && playerCard.guild != ennemyCard.guild ? win = 1 : playerCard.force > ennemyCard.force && playerCard.guild == ennemyCard.guild ? win = 2 : playerCard.force < ennemyCard.force && playerCard.guild != ennemyCard.guild ? win = 0 : win = 2 ;

    if (playerCard.force > ennemyCard.force && playerCard.guild != ennemyCard.guild) {
      gain = playerCard.force*(2*bet);
      var result = playerCard.guild == 'Comploteurs' ? `${winner} ${playerCard.character} ${action} ${ennemyCard.character}` : `${winner} Tu as vaincu l'élite pédophile satanique avec ${playerCard.character}`;
    }
    else if (playerCard.force > ennemyCard.force && playerCard.guild == ennemyCard.guild) {
      gain = playerCard.force*bet;
      result = playerCard.guild == 'Comploteurs' ? `${winner} Entre comploteurs, ${playerCard.character} ${action} ${ennemyCard.character}` : `${winner} ${ennemyCard.character} a succombé ! Tu es le survivant de ta guilde`;
    }
    else if (playerCard.force < ennemyCard.force && playerCard.guild != ennemyCard.guild){
      gain = - (ennemyCard.force*(2*bet));
      result = ennemyCard.guild == 'Comploteurs' ? `${looser} Le complot mondial t'${action} en utilisant ${ennemyCard.character}` : `${looser} ${ennemyCard.character} ${action} ${playerCard.character}`;
    }
    else if (playerCard.force < ennemyCard.force && playerCard.guild == ennemyCard.guild){
      gain = - (ennemyCard.force*bet);
      result = ennemyCard.guild == 'Comploteurs' ? `${looser} ${ennemyCard.character} t'${action}! Trop de complot tue le complot` : `${looser} Entre complotistes, ${ennemyCard.character} ${action} ${playerCard.character}`;
    }
    else {
      result = `Match nul: personne n'est sorti vivant de ce duel`;
      gain = - bet;
    };

  // Display slower
    setTimeout(() => {  

  // Enabling bets buttons
      buttons("auto","#4CAF50");

  // Result displaying
      DOM_result.innerHTML = `${result}`;

  // Gain displaying
      DOM_gain.innerHTML = gain < 0 ? `Perte ${gain}$` : `Gain ${gain}$`;
      hiScore = hiScore < (gain + pocket) ? gain + pocket : hiScore;
  
      DOM_pocket.innerHTML = `Ta poche: ${pocket = gain + pocket}$`;

      jQuery('#resultPopup').slideDown("fast");
      jQuery('#resultPopup').fadeOut(5000);

  // Click on stop button
      DOM_stop.onclick = function () {
        bets("none");
        noGame();
        record();
      };

  // Audio conditions
      if (DOM_mute.checked){
        DOM_audioWin.pause();
        DOM_audioLoose.pause();
      }
      else {
        if (win == 0) {DOM_audioLoose.play();}
        else if (win == 1) {DOM_audioWin.play();}
      };
      }, 710);

  // Game Over
    setTimeout (() => {
      if (pocket <= 0) {
        bets("none");
        setTimeout(() => {
          if (hiScore >= 500){
            record();
          }
          else {
            DOM_result.innerHTML = `GAME OVER !<br/>${end}`;
            gameOver();
          };
        }, 500);  
      }

  // Bets buttons displaying conditions
      var n = pocket < 0 ?  betLimit(n = 0) : pocket < 2 ? betLimit(n = 1) : pocket < 5 ? betLimit(n = 2) : pocket < 10 ? betLimit(n = 5) : betLimit(n = 10);

  // Stop button displaying condition
      DOM_stop.style.display = pocket >= 500 ? "inline-block" : "none";

    }, 1000);

  // Set round 2
  round = 2;
  }

  // Back card in flip effect starting round 2
  else {
    setTimeout(() => {
    DOM_playerImage.innerHTML = DOM_ennemyImage.innerHTML = `<img src="assets/img/back.png"></img>`;
    }, 345);
    game(1);
  };
};