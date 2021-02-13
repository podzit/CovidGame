import { DOM_formRecord, noGame, DOM_cardProp } from './game.js';
import { hiScore } from '../main.js';

// Click on footer's buttons
export function footerButtons(){
  jQuery('#rulesButton').on("click", function() { jQuery('#rulesPop').show(); } );
  jQuery('#closeRules').on("click", function() { jQuery('#rulesPop').hide(); } );
  jQuery('#scoresButton').on("click", function() { jQuery('#scoresPop').show(); } );
  jQuery('#closeScores').on("click", function() { jQuery('#scoresPop').hide(); } );
  jQuery('#cardPropButton').on("click", function() {
    jQuery('#cardProp').show();
    noGame();
    betLimit(0);
    jQuery('#formRecord').hide();
    jQuery('#previewButton').on("click", function() { cardPreview(); } );
    jQuery('#helpButton').on("click", function(){ jQuery('#help').show(); } );
    jQuery('#closeHelp').on("click", function(){ jQuery('#help').hide(); } );
  } );
}

// Display record form
export function record() {
  jQuery('#formRecord').show();
  noGame();
  document.getElementById("score").innerHTML = `Ton meilleur score: ${hiScore}`;
  DOM_formRecord.addEventListener('submit', (event) => {
    DOM_formRecord.record.value =`${hiScore}`
  });
};

// Display card proposition preview
export function cardPreview(){
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

// Audio
export const muteButton = document.getElementById('muteButton');
export const audioWin = document.getElementById("audioWin");
export const audioLoose = document.getElementById("audioLoose");
export const audioCard = document.getElementById("audioCard");

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
  if (limit == 0) {
    bets("none");
  }
  else if (limit == 1) {
    jQuery('#bet1').show();
    jQuery('#bet2').hide();
    jQuery('#bet5').hide();
    jQuery('#bet10').hide();
  }
  else if (limit == 2) {
    jQuery('#bet1').show();
    jQuery('#bet2').show();
    jQuery('#bet5').hide();
    jQuery('#bet10').hide();
  }
  else if (limit == 5) {
    jQuery('#bet1').show();
    jQuery('#bet2').show();
    jQuery('#bet5').show();
    jQuery('#bet10').hide();
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