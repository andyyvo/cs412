/**
 * Andy Vo
 *
 * Problem 2
 *
 * Write a function that takes as its input the following formatted strings:
 * '4+2'
 * '5*7'
 * '6-1'
 * '9/2'
 * '2^8' (where ^ is exponentiation)
 *
 * This function should
 * Determine the operator (+, *, -, ^, or /) embedded in the string
 * Return a function to implement the input operator that returns the result
 *
 * For example, if the input string is ‘8%3’, return (left, right) => left % right
 * Execute the returned function to evaluate and print each expression.
 */

// expressions to calculate
const expr1 = '4+2';
const expr2 = '5*7';
const expr3 = '6-1';
const expr4 = '9/2';
const expr5 = '2^8';

/**
 *
 * @param expr - expression to be evaluated
 * @returns {function(*, *)} - function that implements the operator to make calculation
 */
const evaluate = expr => {
    if (expr.includes('+')) {
        // addition
        return (left, right) => left + right;
    } else if (expr.includes('*')) {
        // multiplication
        return (left, right) => left * right;
    } else if (expr.includes('-')) {
        // subtraction
        return (left, right) => left - right;
    } else if (expr.includes('/')) {
        // division
        return (left, right) => left / right;
    } else if (expr.includes('^')) {
        // exponentiation
        return (left, right) => left ** right;
    } else {
        // modulus not requested in problem
        console.log('Invalid expression.')
    }
}

/**
 *
 * @param expr - expression to be evaluated
 * @param operCallback - callback function that takes in the evaluate function
 * @returns {*} - uses callback with parsed values to run the evaluate function
 */
const calculate = (expr, operCallback) => {
    let exprList = expr.split('');
    let [leftNum, operator, rightNum] = [exprList[0], exprList[1], exprList[2]];
    return operCallback(parseInt(leftNum), parseInt(rightNum));
}

/**
 *
 * @param expr - expression to be evaluated
 * @returns {*} - calculated value
 */
const operate = expr => calculate(expr, evaluate(expr));

console.log(`${expr1} = ${operate(expr1)}`);
console.log(`${expr2} = ${operate(expr2)}`);
console.log(`${expr3} = ${operate(expr3)}`);
console.log(`${expr4} = ${operate(expr4)}`);
console.log(`${expr5} = ${operate(expr5)}`);