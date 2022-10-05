import { environment, toSlug } from "../helpers";

describe("Helpers", () => {
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
  describe("toSlug", () => {
    it("returns a slug version of a given string", () => {
      expect(toSlug("some string")).toBe("some-string");
      expect(toSlug("SoMe-O ther StriN g")).toBe("some-o-ther-strin-g");
    });
  });
});
