// HTML various parts
export const DOM_rulesPop = document.getElementById("rulesPop");
export const DOM_help = document.getElementById("help");
export const DOM_scoresPop = document.getElementById("scoresPop");

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
  if (limit == 0) {
    bets("none");
  }
  else if (limit == 1) {
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