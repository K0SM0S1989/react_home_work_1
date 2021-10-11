import {isNumber} from "./helpers";
import {mathOperators, mathSingleNumberOperators} from "./mathOperators";

export type ParsedLineType = (number | string)[];
const openBracket = "(";
const closeBracket = ")";

export const parser = (line: string): ParsedLineType | null => {
    const stack = line.split(" ");

    return stack.reduce<ParsedLineType>((result, item, key) => {
        const prevItem = stack[key - 1];
        const nextItem = stack[key + 1];

        const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
        const isValidOpenBrackets = !isNumber(prevItem) && isNumber(nextItem) && item === openBracket;
        const isValidCloseBrackets = !isNumber(nextItem) && item === closeBracket;

        let isValidOperatorPush;
        if (mathOperators.hasOwnProperty(item) && mathSingleNumberOperators.hasOwnProperty(prevItem)) {
            isValidOperatorPush =
                !isNumber(item)
        } else if ((mathSingleNumberOperators.hasOwnProperty(item) && !isNumber(nextItem)) || mathOperators.hasOwnProperty(item)) {
            isValidOperatorPush =
                (isNumber(prevItem) || prevItem === closeBracket) &&
                !isNumber(item)
        }

        if (isValidNumberPush) {
            result.push(Number(item));
        } else if (isValidOperatorPush) {
            result.push(item);
        } else if (isValidOpenBrackets) {
            result.push(item);
        } else if (isValidCloseBrackets) {
            result.push(item);
        } else {
            throw new TypeError("Unexpected string");
        }
        return result;
    }, []);
};
