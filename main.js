"use strict";

const inputNumber = document.querySelector(".inputNumber");
const btnTest = document.querySelector(".btnTest");
const clue = document.querySelector(".clue");
const spanCounter = document.querySelector(".counter");
let counter = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const generatedNumber = getRandomNumber(100);
console.log(generatedNumber);


function onBtnTestClick(ev) {
    counter += 1;
    console.log(`counter = ${counter}`);
    spanCounter.innerHTML = counter;

    const num = inputNumber.value;
    console.log(`num = ${num}`);
    
    if (num >100 || num < 1){
        clue.innerHTML = "El número debe estar entre 1 y 100";
    } else if (num < generatedNumber) {
        clue.innerHTML = "Demasiado bajo";
    } else if (num > generatedNumber) {
        clue.innerHTML = "Demasiado alto";
    } else if (num == generatedNumber) {
        clue.innerHTML = "Has ganado campeona!!!";
    }
}

btnTest.addEventListener("click", onBtnTestClick);

