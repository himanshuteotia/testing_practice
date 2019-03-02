// run before and after

const chai = require("chai");
expect = chai.expect;

describe("run before and after", () => {
  context("use of after and before", () => {
    after(() => {
      console.log("after");
    });
    before(() => {
      console.log("before");
    });
    it("should console before and after message", () => {
      expect(2).to.not.equal(1); // Not recommended
    });
    it("should console before and after message", () => {
      expect({ a: 1 }).to.deep.equal({ a: 1 });
    });
  });

  context("use of afterEach and beforeEach", () => {
    afterEach(() => {
      console.log("afterEach");
    });
    beforeEach(() => {
      console.log("beforeEach");
    });
    it("should console beforeEach and afterEach message - 1", () => {
      expect(2 + 1).to.equal(3);
    });
    it("should console beforeEach and afterEach message - 2", () => {
      expect(2 + 3).to.equal(5);
    });
  });
});
