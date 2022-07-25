import { morseToTextFunc } from "../scripts/morseToText";
const unknownChar = new Error(
    "Sorry! An unknown character was spotted. Please avoid using punctuation or numbers",
);
const invalidType = new Error("The program has returned the incorrect type");

describe("Test cases for translating text into morse code", () => {
    test("Should always return a string value", () => {
        expect(() => {
            morseToTextFunc(1234);
        }).toThrow(invalidType);
        expect(() => {
            morseToTextFunc(true);
        }).toThrow(invalidType);
    });
    test("Should not recognize unknown characters and throw an error if they occur", () => {
        expect(() => {
            morseToTextFunc(".... . -.-- !");
        }).toThrow(unknownChar);
        expect(() => {
            morseToTextFunc("#$%!");
        }).toThrow(unknownChar);
        expect(() => {
            morseToTextFunc("12345");
        }).toThrow(unknownChar);
    });
    test("Should keep return an empty string if no value is passed", () => {
        expect(morseToTextFunc()).toBe("");
    });
    test("Should correctly translate morse code into text", () => {
        expect(morseToTextFunc(".... --- .-- / .- .-. . / -.-- --- ..-")).toBe(
            "how are you",
        );
        expect(morseToTextFunc("... .- -- / / / / --. ..- -...")).toBe(
            "sam    gub",
        );
        expect(
            morseToTextFunc(
                "--.- .-- . .-. - -.-- ..- .. --- .--. .- ... -.. ..-. --. .... .--- -.- .-.. --.. -..- -.-. ...- -... -. --",
            ),
        ).toBe("qwertyuiopasdfghjklzxcvbnm");
    });
});
