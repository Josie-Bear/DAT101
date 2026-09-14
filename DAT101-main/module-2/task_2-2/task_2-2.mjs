"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//Use JavaScript to calculate the following expression, ensuring the result is -34:
//
const orgMatExp = "2 + 3 * 2 - 4 * 6";
const newMatExp = "2 + 3 * (2 - 4) * 6";
const part1Answer = 2 + 3 * (2 - 4) * 6
printOut(orgMatExp);
printOut(newMatExp);
printOut(part1Answer);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let millimeters = (25*1000) + (34*10);
printOut(millimeters);

const millPrInch = 25.4;
printOut(millPrInch);

let sumPart2 = millimeters / millPrInch;
printOut(sumPart2);

const oneInch = 25.4; // millimeters
const metersInMill = 25*1000;
const centInMill = 34*10;
const mill = metersInMill + centInMill;
const inches = mill / oneInch;
printOut(`25 meters = ${inches.toFixed(2)} inches`);


const inches_2 =((25*1000 + 34*10) / 25.4).toFixed(2);
printOut(`25 meters = ${inches_2} inches`);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let InADay = (3 * (24*60)) + (12 * 60) + 14 + (45/60);

printOut(InADay);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays = 6322.52 / (24 * 60);
let wholeDays = Math.floor(totalDays);

let leftoverDays = totalDays - wholeDays;
let totalHours = leftoverDays * 24;
let wholeHours = Math.floor(totalHours);

let leftoverHours = totalHours - wholeHours;
let totalMinutes = leftoverHours * 60;
let wholeMinutes = Math.floor(totalMinutes);

let leftoverSeconds = totalMinutes - wholeMinutes;
let totalSeconds = leftoverSeconds * 60;
let wholeSeconds = Math.floor(totalSeconds);

printOut(wholeDays);
printOut(wholeHours);
printOut(wholeMinutes);
printOut(wholeSeconds);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const USD = 54;
const USDExchangeRate = 75 / 8.6;
const NOK = USD * USDExchangeRate;
printOut(`54 USD = ${Math.round(NOK)} NOK`);

const NOKExchangeRate = 8.6 / 76;
const USDFromNOK = NOK * NOKExchangeRate;
printOut(`${Math.round(NOK)} NOK = ${Math.round(USDFromNOK)} USD `);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "There is much between heaven and earth that we do not understand.";
printOut(text);
let charText = text.length;
printOut(`Antall bokstaver: ${charText})`);
let spesChar = text.charAt(19);
printOut(`Den 19 bokstaven er: ${spesChar}`);
let chosenText = text.substring(35, +8);
printOut(`Tekst mellom bokstav 35 og 8 framover: ${chosenText}`);
let earthText = text.indexOf("earth");
printOut(`Ordet "earth" starter på nummer: ${earthText}`);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let part7 = 5 > 3 
printOut(`Is 5 greater than 3? ${part7}`);
part7 = 7 >= 7;
printOut(`Is 7 greater than or equal to 7? ${part7}`);
part7 = "a" > "b";
printOut(`Is "a" greater than "b"? ${part7}`);
part7 = "1" < "a";
printOut(`Is "1" less than "a"? ${part7}`);
part7 = "2500" < "abcd";
printOut(`Is "2500" less than "abcd"? ${part7}`);
part7 = "arne" !== "thomas";
printOut(`Is "arne" not equal to "thomas"? ${part7}`);
part7 = (2 === 5) === true;
printOut(`Is the statement 2 equal 5 true? ${part7}`);
part7 = "abcd" > "bcd";
printOut(`Is "abcd" greater than "bcd"? ${part7}`);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part8 = Number("254")
printOut(`From text "254" to number ${part8}`);

part8 = Number("57.23")
printOut(`From text "57.23" to number ${part8}`);

part8 = Number("25 kroner")
printOut(`From text "25 kroner" to number ${part8}`);

part8 = parseInt("254");
printOut(`From text "254" to a number ${part8}`);

part8 = parseInt("57.23");
printOut(`From text "57.23" to a number ${part8}`);

part8 = parseInt("25 kroner");
printOut(`From text "25 kroner" to a number ${part8}`);

part8 = parseFloat("254");
printOut(`From text "254" to number ${part8}`);

part8 = parseFloat("57.23");
printOut(`From text "57.23" to number ${part8}`);

part8 = parseFloat("25 kroner");
printOut(`From text "25 kroner" to number ${part8}`);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.random();
printOut(`Generated random number: ${r}`);

r = Math.ceil(Math.random() * 360);
printOut(`Print out a random number between 1 and 360 with Math.ciel: ${r}`);

r = Math.floor(Math.random() * 360) + 1;
printOut(`Random number generator between 1 and 360 with Math.floor: ${r}`);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let fullUke = Math.floor(131 / 7);
printOut(`131 dager er ${fullUke} uker.`);

let ekstraDager = 131 % 7;
printOut(`131 dager er ${fullUke} uker og ${ekstraDager} dager.`);

const totalDager = 131;
let calc10 = totalDager / 7;
calc10 = Math.floor(calc10);
const uker = calc10;
const days = totalDager % 7;
printOut(`I ${totalDager} dager, er det ${uker} uker og ${days} dager.`);
