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
