import {mul, div, add, minus, exp, square, factorial} from "./mathOperators";

describe("mathOperators test cases", () => {
    it("mul 1 * 2 to equal 2", () => {
        expect(mul(1, 2)).toBe(2);
    });

    it("mul 2 * 2 to equal 4", () => {
        expect(mul(2, 2)).toBe(4);
    });

    it("div 2 / 2 to equal 1", () => {
        expect(div(2, 2)).toBe(1);
    });

    it("div 4 / 2 to equal 2", () => {
        expect(div(4, 2)).toBe(2);
    });

    it("add 4 + 2 to equal 6", () => {
        expect(add(4, 2)).toBe(6);
    });

    it("minus 4 - 2 to equal 2", () => {
        expect(minus(4, 2)).toBe(2);
    });

    it("exp 3 ^ 4 to equal 81", () => {
        expect(exp(3, 4)).toBe(81);
    })

    it("exp 3 ^ 1 to equal 3", () => {
        expect(exp(3, 1)).toBe(3);
    })

    it("exp 3 ^ 0 to equal 1", () => {
        expect(exp(3, 0)).toBe(1);
    })
    it("square 3** to equal 9", () => {
        expect(square(3)).toBe(9)
    })

    it("square 0** to equal 0", () => {
        expect(square(0)).toBe(0)
    })

    it("square -3** to equal 9", () => {
        expect(square(-3)).toBe(9)
    })

    it('factorial 5 to equal 120',  () => {
        expect(factorial(5)).toBe(120);
    });

    it('factorial 0 to equal 1',  () => {
        expect(factorial(0)).toBe(1);
    });

    it('factorial 1 to equal 1',  () => {
        expect(factorial(1)).toBe(1);
    });

});
