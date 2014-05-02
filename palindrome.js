/* 
@author Jason Seminara 
@date 2014-05-02
@description Determines if a number is a palindrome (read the same ltr or rtl), using only stack frames 
based on http://leetcode.com/2012/01/palindrome-number.html
*/

var isPalindrome = function(y){
	
	return (
		isPal = function(x) {
	    
	    //negative protection
	    if (x < 0)   return false;
	    //base case, when the number = 0
	    if (x === 0) return true;

	    //create the recursion for the var passed by value(x), and compare each digit to the ref var(y)
	    if (isPal(Math.floor(x / 10), y) && (x%10 == y%10)) {
	        // we've gotten to the bottom of the recursion, now start modifying the reference (y)
	        y = Math.floor(y / 10);
	        return true;
	    } else {
	        return false;
	    }
	})(y);
}