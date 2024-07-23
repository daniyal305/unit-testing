import { expect } from "chai";
import Calculator from "../src/calculator";

describe("ASYNC AWAIT AND PROMISE test suite", () => {
  let calc: Calculator;
  it("Should work with asyn await ", async () => {
    // arrange
    calc = new Calculator();
    // act
    let result = await calc.asyncFunctionPromise();

    // assert
    expect(result).equal(4);
  });
  it("Should work with then ", () => {
    // arrange
    calc = new Calculator();
    // act
    calc.asyncFunctionPromise().then((result) => {
      expect(result).equal(4);
    });

    // assert
  });
});
