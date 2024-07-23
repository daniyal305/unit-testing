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
  afterEach(() => {
    console.log("afterEach");
    if (spy) spy.restore();
    if (stub) stub.restore();
    if (mock) mock.restore();
  });
  describe("anonymous Funtion tests", () => {
    it("should SPY on anonymous Funtion", () => {
      spy = sinon.spy(calc, "anonmyousAdd");
      calc.anonmyousAdd(3, 3);
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith(3, 3)).to.be.true;
    });
    it("should STUB on anonymous Funtion", () => {
      stub = sinon.stub(calc, "anonmyousAdd").returns(10);
      // act
      const result = calc.anonmyousAdd(0, 0);

      // assert
      expect(stub.calledOnce).to.be.true;
      expect(result).to.equal(10);
    });
    it("should SPY on anonymous Funtion", () => {
      mock = sinon.mock(calc);
      mock.expects("anonmyousAdd").once().returns(10);

      // act
      const result = calc.anonmyousAdd(0, 0);
      // assert
      expect(result).to.equal(10);
      mock.verify();
    });
  });
});
