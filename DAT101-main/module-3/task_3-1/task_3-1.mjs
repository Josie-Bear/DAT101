"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 8
if (wakeUpTime == 7) {
    printOut(`If I wake up at ${wakeUpTime} then i can catch the bus.`)
}
else if (wakeUpTime == 8) {
    printOut(`If I wake up at ${wakeUpTime} then i can take the train.`)
}
else {
    printOut(`If I wake up at ${wakeUpTime} I cant catch the bus. `)
}

const wakeUpTim = 7;
const time = 10;
if (wakeUpTim === time) {
    printOut("Take the bus!");
} else if (time === 8) {
    printOut("Take the train!");
} else {
    printOut("Take the car!");
}

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part4 = 0
printOut(`${part4}`)
if (part4 < 0) {
    printOut(`Negative`)
}
else if (part4 > 0) {
    printOut(`Positive`)
}
else if (part4 === 0) {
    printOut(`Zero`)
}

const part4Number = 5
if (part4Number > 0) {
    printOut("The number is positive.");
} else if (part4Number < 0) {
    printOut("The number is negative.");
} else {
    printOut("The number is zero.");
}

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const minSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`Image User Size = ${imageUserSize} MP`);
if (imageUserSize >= minSize) {
    if (imageUserSize <= imageMaxSize) {
        printOut(`Thank you!`);
    } else {
        printOut("Image is too large!");
    }
} else {
    printOut("Image is too small!");
}


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes("r")) {
    printOut(`You must take vitamin D in ${monthName}.`);
} else {
    printOut(`You dont need to take vitamin D in ${monthName}.`);
}


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (monthName) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        printOut(`31 days in ${monthName}.`);
        break;
    case "February":
        printOut(`28 days in ${monthName}.`)
        break;
    default:
        printOut(`30 days in ${monthName}.`)
}

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if(monthName === "March" || monthName ==="May"){
    printOut(`Sorry the gallery is closed in ${monthName}!`);
}else if(monthName === "April"){
    printOut(`Sorry, Main gallery is closed in ${monthName}, you are welcome to into the premises next door!`);
}else{
    printOut(`Welcome to my gallery in ${monthName}!`);
}
