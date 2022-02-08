/**
 * Andy Vo
 *
 * Problem 3
 *
 * Write a function that accepts two input parameters: a string, and a decorator function. The function should execute
 * the passed decorator function on the passed string and return the result.
 *
 * Next, write two expressions that call this function.
 *
 * For the first, pass the string
 * 'supercalifragilisticexpialidocious' and a lambda (unnamed) function that returns an array contain fragments of the
 * input string broken on the character 'c'. For the input string 'supercalifragilisticexpialidocious', you should get
 * ['super', 'califragilisti', 'cexpialido', 'cious']
 *
 * For the second, pass the string 'supercalifragilisticexpialidocious' and a lambda function that replaces all the
 * 'a' characters with 'A' characters. Return an object that contains the original string, the modified string, the
 * total number of As in the modified string, and the overall length of the modified string:
 *
 * {
 *     originalString: XXX,
 *     modifiedString: XXX,
 *     numberReplaced: XXX,
 *     length: XXX,
 * }
 */

// easier reference to the word
const superStr = 'supercalifragilisticexpialidocious';

/**
 *
 * @param str - string
 * @param decor - decorator function
 */
const strDecFunction = (str, decor) => decor(str);

/**
 * Function that passed in superStr and lambda function to return array breaking up string by 'c'.
 * Using a callback, delimiter is kept within the array.
 */
const expr1 = strDecFunction(superStr, splitter => {
    // source on keeping delimiter for regex: https://medium.com/@shemar.gordon32/how-to-split-and-keep-the-delimiter-s-d433fb697c65
    return superStr.split(/(?=[c])/g);
});

console.log(expr1);

/**
 * Function that passed in superStr and lambda function to return object of original string, modified string
 * of a -> A, number of As, and overall length of modified string.
 */
const expr2 = strDecFunction(superStr, capitalize => {
    let modified = superStr.replace(/a/g, 'A'); // not 'a', /a/g is global rather than first
    let replaced = modified.split('A').length - 1 // minus 1 bc the first element of arr is before 'A'
    let lengthSt = superStr.length;

    const result = {
        'originalString': superStr,
        'modifiedString': modified,
        'numberReplaced': replaced,
        'length': lengthSt,
    }

    return result;
});

console.log(expr2);