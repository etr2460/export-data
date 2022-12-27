import { helloWorld } from "../index";

describe("helloWorld", () => {
  it("should not throw", () => {
    expect(helloWorld).not.toThrow();
  });
});
