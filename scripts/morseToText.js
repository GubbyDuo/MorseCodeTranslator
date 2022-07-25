export const morseToTextFunc = (topTextVal) => {
    const unknownCharErr = new Error(
        "Sorry! An unknown character was spotted. Please avoid using punctuation or numbers",
    );
    const invalidType = new Error(
        "The program has returned the incorrect type",
    );

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

    let translateString = [];
    if (!topTextVal) return "";
    if (typeof topTextVal != "string") {
        throw invalidType;
    }

    let storedVal = topTextVal.split(" ");

    for (let x of storedVal) {
        if (x === "/") {
            translateString.push(" ");
        } else {
            try {
                let morseString = Object.keys(morseCode).find(
                    (key) => morseCode[key] === x,
                );
                translateString.push(morseString.toLowerCase());
            } catch (err) {
                throw unknownCharErr;
            }
        }
    }
    return translateString.join("");
};
