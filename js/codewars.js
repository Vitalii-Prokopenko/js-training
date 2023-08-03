// ========== Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// solution #1
function createPhoneNumber(numbers) {
  let phoneNumber = "";
  for (let i = 0; i < numbers.length; i += 1) {
    if (i === 0) {
      phoneNumber += "(";
    }
    if (i === 3) {
      phoneNumber += ") ";
    }
    if (i === 6) {
      phoneNumber += "-";
    }

    phoneNumber += numbers[i];
  }
  return phoneNumber;
}
console.log(createPhoneNumber([1, 2, 2, 5, 5, 5, 4, 5, 7, 0]));

// solution #2
function createPhoneNumber(numbers) {
  let phoneNumber = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i += 1) {
    phoneNumber = phoneNumber.replace("x", numbers[i]);
  }
  return phoneNumber;
}
console.log(createPhoneNumber([1, 2, 2, 5, 5, 5, 4, 5, 7, 0]));

// ========= Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
//  solution #1
function descendingOrder(n) {
  // const numberAsString = ''+n;
  let digits = n.toString().split("");
  const descendingDigits = [...digits].sort((a, b) => b - a);
  const descendingNumber = Number(descendingDigits.join(""));
  return descendingNumber;
}
console.log(descendingOrder(123456789));
//   solution #2
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(descendingOrder(123456789));

// ========= Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  let friendList = [];
  for (const friend of friends) {
    if (friend.length === 4) {
      friendList.push(friend);
    }
  }
  return friendList;
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// ========= Equal Sides Of An Array
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.
// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
// Note:
// If you are given an array with multiple answers, return the lowest correct index.

function findEvenIndex(arr) {
  let sumLeft = 0;
  let sumRight = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      sumLeft = 0;
    } else {
      for (let j = 0; j < i; j += 1) {
        sumLeft += arr[j];
      }
    }

    for (let k = i + 1; k < arr.length; k += 1) {
      sumRight += arr[k];
    }
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft = 0;
    sumRight = 0;
  }
  return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));

// ========= Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
function findUniq(arr) {
  arr.sort();
  if (arr[0] !== arr[1]) {
    return arr[0]
  }
  if (arr[arr.length-1] !== arr[arr.length-2]) {
    return arr[arr.length-1]
  }
}
console.log(findUniq([ 1, 1, 1, 3, 1, 1 ]))
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))