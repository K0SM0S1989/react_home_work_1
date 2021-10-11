import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("firstPrioritiesCalc with single Math action", () => {
  it("[3 **]", () => {
    expect(firstPrioritiesCalc([3, "**"])).toEqual([9])
  });
});

  describe("priorities in brackets", () => {
    it("( 3 + 2 )",  () => {
      expect(firstPrioritiesCalc(["(", 3, "+", 2,")"])).toEqual([5])
    });

    it("( 3 + 6 ) + 2 * 3",  () => {
      expect(firstPrioritiesCalc(["(", 3, "+", 6,")", "+", 2, "*", 3])).toEqual([9, "+", 6]);
    });

    it("( 3 + 6 ) / ( 2 * 3 )",  () => {
      expect(firstPrioritiesCalc(["(", 3, "+", 6,")", "/", "(",1, "*", 3, ")"])).toEqual([3]);
    });
});


describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
