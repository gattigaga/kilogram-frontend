import { splitBy3 } from "../../formatter";

describe("splitBy3", () => {
  it("should split with separator by 3 chars", () => {
    const amount = 14325;
    const expected = "14,325";

    expect(splitBy3(amount)).toEqual(expected);
    expect(splitBy3(`${amount}`)).toEqual(expected);
  });
});
