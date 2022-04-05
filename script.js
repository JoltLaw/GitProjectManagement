// Pulling in Html Elements
const targetColor = document.getElementById("color");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const modal = document.getElementById("modal");
const Correct = document.getElementById("Correct");
const Wrong = document.getElementById("Wrong");

// Js variables
let RGB;
let orbObj;
let orb;
const orbArray = [color1, color2, color3, color4, color5];
let wrongOrbs = [];

// Generate numbers for rgb colors
function numberGen() {
    let number = Math.floor(Math.random() * 10);
    return number;
}

// edit HTML for the correct answer
function Correctanswer() {
modal.hidden = false;
Correct.hidden = false;
setTimeout(function(){ 
    modal.hidden = true;
    Correct.hidden = true;
}, 750);
generateColor(orb);
}

// edit HTML for a wrong answer
function wrongAnswer () {
    modal.hidden = false;
    Wrong.hidden = false;
    setTimeout(function(){
        modal.hidden = true;
        Wrong.hidden = true;
    }, 750);
    generateColor();
}

// Adding color to the other orbs
function colorWrongOrbs(orb1, orb2, orb3, orb4) {
    wrongOrbs.push(orb1, orb2, orb3, orb4);
    wrongOrbs.forEach((orb) => {
      let backGroundColor = `(${numberGen()}${numberGen()}${numberGen()}, ${numberGen()}${numberGen()}${numberGen()}, ${numberGen()}${numberGen()}${numberGen()})`;
      orb.style.backgroundColor = `rgb${backGroundColor}`;
      if (backGroundColor == RGB) {
          orb.addEventListener("click", Correctanswer);
      } else if (orb.style.backgroundColor == "rgb(255, 255, 255)") {
          while (orb.style.backgroundColor == "rgb(255, 255, 255)") {
            let backGroundColor = `(${numberGen()}${numberGen()}${numberGen()}, ${numberGen()}${numberGen()}${numberGen()}, ${numberGen()}${numberGen()}${numberGen()})`;
            orb.style.backgroundColor = `rgb${backGroundColor}`;
          }
          if (backGroundColor == RGB) {
            orb.addEventListener("click", Correctanswer);
        }   else {
            orb.addEventListener("click", wrongAnswer);
        }
      } else {
          orb.addEventListener("click", wrongAnswer);
      }
    });
}

// Adding color to correct orb, and making sure that the color loads properly
function addColors() {
    orb = Math.floor(Math.random() * 10) + 1;
    if (orb <= 2) {
        orb = color1;
        orb.style.backgroundColor = `rgb${RGB}`;
        if (orb.style.backgroundColor == "rgb(255, 255, 255)") {
            generateColor();
        }
    else {
    orb.addEventListener("click", Correctanswer);
    colorWrongOrbs(color2, color3, color4, color5);
    }
    } 
    else if (orb <= 4) {
        orb = color2;
        orb.style.backgroundColor = `rgb${RGB}`;
        if (orb.style.backgroundColor == "rgb(255, 255, 255)") {
            generateColor();
        }
    else {
    orb.addEventListener("click", Correctanswer);
    colorWrongOrbs(color1, color3, color4, color5);
    }
    }   
    else if (orb <= 6) {
        orb = color3;
        orb.style.backgroundColor = `rgb${RGB}`;
        if (orb.style.backgroundColor == "rgb(255, 255, 255)") {
            generateColor();
        }
    else {
    orb.addEventListener("click", Correctanswer);
    colorWrongOrbs(color1, color2, color4, color5);
    }
    }   
    else if (orb <= 8) {
        orb = color4;
        orb.style.backgroundColor = `rgb${RGB}`;
        if (orb.style.backgroundColor == "rgb(255, 255, 255)") {
            generateColor();
        }
    else {
    orb.addEventListener("click", Correctanswer);
    colorWrongOrbs(color1, color2, color3, color5);
    }
    }   
    else if (orb <= 10) {
        orb = color5;
        orb.style.backgroundColor = `rgb${RGB}`;
        if (orb.style.backgroundColor == "rgb(255, 255, 255)") {
            generateColor();
        }
    else {
    orb.addEventListener("click", Correctanswer);
    colorWrongOrbs(color1, color2, color3, color4);
    }
    }
}

// Starting up the game
function generateColor(orb) {
    orbArray.forEach((orb) => {
        orb.removeEventListener("click", Correctanswer);
        orb.removeEventListener("click", wrongAnswer);
    });
    RGB = `(${numberGen()}${numberGen()}${numberGen()}, ${numberGen()}${numberGen()}${numberGen()}, ${numberGen()}${numberGen()}${numberGen()})`;
    targetColor.textContent = `Color:${RGB}`;
    addColors();
    
}

generateColor();