import { DOM_stop, bets, buttons } from '../constants/display.js';
import { reset } from '../main.js';
import { text } from '../constants/text.js';

export const DOM_pocket = document.getElementById("pocket");
export const DOM_playerImage = document.getElementById("playerImage");
export const DOM_ennemyImage = document.getElementById("ennemyImage");
export const DOM_gain = document.getElementById("gain");
export const DOM_result = document.getElementById("result");
export const DOM_formCardProp = document.getElementById("formCardProp");
export const DOM_formRecord = document.getElementById("formRecord");

// Set environment to start the game
export function gameReady(){
    jQuery('#game').show();
    DOM_pocket.style.display ="block";
    DOM_pocket.innerHTML = `${text.pocket}50$`;
    jQuery('#scoresPopForm').hide();
    jQuery('#replay').hide();
    jQuery('#resultPopup').hide();
    bets("inline-block");
    buttons("auto","#4CAF50");
    DOM_stop.style.display = "none";
    DOM_playerImage.innerHTML = DOM_ennemyImage.innerHTML = `<img src="assets/img/back.png"/>`;
  };

// Set environment when game is over
export function gameOver(){
    jQuery('#resultPopup').stop(true, true);
    jQuery('#resultPopup').show();
    DOM_gain.innerHTML = `${text.replay}`;
    jQuery('#replay').show();
    jQuery('#replay').on("click", function () { reset(); } );
  };

// Delete game part
export function noGame() {
  jQuery('#game').hide();
  jQuery('#stop').hide();
  bets("none");
  DOM_pocket.style.display ="none";
  };

// Display cards
export function cardDisplay({ guild, group, force, fileName, character, info, effect }, DOM_player) {
  
    // Delete old card
    DOM_player.innerHTML = "";
  
    // Copy DOM node of card template
    const DOM_card = document.getElementById("card").cloneNode(true);
    DOM_card.id = `card-${DOM_player.id}`;
    DOM_card.style.display = "block"; // change style to enable display (display: none; in css)
  
  
  
    // Bring values to card template in HTML
    DOM_card.querySelector('.character').innerHTML = character;
    DOM_card.querySelector('.force').innerHTML = force;
    DOM_card.querySelector('.image').style.backgroundImage = `url('assets/img/card/${fileName}.jpeg')`;
    DOM_card.querySelector('.band').innerHTML = `${guild} / ${group}`;
    DOM_card.querySelector('.info').innerHTML = info;
    DOM_card.querySelector('.effect').innerHTML = effect;
  
    // Add class to force to set color
    DOM_card.querySelector('.force').classList.add(`force-${force}`);
  
    // Fill player's DOM with new card
    DOM_player.appendChild(DOM_card);
  }
  
// Flip effect
export function flipCards() {
    document.getElementById('flipCard').classList.toggle('doFlip');
    document.getElementById('flipCard2').classList.toggle('doFlip2');
  };