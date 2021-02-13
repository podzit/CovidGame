import { deck } from './constants/deck.js';
import { words, over } from './constants/words.js';
import { betLimit, buttons, record, footerButtons, muteButton, audioWin, audioLoose, audioCard } from './constants/display.js';
import { DOM_bet1, DOM_bet2, DOM_bet5, DOM_bet10 } from './constants/display.js';
import { DOM_playerImage, DOM_ennemyImage, DOM_pocket, DOM_gain, DOM_result, gameOver, cardDisplay, noGame, flipCards, gameReady } from './constants/game.js';

document.getElementById("title").innerHTML = "Covid Game v3.2"

var win = 0 , gain = 0 , bet = 0 , pocket = 0 , hiScore = 0;

export { hiScore };

export function reset(){
  jQuery('#resultPopup').hide();
  gameReady();
  win = bet = gain = 0;
  pocket = hiScore = 50;
};

reset();

function audio() {
  muteButton.checked ? (audioWin.pause(), audioLoose.pause()) : win == 0 ? audioLoose.play() : win == 1 ? audioWin.play() : '';
};

// Click on bet's buttons
DOM_bet1.onclick = function () { game(bet = 1); };
DOM_bet2.onclick = function () { game(bet = 2); };
DOM_bet5.onclick = function () { game(bet = 5); };
DOM_bet10.onclick = function () { game(bet = 10); };

footerButtons();

jQuery('#titleButton').on("click", function(){reset();} );

// Principal game function
function game(round) {
  
  DOM_pocket.innerHTML = `Ta poche: ${pocket}$`;
  buttons("none","grey");
  jQuery('#vs').hide()

  // Swoosh sound effect
  muteButton.checked ? audioCard.pause() : audioCard.play();

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
    let sameGuild = playerCard.guild == ennemyCard.guild ? true : false ;
    let playerWin = playerCard.force > ennemyCard.force ? true : false ;
    let playerGuild = playerCard.guild == 'Comploteurs' ? true : false ;
    let ennemyGuild = ennemyCard.guild == 'Comploteurs' ? true : false ;

    // Sound conditions
    win = playerWin && !sameGuild ? 1 : playerWin && sameGuild ? 2 : !playerWin && !sameGuild ? 0 : !playerWin && sameGuild ? 3 : 4 ;
    
    // Gain conditions
    gain = win == 1 ? playerCard.force*(2*bet) : win == 2 ? playerCard.force*bet : win == 0 ? - (ennemyCard.force*(2*bet)) : win == 3 ? - (ennemyCard.force*bet) : - bet ;

    // Result conditions
    const text1 = `${winner} ${playerCard.character} ${action} ${ennemyCard.character}`;
    const text2 = `${winner} Tu as vaincu l'élite pédophile satanique avec ${playerCard.character}`;
    const text3 = `${winner} Entre comploteurs, ${playerCard.character} ${action} ${ennemyCard.character}`;
    const text4 = `${winner} ${ennemyCard.character} a succombé ! Tu es le survivant de ta guilde`;
    const text5 = `${looser} Le complot mondial t'${action} en utilisant ${ennemyCard.character}`;
    const text6 = `${looser} ${ennemyCard.character} ${action} ${playerCard.character}`;
    const text7 = `${looser} ${ennemyCard.character} t'${action}! Trop de complot tue le complot`;
    const text8 = `${looser} Entre complotistes, ${ennemyCard.character} ${action} ${playerCard.character}`;
    const text9 = `Match nul: personne n'est sorti vivant de ce duel`;

    var result = win == 1 && playerGuild ? `${text1}` : win == 1 && !playerGuild ? `${text2}` : 
    win == 2 && playerGuild ? `${text3}` : win == 2 && !playerGuild ? `${text4}` : 
    win == 0 && ennemyGuild ? `${text5}` : win == 0 && !ennemyGuild ? `${text6}` :  
    win == 3 && ennemyGuild ? `${text7}` : win == 3 && !ennemyGuild ? `${text8}` : win == 4 ? `${text9}` : '' ;

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
      jQuery('#stop').on("click", function () {
        noGame();
        record();
      } );

  // Audio conditions
      audio();
    }, 710);

  // Game Over
    setTimeout (() => {
      pocket <= 0 ? (setTimeout(() => { hiScore >= 500 ? record() : (DOM_result.innerHTML = `GAME OVER !<br>${end}`, gameOver() ) }, 500)) : '' ;

  // Bets buttons displaying conditions
      pocket <= 0 ?  betLimit(0) : pocket < 2 ? betLimit(1) : pocket < 5 ? betLimit(2) : pocket < 10 ? betLimit(5) : betLimit(10);

  // Stop button displaying condition
      pocket >= 500 ? jQuery('#stop').show() : jQuery('#stop').hide() ;
    }, 1000);

  // Set round 2
  round = 2;
  }

  // Back card in flip effect starting round 2
  else {
    setTimeout(() => { DOM_playerImage.innerHTML = DOM_ennemyImage.innerHTML = `<img src="assets/img/back.png"></img>`; }, 345);
    game(1);
  };
};