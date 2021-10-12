import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
  mathSingleNumberOperators,
} from "./mathOperators";

const [FIRST, SECOND] = mathPriorities;
const openBracket = "(";
const closeBracket = ")";

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    if (nextItem === openBracket) {
      const bracketsArray = stack.splice(
        stack.indexOf(openBracket),
        stack.indexOf(closeBracket) - stack.indexOf(openBracket) + 1
      );
      nextItem = actionInBrackets(bracketsArray.slice(1, -1));
      stack.unshift(nextItem);
    }

    let prevItem = result[result.length - 2];
    let item = result[result.length - 1];

    if (mathSingleNumberOperators.hasOwnProperty(nextItem)) {
      item = nextItem;
      prevItem = result[result.length - 1];
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item] && !mathSingleNumberOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathSingleNumberOperators.hasOwnProperty(item)
          ? mathSingleNumberOperators[item](Number(prevItem))
          : mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      if (
        nextItem !== null &&
        nextItem !== undefined &&
        nextItem !== openBracket &&
        nextItem !== closeBracket
      ) {
        result.push(nextItem);
      }
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));

export const actionInBrackets = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (
      !isNumber(String(item)) &&
      (mathOperatorsPriorities[item] === SECOND ||
        mathOperatorsPriorities[item] === FIRST)
    ) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
