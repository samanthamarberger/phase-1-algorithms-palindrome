function isPalindrome(word) {
  // Write your algorithm here
  let palindrome = false;
  const arrayForm = Array.from(word);
  const manipulatedArray = [...arrayForm];
  const reverseArray = manipulatedArray.reverse();
  
  for (let i = 0; i < arrayForm.length; i++){
    if(arrayForm[i] === reverseArray[i]) {
      palindrome = true;
    }
    else {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}

/* 
  Add your pseudocode here

  create a boolean variable 
  split the word into an array 
  if array = array reversed 
    true
  if array != array reversed
    false
  return boolean 
*/

/*
  Add written explanation of your solution here
  use aeeay.prototype.reverse() on array to reverse
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("aibophpobia"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
