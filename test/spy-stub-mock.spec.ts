import { expect } from "chai";
import Calculator from "../src/calculator";
import sinon, { SinonMock, SinonSpy, SinonStub } from "sinon";
describe("Spy Stub Mock Tests", () => {
  let calc: Calculator;
  let spy: SinonSpy;
  let stub: SinonStub;
  let mock: SinonMock;

  before(() => {
    calc = new Calculator();
    console.log("before");
  });
  beforeEach(() => {
    console.log("beforeEach");
    mock = sinon.mock(calc);
  });
  after(() => {
    console.log("after");
  });
  afterEach(() => {
    console.log("afterEach");
    if (spy) spy.restore();
    if (stub) stub.restore();
    if (mock) mock.restore();
  });
  describe("add test suite", () => {
    it("should return sum", () => {
      // arrange
      spy = sinon.spy(calc, "add");
      stub = sinon.stub(calc, "getRandomValue").returns(2);
      let expectations = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("logging add function");
      // act
      const result = calc.add(2, 3);
      // assert
      expect(result).to.equal(7);
      expect(spy.calledOnceWith(2, 3)).to.be.true;
      expectations.verify();
    });
  });
  describe("subtract test suite", () => {
    it("should return substract", () => {
      // arrange
      spy = sinon.spy(calc, "subsctract");

      let expectations = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("logging subsctract function");
      // act
      const result = calc.subsctract(5, 3);
      // assert
      expect(result).to.equal(2);
      expectations.verify();
      expect(spy.calledOnceWith(5, 3)).to.be.true;
    });
  });
});
