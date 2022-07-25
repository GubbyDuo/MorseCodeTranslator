import { textToMorseFunc } from "../scripts/textToMorse";
const unknownChar = new Error(
    "Sorry! An unknown character was spotted. Please avoid using punctuation or numbers",
);

describe("Test cases for translating text into morse code", () => {
    test("Should correctly translate text into morse code", () => {
        expect(textToMorseFunc("How are you")).toBe(
            ".... --- .-- / .- .-. . / -.-- --- ..-",
        );
        expect(textToMorseFunc("Sam    Gub")).toBe(
            "... .- -- / / / / --. ..- -...",
        );
        expect(textToMorseFunc("qwertyuiopasdfghjklzxcvbnm")).toBe(
            "--.- .-- . .-. - -.-- ..- .. --- .--. .- ... -.. ..-. --. .... .--- -.- .-.. --.. -..- -.-. ...- -... -. --",
        );
    });
    test("Should not recognize unknown characters and throw an error if they occur", () => {
        expect(() => {
            textToMorseFunc("Hey!");
        }).toThrow(unknownChar);
        expect(() => {
            textToMorseFunc("?.$%#!");
        }).toThrow(unknownChar);
        expect(() => {
            textToMorseFunc("12345");
        }).toThrow(unknownChar);
    });
    test("Should keep return an empty string if no value is passed", () => {
        expect(textToMorseFunc()).toBe("");
    });
});
