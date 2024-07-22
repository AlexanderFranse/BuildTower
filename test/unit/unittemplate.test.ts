import {
  isPiramideBlockAMulitplierSymbol,
  isNumberOfFloorsPositive,
  calculateTotalBlocksForASingleFloor,
  calculateTotalBlocksForAllFloors,
  buildTower,
  centerBlocks,
  towerBuilder,
} from "../../src/functions";

describe("Multiple tower blocks exist and the goal is to build a pyramide shaped tower depending on the number of floors that is provided by the user. Two blocks will be added for every additional floor (first floor contains 1 block, second floor 3 blocks, third floor 5 blocks etc)", () => {
  describe("First check if a tower blok is represented by a *", () => {});
  it("[ * ] --> true", () => {
    expect(isPiramideBlockAMulitplierSymbol("*")).toBeTruthy();
  });
  it("[ . ] --> true", () => {
    expect(isPiramideBlockAMulitplierSymbol(".")).toBeFalsy();
  });
  it("[ $ ] --> true", () => {
    expect(isPiramideBlockAMulitplierSymbol("$")).toBeFalsy();
  });

  describe("Next, the number of floors chosen by the user should be a positive integer", () => {
    it("[ * ] --> true", () => {
      expect(isNumberOfFloorsPositive(1)).toBeTruthy();
    });
    it("[ . ] --> true", () => {
      expect(isNumberOfFloorsPositive(3)).toBeTruthy();
    });
    it("[ $ ] --> true", () => {
      expect(isNumberOfFloorsPositive(0)).toBeFalsy();
    });
    it("[ $ ] --> true", () => {
      expect(isNumberOfFloorsPositive(-1)).toBeFalsy();
    });
  });
  describe("Based on how many floors the tower contains, the amount of used blocks for a single floor can be calculated", () => {
    it("nFloor: 1 ---> 1", () => {
      expect(calculateTotalBlocksForASingleFloor(1)).toBe(1);
    });
    it("nFloor: 3 ---> 6", () => {
      expect(calculateTotalBlocksForASingleFloor(3)).toBe(5);
    });
    it("nFloor: 6 ---> 11", () => {
      expect(calculateTotalBlocksForASingleFloor(6)).toBe(11);
    });
  });
  describe("Based on how many floors the tower contains, the amount of used blocks for all floors can be calculated", () => {
    it("nFloor: 1 ---> 1", () => {
      expect(calculateTotalBlocksForAllFloors(1)).toBe(1);
    });
    it("nFloor: 3 ---> 9", () => {
      expect(calculateTotalBlocksForAllFloors(3)).toBe(9);
    });
    it("nFloor: 6 ---> 36", () => {
      expect(calculateTotalBlocksForAllFloors(6)).toBe(36);
    });
  });
  describe("Now we can actually build the tower", () => {
    it(`nFloor: 3 ---> [
      "*", 
      "***", 
      "*****"
    ]`, () => {
      const expectedPattern = ["*", "***", "*****"];
      expect(buildTower(3)).toEqual(expectedPattern);
    });

    it(`nFloor: 6 ---> [
      "*", 
      "***", 
      "*****", 
      "*******", 
      "*********", 
      "***********"
    ]`, () => {
      const expectedPattern = [
        "*",
        "***",
        "*****",
        "*******",
        "*********",
        "***********",
      ];
      expect(buildTower(6)).toEqual(expectedPattern);
    });
  });
  describe("Last thing to do is to center the building blocks, so that the tower is pyramid shaped", () => {
    it(`nFloor: 3 ---> [
      "  *  ", 
      " *** ", 
      "*****"
    ]`, () => {
      const expectedPattern = ["  *  ", " *** ", "*****"];
      expect(centerBlocks(["*", "***", "*****"])).toEqual(expectedPattern);
    });

    it(`nFloor: 6 ---> [
      "     *     ", 
      "    ***    ", 
      "   *****   ", 
      "  *******  ", 
      " ********* ", 
      "***********"
    ]`, () => {
      const expectedPattern = [
        "     *     ",
        "    ***    ",
        "   *****   ",
        "  *******  ",
        " ********* ",
        "***********",
      ];
      expect(
        centerBlocks([
          "*",
          "***",
          "*****",
          "*******",
          "*********",
          "***********",
        ])
      ).toEqual(expectedPattern);
    });
  });
  describe("Now we can finish our endProduct", () => {
    it(`nFloor: 3 ---> [
      "  *  ", 
      " *** ", 
      "*****"
    ]`, () => {
      const expectedPattern = ["  *  ", " *** ", "*****"];
      expect(towerBuilder(3)).toEqual(expectedPattern);
    });

    it(`nFloor: 6 ---> [
      "     *     ", 
      "    ***    ", 
      "   *****   ", 
      "  *******  ", 
      " ********* ", 
      "***********"
    ]`, () => {
      const expectedPattern = [
        "     *     ",
        "    ***    ",
        "   *****   ",
        "  *******  ",
        " ********* ",
        "***********",
      ];
      expect(towerBuilder(6)).toEqual(expectedPattern);
    });
  });
  describe("Return empty array when tower block is NOT a star and when the number of floors is NOT an positive integer", () => {
    it("nFloor: 0 ---> []", () => {
      expect(towerBuilder(0)).toEqual([]);
    });

    it("symbol = $", () => {
      expect(towerBuilder(6, "$")).toEqual([]);
    });
  });
});
