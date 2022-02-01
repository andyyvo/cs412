/**
 * Andy Vo
 *
 * Problem 1
 *
 * Write a function that takes a string as its input and returns a new string that contains all the letters in the
 * original string, but in reverse alphabetical order. Ignore punctuation and numbers. Duplicates are fine, so
 * 'exioi' -> 'xoiie. Test your function using the string 'supercalifragilisticexpialidocious'.
 */

const revSortString = str => {
    let sorted = str.split(''); // array of chars
    sorted.sort(); // array is mutable so sort changes array
    return sorted.reverse(); // same thing here
}

console.log(revSortString('supercalifragilisticexpialidocious'));