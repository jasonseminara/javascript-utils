function isPalindrome(y){
	function isPal(x) {
	    
	    if (x < 0) {
	        console.log("lt 0");
	        return false;
	    }
	    if (x === 0) {
	        console.log("eq 0");
	        return true;
	    }

	    console.log("before");

	    if (isPal(Math.floor(x / 10), y) && (x % 10 == y % 10)) {
	        console.log("true", x, y, x % 10, y % 10);
	        y = Math.floor(y / 10);

	        return true;
	    } else {
	        console.log("false", x, y, x % 10, y % 10);
	        return false;
	    }
	}
	return isPal(y);
}