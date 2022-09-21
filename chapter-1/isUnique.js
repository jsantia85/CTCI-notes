'use strict';

// // 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// // My Potential Solution
// function isUnique(str) {
//   hash = {}

//   str.split('').forEach(function(i) {
//     hash[i] = (hash[i] || 0) + 1
//   });

//   return hash
//   // So I am able to return a hash table with the key and values of each letter in the str. If they are all 1's then it is unique and if there are any greater than 1 then it is not unique.
// }

// console.log(isUnique('hello')) // should return false
// console.log(isUnique('sup')) // should return false

// Solution
/**
  Time: O(N)
  Additional space: O(N)
  @param  {string[]} str: String to check, passed in as a character array
  @return {boolean}: True if unique characters, otherwise false
*/

function hasUniqueCharactersSet(str) {
  // This creates a new Set which in this case can be considered a hash-table-like structure
  let chars = new Set();

  for (let i = 0; i < str.length; ++i) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}

console.log(hasUniqueCharactersSet('hello'))
console.log(hasUniqueCharactersSet('sup'))

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
function hasUniqueCharactersSort(str) {
  // sort string using quicksort
  str.sort();

  for (var i = 1; i < str.length; ++i) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}