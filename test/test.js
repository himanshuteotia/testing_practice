let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
let sinon = require("sinon");
let should = chai.should();
let expect = chai.expect;
chai.use(chaiAsPromised);

function addPromise(a, b) {
  return Promise.resolve(a + b);
}

function printConsole() {
  console.log("this is console.log");
  console.warn("this is console.log");
}

describe("test chai as promised", () => {
  context("promise test", () => {
    it("should test promise", async () => {
      await expect(addPromise(1, 2)).to.eventually.equal(3);
    });
  });

  // spy example
  context("spy doubles", () => {
    it("should spy console", () => {
      let spy = sinon.spy(console, "log");
      printConsole();
      expect(spy.calledOnce).to.be.true;
      spy.restore(); // to restore the count of spy
      // we can also use sinon-chai plugin inside chai
    });
  });

  // stub example
  context("stub doubles", () => {
    it("should stub console", () => {
      let stub = sinon.stub(console, "warn").callsFake(() => {
        console.log("stub console log");
      });
      printConsole();
      expect(stub.calledOnce).to.be.true;
      // we can also use sinon-chai plugin inside chai
    });
  });
});
