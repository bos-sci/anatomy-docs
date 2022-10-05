import { environment } from "../helpers";

describe("environment", () => {
  it("returns the environment variable passed to it", () => {
    const envVar = environment("REACT_EDITOR");
    expect(envVar).toEqual("code");
  });
  it("Returns an empty string when no variable is passed or variable does not exist", () => {
    const emptyString = environment("");
    const doesNotExist = environment("VARIABLE_NOT_REAL");
    expect(emptyString).toEqual("");
    expect(doesNotExist).toEqual("");
  });
});
