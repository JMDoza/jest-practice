import {
  createCalculator,
  capitalize,
  reverseString,
  caesarCipher,
} from "../jestTest";

describe.skip("String mutations", () => {
  test("capitalize first letter 1", () => {
    let string = capitalize("test");
    expect(string).toMatch("Test");
  });

  test("capitalize first letter 2", () => {
    let string = capitalize("jest");
    expect(string).toMatch("Jest");
  });

  test("reverse string 1", () => {
    let reversed = reverseString("tests");
    expect(reversed).toMatch("stset");
  });

  test("reverse string 2", () => {
    let reversed = reverseString("jest");
    expect(reversed).toMatch("tsej");
  });
});

describe.skip("Calculator operations", () => {
  let calculator = createCalculator();
  test("addition with positives", () => {
    const num1 = 1;
    const num2 = 4;
    const sum = calculator.add(num1, num2);
    expect(sum).toBe(5);
  });

  test("addition with a negative", () => {
    const num1 = -10;
    const num2 = 6;
    const sum = calculator.add(num1, num2);
    expect(sum).toBe(-4);
  });

  test("subtraction with positives", () => {
    const num1 = 1;
    const num2 = 4;
    const product = calculator.subtract(num1, num2);
    expect(product).toBe(-3);
  });

  test("subtraction with a negative", () => {
    const num1 = 4;
    const num2 = -1;
    const product = calculator.subtract(num1, num2);
    expect(product).toBe(5);
  });

  test("multiplication with positives", () => {
    const num1 = 2;
    const num2 = 4;
    const product = calculator.multiply(num1, num2);
    expect(product).toBe(8);
  });

  test("multiplication with a negative", () => {
    const num1 = -10;
    const num2 = 4;
    const product = calculator.multiply(num1, num2);
    expect(product).toBe(-40);
  });

  test("multiplication with negatives", () => {
    const num1 = -10;
    const num2 = -4;
    const product = calculator.multiply(num1, num2);
    expect(product).toBe(40);
  });

  test("division with positive", () => {
    const num1 = 10;
    const num2 = 2;
    const product = calculator.divide(num1, num2);
    expect(product).toBe(5);
  });

  test("division with a negative", () => {
    const num1 = 25;
    const num2 = -5;
    const product = calculator.divide(num1, num2);
    expect(product).toBe(-5);
  });

  test("division with negatives", () => {
    const num1 = -30;
    const num2 = -5;
    const product = calculator.divide(num1, num2);
    expect(product).toBe(6);
  });
});

describe("Caesar Cipher encryptions", () => {
  test("Shift by 0", () => {
    const string = "test";
    const cipherText = caesarCipher(string, 0);
    expect(cipherText).toMatch("test");
  });

  test("Shift by 3", () => {
    const string = "test";
    const cipherText = caesarCipher(string, 3);
    expect(cipherText).toMatch("whvw");
  });

  test("Shift by -3", () => {
    const string = "test";
    const cipherText = caesarCipher(string, -3);
    expect(cipherText).toMatch("qbpq");
  });

  test("Shift by -3 and uppercase", () => {
    const string = "tESt";
    const cipherText = caesarCipher(string, -3);
    expect(cipherText).toMatch("qBPq");
  });
});
