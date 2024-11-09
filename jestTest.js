function capitalize(string) {
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
}

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string.charAt(i);
  }
  return reversed;
}

function createCalculator() {
  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num1 / num2;
  return { add, subtract, multiply, divide };
}

function caesarCipher(string, shift) {
  const alphabet = [
    [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  ];

  let cipherText = "";

  for (let i = 0; i < string.length; i++) {
    const indexUpperCase =
      string.charAt(i) === string.charAt(i).toUpperCase() ? 1 : 0;
    const alphabetCase = alphabet[indexUpperCase];
    const charIndex = alphabetCase.indexOf(string.charAt(i));
    const cipherIndex = charIndex + shift;
    const cipherChar =
      cipherIndex >= 0
        ? alphabetCase[cipherIndex]
        : alphabetCase[alphabet.length - 1 + cipherIndex];
    cipherText += cipherChar;
  }

  return cipherText;
}

function analyzeArray(array) {
  return array;
}

export {
  capitalize,
  reverseString,
  createCalculator,
  caesarCipher,
  analyzeArray,
};
