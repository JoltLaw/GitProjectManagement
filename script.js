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
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    let number3 = Math.floor(Math.random() * 10);
    let fullNumber = `${number1}${number2}${number3}`
    if (255 <= parseInt(fullNumber)) {
        return numberGen();
    } else {
        return fullNumber;
    }}


// edit HTML for the correct answer
function Correctanswer() {
modal.hidden = false;
Correct.hidden = false;
setTimeout(function(){ 
    modal.hidden = true;
    Correct.hidden = true;
}, 750);
cleanLastGame();
generateColor();
}

// edit HTML for a wrong answer
function wrongAnswer () {
    modal.hidden = false;
    Wrong.hidden = false;
    setTimeout(function(){
        modal.hidden = true;
        Wrong.hidden = true;
    }, 750);
    cleanLastGame();3
    generateColor();
}

// Adding color to the other orbs
function colorWrongOrbs() {
    wrongOrbs.forEach((orb) => {
    let redScaleWR = `${numberGen()},`;
    let greenScaleWR = ` ${numberGen()},`;
    let blueScaleWR = ` ${numberGen()}`;
    orb.style.backgroundColor = `rgb(${redScaleWR}${greenScaleWR}${blueScaleWR})`;
    orb.addEventListener("click", wrongAnswer);
      
    });
}

// Adding color to correct orb, and making sure that the color loads properly
function addColors() {
    orb = Math.floor(Math.random() * 10) + 1;
    if (orb <= 2) {
        color1.style.backgroundColor = targetColor.textContent;
        color1.addEventListener("click", Correctanswer);
    wrongOrbs.push(color2, color3, color4, color5);
    colorWrongOrbs();
    } 
    else if (orb <= 4) {
        color2.style.backgroundColor = targetColor.textContent;
        color2.addEventListener("click", Correctanswer);
    wrongOrbs.push(color1, color3, color4, color5);
    colorWrongOrbs();
    }
      
    else if (orb <= 6) {
        color3.style.backgroundColor = targetColor.textContent;
        color3.addEventListener("click", Correctanswer);
    wrongOrbs.push(color1, color2, color4, color5);
    colorWrongOrbs();
    }
       
    else if (orb <= 8) {
        color4.style.backgroundColor = targetColor.textContent;
        color4.addEventListener("click", Correctanswer);
    wrongOrbs.push(color1, color2, color3, color5);
    colorWrongOrbs();
    }   
    else if (orb <= 10) {
        color5.style.backgroundColor = targetColor.textContent;
        color5.addEventListener("click", Correctanswer);
    wrongOrbs.push(color1, color2, color3, color4);
    colorWrongOrbs();
    }
} 

function cleanLastGame() {
    orbArray.forEach((orb) => {
        orb.removeEventListener("click", Correctanswer);
        orb.removeEventListener("click", wrongAnswer);
        orb.style.backgroundColor = ""
        wrongOrbs = [];
    })
}

// Starting up the game
function generateColor(orb) {
    // cleanLastGame();
    let redScale = `${numberGen()}`
    let greenScale = `${numberGen()}`
    let blueScale = `${numberGen()}`
    targetColor.textContent = `rgb(${redScale}, ${greenScale}, ${blueScale})`;
    addColors();
    
}

generateColor();