/* 
@author Jason Seminara 
@date 2014-05-02
@description gets the power set (a set containing all possible subsets) of any array.
*/

Array.prototype.clone = function () {
  return this.slice(0);
};

Array.prototype.powerSet = function () {

  if (!this.length) return [[]];

  /* pull off the head */
  var head = this.shift();

  /* recurse over the tail */
  var tailsubsets = this.powerSet();

  /* push in this item into a copy of each subset */
  return tailsubsets.concat(
    tailsubsets.clone().map(
      function (i) {
        i = i.clone();
        i.push(head);
        return i;
      }
    )
  );
};

Array.prototype.isMember = function (b) {
  return this.some(function (i) {
    return this == i
  }, b);
}


/*
//tests
console.log([6, 5, 't'].powerSet());
console.log(['a', 'b', 'c'].isMember('d'));
console.log([1, 2, 3].isMember(3));
*/