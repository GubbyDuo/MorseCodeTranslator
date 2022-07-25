const textToMorse = document.getElementById("toMorseButton");
const morseToText = document.getElementById("toTextButton");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
};

textToMorse.addEventListener("click", () => {
    let translateString = [];
    let storedVal = topText.value.split("");

    for (let x of storedVal) {
        if (x === " ") {
            translateString.push("/");
        } else {
            try {
                let morseString = Object.entries(morseCode).find(
                    (obj) => obj[0] == x.toUpperCase(),
                );
                translateString.push(morseString[1]);
            } catch {
                return (bottomText.value =
                    "Sorry! Punctuation and numbers not supported.");
            }
        }
    }
    bottomText.value = translateString.join(" ");
});

morseToText.addEventListener("click", () => {
    let translateString = [];
    let storedVal = topText.value.split(" ");
    console.log(storedVal);

    for (let x of storedVal) {
        if (x === "/") {
            translateString.push(" ");
        } else {
            try {
                let morseString = Object.keys(morseCode).find(
                    (key) => morseCode[key] === x,
                );
                console.log(morseString);
                translateString.push(morseString.toLowerCase());
            } catch (err) {
                console.log(err);
                return (bottomText.value =
                    "Sorry! We detected an invalid character. Please try again");
            }
        }
    }
    bottomText.value = translateString.join("");
});
