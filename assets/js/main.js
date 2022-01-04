import { deck } from './constants/deck.js';
import { words } from './constants/words.js';
import { buttons, record, footerButtons, audio, cardSound, endGame } from './constants/display.js';
import { DOM_bet1, DOM_bet2, DOM_bet5, DOM_bet10, DOM_betAllin } from './constants/display.js';
import { DOM_playerImage, DOM_ennemyImage, DOM_pocket, DOM_gain, DOM_result, cardDisplay, flipCards, gameReady } from './constants/game.js';
import { text } from './constants/text.js';

var win = 0 , gain = 0 , bet = 0 , pocket = 0 , hiScore = 0;

export { hiScore, pocket, win };

export function reset(){
  jQuery('#resultPopup').hide();
  gameReady();
  win = bet = gain = 0;
  pocket = hiScore = 50;
};

// Reset the game
reset();

// Click on bet's buttons
DOM_bet1.onclick = function () { game(bet = 1); };
DOM_bet2.onclick = function () { game(bet = 2); };
DOM_bet5.onclick = function () { game(bet = 5); };
DOM_bet10.onclick = function () { game(bet = 10); };
DOM_betAllin.onclick = function () {game(bet = pocket); };

footerButtons();

jQuery('#titleButton').on("click", function(){reset();} );

// Principal game function
function game() {
  
  DOM_pocket.innerHTML = `${text.pocket}${pocket}$`;
  buttons("none","grey");
  jQuery('#vs').hide()

  // Swoosh sound effect
  cardSound();

  // Card random choice
  let [playerCard, ennemyCard] = Array.from({length:2}, () => deck[Math.floor(Math.random() * deck.length)]);

  // Timeout to slow card display
  setTimeout(() => { cardInjection() }, 700);
    
  function cardInjection() {
    cardDisplay(playerCard, DOM_playerImage);
    cardDisplay(ennemyCard, DOM_ennemyImage);
  };
  
  // Result conditions
  let sameGuild = playerCard.guild == ennemyCard.guild ? true : false ;
  let playerWin = playerCard.force > ennemyCard.force ? true : false ;
  let nul = playerCard.force == ennemyCard.force ? true : false ;
  let playerGuild = playerCard.guild == 'Comploteurs' ? true : false ;
  let ennemyGuild = ennemyCard.guild == 'Comploteurs' ? true : false ;

  // Sound conditions
  win = nul ? 4 : playerWin && !sameGuild ? 1 : playerWin && sameGuild ? 2 : !playerWin && !sameGuild ? 0 : !playerWin && sameGuild ? 3 : '' ;
    
  // Gain conditions
  gain = win == 1 ? playerCard.force*(2*bet) : win == 2 ? playerCard.force*bet : win == 0 ? - (ennemyCard.force*(2*bet)) : 
  win == 3 ? - (ennemyCard.force*bet) : - bet ;

  // Random text choice
  const end = {
    winner: [ words.win[Math.floor(Math.random() * words.win.length)] ],
    looser: [ words.loose[Math.floor(Math.random() * words.loose.length)] ],
    action: [ words.verb[Math.floor(Math.random() * words.verb.length)] ]
  };

  // Result conditions
  const text1 = `${end.winner} ${playerCard.character} ${end.action} ${ennemyCard.character}`;
  const text2 = `${end.winner} Tu as vaincu l'élite pédophile satanique avec ${playerCard.character}`;
  const text3 = `${end.winner} Entre comploteurs, ${playerCard.character} ${end.action} ${ennemyCard.character}`;
  const text4 = `${end.winner} ${ennemyCard.character} a succombé ! Tu es le survivant de ta guilde`;
  const text5 = `${end.looser} Le complot mondial t'${end.action} en utilisant ${ennemyCard.character}`;
  const text6 = `${end.looser} ${ennemyCard.character} ${end.action} ${playerCard.character}`;
  const text7 = `${end.looser} ${ennemyCard.character} t'${end.action}! Trop de complot tue le complot`;
  const text8 = `${end.looser} Entre complotistes, ${ennemyCard.character} ${end.action} ${playerCard.character}`;
  const text9 = `Match nul: personne n'est sorti vivant de ce duel`;

  var resultText = win == 1 && playerGuild ? `${text1}` : win == 1 && !playerGuild ? `${text2}` : 
  win == 2 && playerGuild ? `${text3}` : win == 2 && !playerGuild ? `${text4}` : 
  win == 0 && ennemyGuild ? `${text5}` : win == 0 && !ennemyGuild ? `${text6}` :  
  win == 3 && ennemyGuild ? `${text7}` : win == 3 && !ennemyGuild ? `${text8}` : win == 4 ? `${text9}` : '' ;

  flipCards();

  // Display slower
  setTimeout(() => { displayResult() }, 710); 

 // Result display
  function displayResult(){
    DOM_result.innerHTML = `${resultText}`;

    // Gain display
    DOM_gain.innerHTML = gain < 0 ? `Perte ${gain}$` : `Gain ${gain}$`;
    hiScore = hiScore < (gain + pocket) ? gain + pocket : hiScore;
    DOM_pocket.innerHTML = `${text.pocket}${pocket = gain + pocket}$`;
    jQuery('#resultPopup').slideDown("fast").delay(1000).fadeOut(1500, "swing", function() {
      // Enabling bets buttons
      buttons("auto","#4CAF50")
    });

    // Click on stop button
    jQuery('#stop').on("click", function () {
      record();
    } );

  // Audio conditions
    audio();
  };

  // Game Over
  setTimeout (() => { endGame() }, 1000); 

};
