import { assert, expect, should } from "chai";

describe("assert style", () => {
  it("EXPECT assertion style", () => {
    // arrange
    const name: string = "daniyal";
    const age: number = 20;
    const objData: Object = { name: "daniyal", age: 20 };
    const arrData: Array<number> = [1, 2, 3];
    const boolData: boolean = true;
    // act

    // assert
    // string
    expect(name).is.to.ok;
    expect(name).is.to.equal("daniyal");
    // expect(name).is.to.not.equal("daniyal1");
    expect(name).is.to.a("string");
    // number
    expect(age).is.to.ok;
    expect(age).is.to.equal(20);
    // expect(age).is.to.not.equal(21);
    expect(age).is.to.a("number");
    // object
    expect(objData).is.to.ok;
    expect(objData).is.to.a("object");
    expect(objData).is.to.have.property("name").equal("daniyal");
    expect(objData).is.to.have.property("name").a("string");
    expect(objData).is.to.have.property("age").equal(20);
    expect(objData).is.to.have.property("age").a("number");
    // array
    expect(arrData).is.to.ok;
    expect(arrData).is.to.have.length(3);
    expect(arrData).is.to.have.length(3).that.includes(2);
    expect(arrData).is.to.not.have.length(4).that.does.not.includes(5);
    expect(arrData).is.to.a("array");
    // boolean

    expect(boolData).is.to.ok;
    expect(boolData).is.to.be.true;
    // expect(name).is.to.not.equal("daniyal1");
    expect(boolData).is.to.a("boolean");
  });
  it("SHOULD assertion style", () => {
    should();
    // arrange
    const name: string = "daniyal";
    const age: number = 20;
    const objData: Object = { name: "daniyal", age: 20 };
    const arrData: Array<number> = [1, 2, 3];
    const boolData: boolean = true;
    // act

    // assert
    // string
    name.should.be.ok;
    name.should.be.equal("daniyal");
    // name.should.be.not.equal("daniyal1");
    name.should.be.a("string");
    // number
    age.should.be.ok;
    age.should.equal(20);
    // age.should.is.to.not.equal(21);
    age.should.be.a("number");
    // object
    objData.should.be.ok;
    objData.should.be.a("object");
    objData.should.have.property("name").equal("daniyal");
    objData.should.have.property("name").a("string");
    objData.should.have.property("age").equal(20);
    objData.should.have.property("age").a("number");
    // array
    arrData.should.be.ok;
    arrData.should.have.length(3);
    arrData.should.have.length(3).that.includes(2);
    arrData.should.not.have.length(4).that.does.not.includes(5);
    arrData.should.be.a("array");
    // boolean

    boolData.should.be.ok;
    boolData.should.be.true;
    // name.should.is.to.not.equal("daniyal1");
    boolData.should.be.a("boolean");
  });
  it("ASSERT assertion style", () => {
    // arrange
    const name: string = "daniyal";
    const age: number = 20;
    const objData: Object = { name: "daniyal", age: 20 };
    const arrData: Array<number> = [1, 2, 3];
    const boolData: boolean = true;
    // act

    // assert
    // string
    assert.isOk(name);
    assert.equal(name, "daniyal");
    assert.typeOf(name, "string");
    // number
    assert.isOk(age);
    assert.equal(age, 20);
    assert.typeOf(age, "number");
    // object
    assert.typeOf(objData, "object");
    assert.deepEqual(objData, { name: "daniyal", age: 20 });
    // array
    assert.typeOf(arrData, "array");
    assert.deepEqual(arrData, [1, 2, 3]);
    assert.include(arrData, 2);

    // boolean
    assert.typeOf(boolData, "boolean");
    assert.equal(boolData, true);
  });
});
