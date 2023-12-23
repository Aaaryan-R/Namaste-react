import { sum } from "../sum";

test("sum() should add the given numbers!!", () => {
    const result = sum(3, 7);
    expect(result).toBe(10);
});