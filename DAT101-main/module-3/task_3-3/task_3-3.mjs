"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const time = new Date();
printOut(time.toLocaleString("no-NB", { timeZone: "Europe/Oslo" }));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calcDaysToGTA() {
    const toDay = new Date();
    const gtaDate = new Date("11/19/2026");
    printOut(gtaDate.toLocaleString("no-Nb"));
    const days = (gtaDate - toDay) / (1000 * 60 * 60 * 24);
    printOut(`There is ${Math.floor(days)} days left to GTA-6 release.`);
}
calcDaysToGTA();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateCircle(aRadius) {
    const diameter = aRadius * 2;
    const circumference = diameter * Math.PI;
    const area = Math.PI * Math.pow(aRadius, 2);
    printOut(`Diam.: ${diameter}, circum.: ${circumference}, area: ${area}`);
}

calculateCircle(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calcRectangle(aWidth, aHeight) {
    const circumference = (2 * aWidth) + (2 * aHeight);
    const area = aWidth * aHeight;

    printOut(`Circum.: ${circumference}, area: ${area}`);
}

calcRectangle(2, 4);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Fahrenheit = (kelvin - 273.15) * 9/5 + 32
// Fahrenheit = (celcius * 9/5) +32
const TempType = {
    Fahrenheit: 1, Celcius: 2, Kelvin: 3
}

function convertTemp(aTemp, aType) {
    let fahrenheit = 0;
    let celcius = 0;
    let kelvin = 0;
    switch (aType) {
        case TempType.Fahrenheit:
            fahrenheit = aTemp;
            celcius = (fahrenheit - 32) * 5 / 9;
            kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
            break;
        case TempType.Celcius:
            celcius = aTemp;
            fahrenheit = (celcius * 9 / 5) + 32;
            kelvin = celcius + 273.15;
            break;
        case TempType.Kelvin:
            kelvin = aTemp;
            fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
            celcius = kelvin - 273.15;
            break;
    }
    printOut(`${celcius.toFixed(0)} Celcius, ${fahrenheit.toFixed(0)} Fahrenheit, ${kelvin.toFixed(0)} Kelvin`)
}

convertTemp(38, TempType.Celcius);
convertTemp(-40, TempType.Fahrenheit);
convertTemp(0, TempType.Kelvin);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function calcVAT(aAmount, aVATGroup) {
    let vat = 0;
    const vatGroup = aVATGroup.toLowerCase();
    switch (vatGroup) {
        case "normal":
            vat = 25;
            break;
        case "food":
            vat = 15;
            break;
        case "hotel":
        case "transport":
        case "cinema":
            vat = 10;
            break;
        default:
            printOut(`Unknown VAT group!`);
            return; // Vi kan bruke return for å avslutte funksjonen tidlig
    }
    //if (vat != 0) {


    const vatAmount = vat * aAmount / 100;
    const netAmount = aAmount + vatAmount;

    printOut(`Amount: ${aAmount}, VAT: ${vatAmount}, Net: ${netAmount}`);
    //  }
}

calcVAT(100, "Normal");
calcVAT(90, "Cinema");
calcVAT(50, "Shampoo");

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function calcMotion(aSpeed, aDistance, aTime) {
    if (aSpeed != undefined && aDistance != undefined && aTime == undefined) {
        return aDistance / aSpeed;
    } else if (aSpeed != undefined && aTime != undefined && aDistance == undefined) {
        return aSpeed * aTime;
    } else if (aDistance != undefined && aTime != undefined && aSpeed == undefined) {
        return aDistance / aTime;
    } else {
        return NaN;
    }
}

let speed = calcMotion(undefined, 100, 2);
printOut(`Speed = ${speed}`);
let timeTaken = calcMotion(50, 100, undefined);
printOut(`Time = ${timeTaken}`);
let distance = calcMotion(undefined, undefined, 3)
printOut(`Distance = ${distance}`);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function justifyText(aText, aMaxSize, aChar, aBefore) {
    let length = aText.length;
    while (length < aMaxSize) {
        if (aBefore) {
            aText = aChar + aText;
        } else {
            aText = aText + aChar;
        }
        length++;
    }
    return aText;
}

let newText = justifyText("Hello World!", 100, "-", true);
printOut(newText);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let counter = 1;

function calcLeftSide(aRound) {
    let sum = 0;
    for (let i = 1; i <= aRound + 1; i++) {
        sum += counter;
        counter++;
    }
    return sum;
}

function calcRightSide(aRound) {
    let sum = 0;
    for (let i = 1; i <= aRound; i++) {
        sum += counter;
        counter++;
    }
    return sum;
}

let mathIsCorrect = true;
for (let round = 1; round <= 200; round++) {
    const left = calcLeftSide(round);
    const right = calcRightSide(round);
    if (left !== right) {
        printOut(`Left side is not equal to right side for round ${round}`);
        mathIsCorrect = false;
        break; //Her kan vi stoppe for-løkken 
    }

}

if (mathIsCorrect) {
    printOut(`Math is fun!!!`);
}


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Eksempel!*/
let roundCounter = 0;
function PrintText(aText) {
    roundCounter++;
    printOut(aText);
    if (roundCounter < 10) {
        PrintText(aText);
    }
}

PrintText("Hei på deg!");
printOut(newLine);


function factorial(aValue) {
    let sum = 1;
    if (aValue > 1) {
        sum = aValue * factorial(aValue - 1);
    }
    return sum;
}

const result = factorial(6);
printOut(`Factroial of 6 = ${result}`);
printOut(6 * 5 * 4 * 3 * 2 * 1);


printOut(newLine);
