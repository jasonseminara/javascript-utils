/* 
@author Jason Seminara 
@date 2014-05-02
@description Determines if a number is a palindrome (read the same ltr or rtl), using only stack frames 
based on http://leetcode.com/2012/01/palindrome-number.html
*/
function isPalindrome(y) {
  return (function isPal(x) {

    // negative protection
    if (x < 0) { return false; }

    // base case, when the number = 0
    if (x === 0) { return true; }


    // Start recursively splitting off each LSD for the var passed by value(x). 
    // Compare each one to the MSD of var(y), on the upswing of the recursion.
    // y, in this case, is simulating a 'reference' by accessing the y in the closure.

    if (isPal(Math.floor(x / 10)) && (x % 10 === y % 10)) {
      // we've gotten to the bottom of the recursion, now start modifying the reference (y)
      y = Math.floor(y / 10);
      return true;
    }
    return false;
  })(y);
};
