import { reset } from '../main.js'

// HTML various parts
export const DOM_game = document.getElementById("game");
export const DOM_pocket = document.getElementById("pocket");
export const DOM_formRecord = document.getElementById("formRecord");
export const DOM_rulesPop = document.getElementById("rulesPop");
export const DOM_cardProp = document.getElementById("cardProp");
export const DOM_help = document.getElementById("help");
export const DOM_scoresPop = document.getElementById("scoresPop");
export const DOM_playerImage = document.getElementById("playerImage");
export const DOM_ennemyImage = document.getElementById("ennemyImage");
export const DOM_replay = document.getElementById("replay");

export function gameReady(){
  DOM_game.style.display ="block";
  DOM_pocket.style.display ="block";
  DOM_pocket.innerHTML = `Ta poche: 50$`;
  DOM_formRecord.style.display = "none";
  DOM_cardProp.style.display = "none";
  DOM_replay.style.display = "none";
  jQuery('#resultPopup').hide();
  bets("inline-block");
  DOM_stop.style.display = "none";
  DOM_playerImage.innerHTML = DOM_ennemyImage.innerHTML = `<img src="assets/img/back.png"/>`;
};

export function gameOver(){
  jQuery('#resultPopup').stop(true, true);
  jQuery('#resultPopup').show();
  document.getElementById("gain").innerHTML = `Tu retentes ta chance ou tu abandonnes?`;
  DOM_replay.style.display="inline-block";
  DOM_replay.onclick = function () {
    reset();
  };
};

// Delete game part
export function noGame() {
  DOM_game.style.display ="none";
  DOM_pocket.style.display ="none";
};

// Audio
export const DOM_mute = document.getElementById('muteButton');
export const DOM_audioWin = document.getElementById("audioWin");
export const DOM_audioLoose = document.getElementById("audioLoose");
export const DOM_audioCard = document.getElementById("audioCard");

// Bets
export const DOM_bet1 = document.getElementById("bet1");
export const DOM_bet2 = document.getElementById("bet2");
export const DOM_bet5 = document.getElementById("bet5");
export const DOM_bet10 = document.getElementById("bet10");
export const DOM_stop = document.getElementById("stop");

// Bets buttons display
export function bets(display) {
    DOM_bet1.style.display = display;
    DOM_bet2.style.display = display;
    DOM_bet5.style.display = display;
    DOM_bet10.style.display = display;
    DOM_stop.style.display = display;
  }

// Bets buttons display conditions
export function betLimit(limit) {
  if (limit == 1) {
    DOM_bet1.style.display = "inline-block";
    DOM_bet2.style.display = "none";
    DOM_bet5.style.display = "none";
    DOM_bet10.style.display = "none";
  }
  else if (limit == 2) {
    DOM_bet1.style.display = "inline-block";
    DOM_bet2.style.display = "inline-block";
    DOM_bet5.style.display = "none";
    DOM_bet10.style.display = "none";
  }
  else if (limit == 5) {
    DOM_bet1.style.display = "inline-block";
    DOM_bet2.style.display = "inline-block";
    DOM_bet5.style.display = "inline-block";
    DOM_bet10.style.display = "none";
  }
  else if (limit == 10) {
    bets("inline-block");
  };
}

// Buttoncolors when enabled or disabled
function buttoncolor(over,out) {
  DOM_bet1.addEventListener("mouseover", function() {
    DOM_bet1.style.backgroundColor = over;
  });
  DOM_bet1.addEventListener("mouseout", function() {
    DOM_bet1.style.backgroundColor = out;
  });
  DOM_bet2.addEventListener("mouseover", function() {
    DOM_bet2.style.backgroundColor = over;
  });
  DOM_bet2.addEventListener("mouseout", function() {
    DOM_bet2.style.backgroundColor = out;
  });
  DOM_bet5.addEventListener("mouseover", function() {
    DOM_bet5.style.backgroundColor = over;
  });
  DOM_bet5.addEventListener("mouseout", function() {
    DOM_bet5.style.backgroundColor = out;
  });
  DOM_bet10.addEventListener("mouseover", function() {
    DOM_bet10.style.backgroundColor = over;
  });
  DOM_bet10.addEventListener("mouseout", function() {
    DOM_bet10.style.backgroundColor = out;
  });
};

export function buttons(pointerevents,color) {
  DOM_bet1.style.pointerEvents = pointerevents;
  DOM_bet2.style.pointerEvents = pointerevents;
  DOM_bet5.style.pointerEvents = pointerevents;
  DOM_bet10.style.pointerEvents = pointerevents;
  DOM_bet1.style.backgroundColor = color;
  DOM_bet2.style.backgroundColor = color;
  DOM_bet5.style.backgroundColor = color;
  DOM_bet10.style.backgroundColor = color;
  if (color == '#4CAF50') {
    buttoncolor("#008CBA", "#4CAF50");
  };
}

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