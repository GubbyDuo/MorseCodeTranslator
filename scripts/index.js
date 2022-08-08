import { morseToTextFunc } from "./morseToText.js";
import { textToMorseFunc } from "./textToMorse.js";
const textToMorse = document.getElementById("toMorseButton");
const morseToText = document.getElementById("toTextButton");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
document.quer
let morseResult = "";
let textResult = "";

textToMorse.addEventListener("click", function () {
    morseResult = textToMorseFunc(topText.value);
    console.log(morseResult);
    bottomText.value = morseResult;
});
morseToText.addEventListener("click", function () {
    textResult = morseToTextFunc(topText.value);
    bottomText.value = textResult;
});
