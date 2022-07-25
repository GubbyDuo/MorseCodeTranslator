export const textToMorseFunc = (topTextVal) => {
    const unknownChar = new Error(
        "Sorry! An unknown character was spotted. Please avoid using punctuation or numbers",
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
    let storedVal = topTextVal.split("");

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
                throw unknownChar;
            }
        }
    }
    return translateString.join(" ");
};
