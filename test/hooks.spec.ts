import { expect } from "chai";
import Calculator from "../src/calculator";

describe("hooks style", () => {
  let calc: Calculator;

  before(() => {
    calc = new Calculator();
    console.log("before");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  after(() => {
    console.log("after");
  });
  afterEach(() => {
    console.log("afterEach");
  });
  // describe("add test suite", () => {
  //   it("should return sum", () => {
  //     // arrange
  //     // act
  //     const result = calc.add(2, 3);
  //     // assert
  //     expect(result).to.equal(5);
  //   });
  // });
  describe("subtract test suite", () => {
    it("should return substract", () => {
      // arrange
      // act
      const result = calc.subsctract(5, 3);
      // assert
      expect(result).to.equal(2);
    });
  });
  //   it("should return sum", () => {
  //     // arrange
  //     // act
  //     const result = calc.add(2, 3);
  //     // assert
  //     expect(result).to.equal(5);
  //   });
  //   it("should return substract", () => {
  //     // arrange
  //     // act
  //     const result = calc.subsctract(5, 3);
  //     // assert
  //     expect(result).to.equal(2);
  //   });
});
