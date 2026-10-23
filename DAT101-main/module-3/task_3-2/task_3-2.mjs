"use strict";
import { newLine, printOut } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let task1Line = "Line 1: ";
for (let i = 1; i <= 10; i++) {
    task1Line += i + " ";
}
printOut(task1Line);
task1Line = "line2: ";
for (let i = 10; i >= 1; i--) {
    task1Line += i + " ";
}
printOut(task1Line);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const guessNumber = 45;
let randomNumber = 0;
while (randomNumber !== guessNumber) {
    randomNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("The random number is: " + randomNumber)

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const pt3GuessNumber = 45;
let pt3RandomNumber = 0;
let pt3Attempts = 0;
let pt3TimeStart = Date.now();
while (pt3RandomNumber !== pt3GuessNumber) {
    pt3RandomNumber = Math.floor(Math.random() * 1000000) + 1;
    pt3Attempts++
}
let pt3TimeEnd = Date.now();
let pt3TimeTaken = (pt3TimeEnd - pt3TimeStart);
printOut(`The random number is: ${pt3RandomNumber}`);
printOut(`Number of attempts: ${pt3Attempts}`);
printOut(`Time taken: ${pt3TimeTaken} ms`);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primes = "";
for (let i = 2; i <= 200; i++) {
    let isPrime = true;
    let j = i - 1;
    while (isPrime && j > 1) {
        if (i % j === 0) {
            isPrime = false;
        }
        j--;
    }
    if (isPrime === true) {
        primes += " " + i;
    }
}
printOut(primes);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

let rowText = "";
for (let row = 1; row <= 7; row++) {
    for (let col = 1; col <= 9; col++) {
        rowText += " K" + col + "R" + row
    }
    rowText += newLine
}

printOut(rowText);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Grades of the students:")
let grade = "";
for (let i = 0; i < 5; i++) {
    let grade = (Math.floor(Math.random() * 236) + 1) / 236 * 100;
    if (grade >= 89) {
        printOut(`Grade A`)
    } else if (grade >= 77) {
        printOut(`Grade B`)
    } else if (grade >= 65) {
        printOut(`Grade C`)
    } else if (grade >= 53) {
        printOut(`Grade D`)
    } else if (grade >= 41) {
        printOut(`Grade E`)
    } else {
        printOut(`Grade F`)
    }
}

printOut(grade);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let throwCount = 0;
let hasStraight = false;
let hasTower = false;
let has3Pairs = false;
let hasYatzy = false;

do {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const d3 = Math.floor(Math.random() * 6) + 1;
    const d4 = Math.floor(Math.random() * 6) + 1;
    const d5 = Math.floor(Math.random() * 6) + 1;
    const d6 = Math.floor(Math.random() * 6) + 1;

    const diceThrow = `${d1}${d2}${d3}${d4}${d5}${d6}`;
    throwCount++;

    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
    for (let i = 0; i < 6; i++) {
        const c = diceThrow.charAt(i);
        if (c === "1") {
            c1++;
        } else if (c === "2") {
            c2++;
        } else if (c === "3") {
            c3++;
        } else if (c === "4") {
            c4++;
        } else if (c === "5") {
            c5++;
        } else {
            c6++;
        }
    }
    const diceCount = `${c1}${c2}${c3}${c4}${c5}${c6}`

    let a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;
    for (let i = 0; i < 6; i++) {
        const c = diceCount.charAt(i);
        if (c === "1") {
            a1++;
        } else if (c === "2") {
            a2++;
        } else if (c === "3") {
            a3++;
        } else if (c === "4") {
            a4++;
        } else if (c === "5") {
            a5++;
        } else if (c === "6") {
            a6++;
        }
    }

    const amount = `${a1}${a2}${a3}${a4}${a5}${a6}`

    if (amount.includes("6") === true) {
        if (hasStraight === false) {
            hasStraight = true;
            printOut("---Straight---");
            printOut({ diceThrow, throwCount });
            printOut("---");
        }
    } else if (amount === "010100") {
        if (hasTower === false) {
            hasTower = true;
            printOut("---Tower---");
            printOut({ diceThrow, throwCount });
            printOut("---");
        }
    } else if (amount === "030000") {
        if (has3Pairs === false) {
            has3Pairs = true;
            printOut("---3 Pairs---");
            printOut({ diceThrow, throwCount });
            printOut("---");
        }
    } else if (amount === "000001") {
        if (hasYatzy === false) {
            hasYatzy = true;
            printOut("---YATZY---")
            printOut({ diceThrow, throwCount });
            printOut("---");
        }
    }

} while (hasStraight === false || hasTower === false || has3Pairs === false || hasYatzy === false);