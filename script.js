let honger = true;
let sjaal = false;
let zonnebril = false;
let slapen = false;

let userInput = prompt("Wat is je naam?");
console.log(userInput);

const image = document.getElementById("image1");
const etenButton = document.getElementById("eten");
const sjaalButton = document.getElementById("sjaal");
const zonnebrilButton = document.getElementById("zonnebril");
const slapenButton = document.getElementById("slapen");
const naamveld = document.querySelector("#naamveld");

const bubbels = ["images/tekstHonger.png", "images/tekstSjaal.png", "images/tekstBril.png", "images/tekstSlaap.png"];
//Images map kleine letter

let state = "normaal";

function groet(naam) {
    naamveld.textContent = "Welkom " + naam;
}
groet(userInput);

let randomizer = Math.floor(Math.random() * bubbels.length);
console.log(randomizer);
image.src = bubbels[randomizer]; //bubbel


if (randomizer == 0) {
    honger = true;
} else if (randomizer == 1) {
    sjaal = true;
} else if (randomizer == 2) {
    zonnebril = true;
} else if (randomizer == 3) {
    slapen = true;
}

function conditieOvergang() {
    console.log("timer");
    randomizer = Math.floor(Math.random() * bubbels.length);
    console.log(randomizer);
    image.src = bubbels[randomizer];
    if (randomizer == 0) {
        honger = true;
    } else if (randomizer == 1) {
        sjaal = true;
    } else if (randomizer == 2) {
        zonnebril = true;
    } else if (randomizer == 3) {
        slapen = true;
    }
    state = "normaal";
    if (state == "normaal") {
        clearInterval(overgang);
    }
}

let overgang;

function eten() {
    if (state == "normaal" && honger) {
        image.src = "images/leeuwtjeVlees.png";
        state = "eten";
        honger = false;
        console.log("gegeten");
        overgang = setInterval(conditieOvergang, 5000);
    } else {
        console.log("ERROR")
    }
}
function sjaalActie() {
    if (state == "normaal" && sjaal) {
        image.src = "images/leeuwtjeSjaal.png";
        state = "koud";
        sjaal = false;
        console.log("sjaal om");
        overgang = setInterval(conditieOvergang, 5000);
    } else {
        console.log("ERROR")
    }
}

function zonnebrilActie() {
    if (state == "normaal" && zonnebril) {
        image.src = "images/leeuwtjeBril.png";
        state = "pijn";
        zonnebril = false;
        console.log("zonnebril op");
        overgang = setInterval(conditieOvergang, 5000);
    } else {
        console.log("ERROR")
    }
}

function slapenActie() {
    if (state == "normaal" && slapen) {
        image.src = "images/leeuwtjeSlapen.png";
        state = "moe";
        slapen = false;
        console.log("slapen");
        overgang = setInterval(conditieOvergang, 5000);
    } else {
        console.log("ERROR")
    }
}

etenButton.addEventListener("click", eten);
sjaalButton.addEventListener("click", sjaalActie);
zonnebrilButton.addEventListener("click", zonnebrilActie);
slapenButton.addEventListener("click", slapenActie);

