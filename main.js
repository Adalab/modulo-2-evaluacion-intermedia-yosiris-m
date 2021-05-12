"use strict";

const inputNumber = document.querySelector(".inputNumber");
const btnTest = document.querySelector(".btnTest");
const clue = document.querySelector(".clue");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const generatedNumber = getRandomNumber(100);
console.log(generatedNumber);


function onBtnTestClick(ev) {
    const num = inputNumber.value;
    console.log(`num = ${num}`)
    
    if (num >100 || num < 1){
        console.log("El número debe estar entre 1 y 100")
    } else if (num < generatedNumber) {
        console.log("Demasiado bajo");
    } else if (num > generatedNumber) {
        console.log("Demasiado alto");
    } else if (num == generatedNumber) {
        console.log("Has ganado campeona!!!");
    }
}

btnTest.addEventListener("click", onBtnTestClick);

