import { expect } from "chai";
import Calculator from "../src/calculator";
import nock from "nock";

const baseUrl = "https://jsonplaceholder.typicode.com";
describe("API Testing", () => {
  it("should make a get request from API", async () => {
    // arrange
    const calc = new Calculator();
    const mockUserResponse = { id: 1, name: "Leanne Graham" };
    nock(baseUrl).get("/users/1").reply(200, mockUserResponse);
    // act
    const res = await calc.getUser();
    // assert
    expect(res.status).to.equal(200);
    expect(res.data.id).to.equal(1);
  });
  it("should make a post request from API", async () => {
    // arrange
    const calc = new Calculator();
    const userPayload = {
      name: "ne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };
    const expectedResponse = {
      id: 11,
      name: "ne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };
    nock(baseUrl).post("/users", userPayload).reply(201, expectedResponse);

    // act
    const res = await calc.saveUser(userPayload);
    // assert
    expect(res.status).to.equal(201);
    expect(res.data.id).to.equal(11);
  });
});
