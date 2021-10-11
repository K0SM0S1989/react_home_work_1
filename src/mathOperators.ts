export type ScalarOperationType = (first: number, second: number) => number;
export type SingleOperationType = (first: number) => number;

export const mul: ScalarOperationType = (
    first: number,
    second: number
): number => first * second;

export const div: ScalarOperationType = (
    first: number,
    second: number
): number => first / second;

export const add: ScalarOperationType = (
    first: number,
    second: number
): number => first + second;

export const minus: ScalarOperationType = (
    first: number,
    second: number
): number => first - second;

export const square: SingleOperationType = (
    first: number
): number => Math.pow(first, 2);

export const exp: ScalarOperationType = (
    first: number,
    second: number
): number => Math.pow(first, second);

export const factorial: SingleOperationType = (
    first: number
): number => (first != 0) ? first * factorial(first - 1) : 1;

export const mathOperators: { [key: string]: ScalarOperationType } = {
    "*": mul,
    "/": div,
    "+": add,
    "-": minus,
    "^": exp
};

export const mathSingleNumberOperators: {[key: string]: SingleOperationType} = {
    "**": square,
    "!": factorial
}

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
    "!": FIRST,
    "**": FIRST,
    "^": FIRST,
    "*": FIRST,
    "/": FIRST,
    "+": SECOND,
    "-": SECOND,
};
