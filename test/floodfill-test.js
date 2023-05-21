const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");
const { kanamachi } = require("../src/floodfill.js");

describe("floodfill", () => {
  it("should give all the enclosed point for a certain set of boundaries", () => {
    const input = [
      [1, 2],
      [0, 2],
      [0, 3],
      [1, 1],
      [1, 4],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 4],
      [3, 5],
      [4, 2],
      [4, 6],
      [5, 3],
      [5, 4],
      [5, 5],
    ];

    const expected = [
      [1, 2],
      [2, 2],
      [3, 2],
      [3, 3],
      [4, 3],
      [4, 4],
      [4, 5],
      [1, 3],
    ];

    const actual = kanamachi(input[0], [], input.slice(1));

    deepStrictEqual(actual, expected);
  });
});
