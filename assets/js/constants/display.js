import { DOM_formRecord, DOM_formCardProp } from './game.js';
import { hiScore, reset } from '../main.js';
import { text } from './text.js';

// Audio
export const muteButton = document.getElementById('muteButton');
export const audioWin = document.getElementById("audioWin");
export const audioLoose = document.getElementById("audioLoose");
export const audioCard = document.getElementById("audioCard");

// Bets buttons
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

// Display record form
export function record() {
  jQuery('#scoresPopForm').toggle("fade");
  document.getElementById("score").innerHTML = `${text.hiScore} ${hiScore}`;
  document.getElementById("scoreName").innerHTML = `${text.scoreName}`;
}

// Click on record button
jQuery('#recordButton').on("click", function() {
  scorePost();
  jQuery('#scoresPopForm').toggle();
  reset();
  scoreRead();
});

// Post data from record form
function scorePost(){
  // GET FORM DATA
  let data = new FormData();
  data.append("name", DOM_formRecord.name.value);
  data.append("record", hiScore);
 
  // AJAX
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "scoresWrite.php");

  // What to do when server responds
  //xhr.onload = function(){ console.log(data); };
  xhr.send(data);
}

// Read scores file
function scoreRead(){
  jQuery('#scoresPop').toggle("fade");
  jQuery('#scores').load("scoresRead.php");
}


// Display card proposition preview
function cardPreview(){
  DOM_formCardProp.captcha.value = '';
  let imageUrl = DOM_formCardProp.imageUrl.value == "https://" ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" : DOM_formCardProp.imageUrl.value ;
  jQuery('#cardPreviewDisplay').toggle("fade");
  document.getElementById("characterPreview").innerHTML = `${DOM_formCardProp.characterName.value}`;
  document.getElementById("forcePreview").innerHTML = `${DOM_formCardProp.force.value}`;
  document.getElementById("imagePreview").innerHTML = `<img src="${imageUrl}" width="329" height="234" />`;
  document.getElementById("bandPreview").innerHTML = `${DOM_formCardProp.guild.value} / ${DOM_formCardProp.group.value}`;
  document.getElementById("infoPreview").innerHTML = `${DOM_formCardProp.info.value}`;
  document.getElementById("effectPreview").innerHTML = `${DOM_formCardProp.effect.value}`;
  jQuery('#closePreview').on("click", function() {
    jQuery('#cardPreviewDisplay').hide("fade");
  } );
};

// Click on send button on card prop form
jQuery('#sendButton').on("click", function(){
  DOM_formCardProp.captcha.value == 5 ? cardPost() : (
    (document.getElementById('mail').innerHTML = `${text.captchaError}`),
    jQuery('#replayButton').on("click", function(){
      jQuery('#mailPop').hide("fade");
      DOM_formCardProp.captcha.value = '';
    })
    );
  jQuery('#mailPop').show("fade");
});

// Post data from card prop form
function cardPost(){
  // GET FORM DATA
  let data = new FormData();
  data.append("characterName", DOM_formCardProp.characterName.value);
  data.append("force", DOM_formCardProp.force.value);
  data.append("imageUrl", DOM_formCardProp.imageUrl.value);
  data.append("guild", DOM_formCardProp.guild.value);
  data.append("group", DOM_formCardProp.group.value);
  data.append("info", DOM_formCardProp.info.value);
  data.append("effect", DOM_formCardProp.effect.value);
  data.append("email", DOM_formCardProp.email.value);
      
  // AJAX
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "mail.php");
    
  // What to do when server responds
  //xhr.onload = function(){ console.log(data); };
  xhr.send(data);
  document.getElementById('mail').innerHTML = `${text.thanx}`;
  jQuery('#replayButton').on("click", function(){
    jQuery('#mailPop').hide("fade");
    reset();
    DOM_formCardProp.captcha.value = '';
  });
}

// Click on footer's buttons
export function footerButtons(){
  jQuery('#rulesButton').on("click", function() { 
    jQuery('#rulesPop').toggle("fade");
    jQuery('#scoresPop').hide();
    jQuery('#cardPropPop').hide(); 
    jQuery('#cardPreviewDisplay').hide();
    jQuery('#helpPop').hide();
  } );
  jQuery('#closeRules').on("click", function() { jQuery('#rulesPop').toggle("fade"); } );
  jQuery('#scoresButton').on("click", function() {
    jQuery('#cardPropPop').hide(); 
    jQuery('#cardPreviewDisplay').hide();
    jQuery('#helpPop').hide();
    jQuery('#rulesPop').hide();
    scoreRead();
  } );
  jQuery('#closeScores').on("click", function() { jQuery('#scoresPop').toggle("fade"); } );
  jQuery('#cardPropButton').on("click", function() {
    jQuery('#cardPropPop').toggle("fade");
    jQuery('#scoresPopForm').hide();
    jQuery('#scoresPop').hide();
    jQuery('#rulesPop').hide();
    jQuery('#previewButton').on("click", function() { cardPreview(); } );
    jQuery('#helpButton').on("click", function(){ 
      jQuery('#helpPop').show("fade"); 
    } );
    jQuery('#closeHelp').on("click", function(){ jQuery('#helpPop').hide("fade"); } );
    jQuery('#closeCardPropButton').on("click", function(){
      jQuery('#cardPropPop').hide("fade"); 
      jQuery('#cardPreviewDisplay').hide("fade");
      jQuery('#helpPop').hide("fade");
    });
  } );
}

document.getElementById("closeScores").innerHTML = `${text.close}`;
document.getElementById("closeRules").innerHTML = `${text.close}`;
document.getElementById("closeCardPropButton").innerHTML = `${text.close}`;
document.getElementById("closePreview").innerHTML = `${text.close}`;
document.getElementById("replayButton").innerHTML = `${text.close}`;
document.getElementById("closeHelp").innerHTML = `${text.close}`;
document.getElementById("titleScores").innerHTML = `${text.titleScores}`;
document.getElementById("help").innerHTML = `${text.help}`;
document.getElementById("textRules").innerHTML = `${text.rules}`;