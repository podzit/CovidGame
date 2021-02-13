import { deck } from './constants/deck.js';
import { words, over } from './constants/words.js';
import { betLimit, buttons } from './constants/display.js';
import { DOM_mute, DOM_audioWin, DOM_audioLoose, DOM_audioCard } from './constants/display.js';
import { DOM_stop, DOM_bet1, DOM_bet2, DOM_bet5, DOM_bet10 } from './constants/display.js';
import { DOM_playerImage, DOM_ennemyImage, DOM_pocket, DOM_gain, DOM_cardProp, DOM_result, DOM_formRecord } from './constants/game.js';
import { gameReady, gameOver, cardDisplay, noGame, flipCards } from './constants/game.js';

document.getElementById("title").innerHTML = "Covid Game v3.2"

var win = 0 , gain = 0 , bet = 0 , pocket = 0 , hiScore = 0;

export function reset(){
  gameReady();
  win = bet = gain = 0;
  pocket = hiScore = 50;
};

reset();

function audio() {
  DOM_mute.checked ? (DOM_audioWin.pause(), DOM_audioLoose.pause()) : win == 0 ? DOM_audioLoose.play() : win == 1 ? DOM_audioWin.play() : '';
}; 

// Display record form
function record() {
  jQuery('#formRecord').show();
  noGame();
  document.getElementById("score").innerHTML = `Ton meilleur score: ${hiScore}`;
  DOM_formRecord.addEventListener('submit', (event) => {
    DOM_formRecord.record.value =`${hiScore}`
  });
};

// Display card proposition preview
function cardPreview(){
  DOM_cardProp.email.value = '';
  DOM_cardProp.captcha.value = '';
  DOM_cardProp.imageUrl.value = DOM_cardProp.imageUrl.value == "https://" ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" : DOM_cardProp.imageUrl.value ;
  jQuery('#cardPreviewDisplay').show();
  document.getElementById("characterPreview").innerHTML = `${DOM_cardProp.characterName.value}`;
  document.getElementById("forcePreview").innerHTML = `${DOM_cardProp.force.value}`;
  document.getElementById("imagePreview").innerHTML = `<img src="${DOM_cardProp.imageUrl.value}" width="329" height="234" />`;
  document.getElementById("bandPreview").innerHTML = `${DOM_cardProp.guild.value} / ${DOM_cardProp.group.value}`;
  document.getElementById("infoPreview").innerHTML = `${DOM_cardProp.info.value}`;
  document.getElementById("effectPreview").innerHTML = `${DOM_cardProp.effect.value}`;
  jQuery('#closePreview').on("click", function() {
    jQuery('#cardPreviewDisplay').hide();
  } );
};

// Click on bet's buttons
DOM_bet1.onclick = function () { game(bet = 1); };
DOM_bet2.onclick = function () { game(bet = 2); };
DOM_bet5.onclick = function () { game(bet = 5); };
DOM_bet10.onclick = function () { game(bet = 10); };

// Click on footer's buttons
jQuery('#rulesButton').on("click", function() { jQuery('#rulesPop').show(); } );
jQuery('#closeRules').on("click", function() { jQuery('#rulesPop').hide(); } );
jQuery('#scoresButton').on("click", function() { jQuery('#scoresPop').show(); } );
jQuery('#closeScores').on("click", function() { jQuery('#scoresPop').hide(); } );
jQuery('#cardPropButton').on("click", function() {
  jQuery('#cardProp').show();
  noGame();
  betLimit(0);
  jQuery('#stop').hide();
  jQuery('#formRecord').hide();
  jQuery('#previewButton').on("click", function() { cardPreview(); } );
  jQuery('#helpButton').on("click", function(){ jQuery('#help').show(); } );
  jQuery('#closeHelp').on("click", function(){ jQuery('#help').hide(); } );
} );

jQuery('#titleButton').on("click", function(){reset();} );

// Principal game function
function game(round) {
  
  DOM_pocket.innerHTML = `Ta poche: ${pocket}$`;
  buttons("none","grey");
  jQuery('#vs').hide()

  // Swoosh sound effect
  DOM_mute.checked ? DOM_audioCard.pause() : DOM_audioCard.play();

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
    const text1 = `${winner} ${playerCard.character} ${action} ${ennemyCard.character}`;
    const text2 = `${winner} Tu as vaincu l'élite pédophile satanique avec ${playerCard.character}`;
    const text3 = `${winner} Entre comploteurs, ${playerCard.character} ${action} ${ennemyCard.character}`;
    const text4 = `${winner} ${ennemyCard.character} a succombé ! Tu es le survivant de ta guilde`;
    const text5 = `${looser} Le complot mondial t'${action} en utilisant ${ennemyCard.character}`;
    const text6 = `${looser} ${ennemyCard.character} ${action} ${playerCard.character}`;
    const text7 = `${looser} ${ennemyCard.character} t'${action}! Trop de complot tue le complot`;
    const text8 = `${looser} Entre complotistes, ${ennemyCard.character} ${action} ${playerCard.character}`;
    const text9 = `Match nul: personne n'est sorti vivant de ce duel`;

    // Sound conditions
    win = playerWin && !sameGuild ? 1 : playerWin && sameGuild ? 2 : 
    !playerWin && !sameGuild ? 0 : !playerWin && sameGuild ? 3 : 4 ;
    
    // Gain conditions
    gain = win == 1 ? playerCard.force*(2*bet) : win == 2 ? playerCard.force*bet : 
    win == 0 ? - (ennemyCard.force*(2*bet)) : win == 3 ? - (ennemyCard.force*bet) : - bet ;

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
      DOM_stop.onclick = function () {
        betLimit(0);
        noGame();
        record();
      };

  // Audio conditions
      audio();

      }, 710);

  // Game Over
    setTimeout (() => {
      pocket <= 0 ? (setTimeout(() => { hiScore >= 500 ? record() : (DOM_result.innerHTML = `GAME OVER !<br>${end}`, gameOver() ) }, 500)) : '' ;

  // Bets buttons displaying conditions
      pocket <= 0 ?  betLimit(0) : pocket < 2 ? betLimit(1) : pocket < 5 ? betLimit(2) : 
      pocket < 10 ? betLimit(5) : betLimit(10);

  // Stop button displaying condition
      pocket >= 500 ? jQuery('#stop').show() : jQuery('#stop').hide() ;

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