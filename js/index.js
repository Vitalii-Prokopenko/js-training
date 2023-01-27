/* === MENTOR === */
// Шпаргалка з оголошення функцій у JS:

// Функціональний вираз
//   (function expression)
// const greet = function (name) {
//  return `Hello, ${name}`;
// };

// Оголошення функції
//   (function declaration)
// function greet(name) {
//  return `Hello, ${name}!`;
// }

/* === LIFEHACKS === */

// Декілька лайфхаків при роботі з масивами.

// Як швидко очистити масив

// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0;
// console.log(fruits); // поверне []

// Як об’єднати більше двох масивів

// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]

// Як отримати рандомне значення масиву

// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву

/* === EXERCISES === */

// ==============================================
// #1 Числа, кратні 3 чи 5
// Якщо виписати всі натуральні числа менше 10, кратні 3 чи 5, то отримаємо 3, 5, 6 та 9. Сума цих чисел дорівнює 23.
// Знайдіть суму всіх чисел менше 1000, кратних 3 чи 5.

// const firstNumber = 3;
// const secondNumber = 5;
// const maxNumber = 1000;
// let totalSum = 0;

// for (let i = 1; i < maxNumber; i += 1) {
//     if (i % firstNumber !== 0 && i % secondNumber !== 0) {
//         continue;
//     } else {
//         console.log(i);
//         totalSum += i;
//     }
// }
// console.log(totalSum);

// ==============================================
// #2 Парні числа Фібоначчі
// Кожен наступний елемент ряду Фібоначчі виходить при складанні двох попередніх.Починаючи з 1 та 2, перші 10 елементів будуть:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Знайдіть суму всіх парних елементів ряду Фібоначчі, які не перевищують чотирьох мільйонів.

// ==============================================
// №3
// Прості дільники числа 13195 – це 5, 7, 13 та 29. Який найбільший дільник числа 600851475143 є простим числом?

// ==============================================
// №4
// Число-паліндром з обох сторін (справа ліворуч і ліворуч) читається однаково. Найбільше число-паліндром, одержане множенням двох двоцифрових чисел – 9009 = 91 × 99. Знайдіть найбільший паліндром, одержаний множенням двох трицифрових чисел. Оригінал

// ==============================================
// №5
// 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.
// Какое самое маленькое число делится нацело на все числа от 1 до 20?

// ==============================================
// №6
// Сума квадратів перших десяти натуральних чисел дорівнює
// 1^2 + 2^2 + ... + 102 = 385
// Квадрат суми перших десяти натуральних чисел дорівнює
// (1 + 2 + ... + 10) ^2 = 552 = 3025
// Отже, різниця між сумою квадратів та квадратом суми перших десяти натуральних чисел становить 3025 − 385 = 2640.
// Знайдіть різницю між сумою квадратів і квадратом суми перших ста натуральних чисел.

// ==============================================
// №7
// Виписавши перші шість простих чисел, отримаємо 2, 3, 5, 7, 11 і 13. Очевидно, що 6 просте число - 13.
// Яке число є 10001-м простим числом?

// ==============================================
// №8
// Найбільший добуток чотирьох послідовних цифр у наведеному нижче 1000-значному числі дорівнює 9 × 9 × 8 × 9 = 5832.

// 73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450

// Знайдіть найбільший добуток тринадцяти послідовних цифр у цьому числі.

// ==============================================
// №9
// Трійка Піфагора - три натуральні числа a < b < c, для яких виконується рівність
// a2 + b2 = c2
// Наприклад, 32 + 42 = 9 + 16 = 25 = 52.
// Існує лише одна трійка Піфагора, для якої a+b+c=1000.
// Знайдіть добуток abc.

// ==============================================
// №10
// Сума простих чисел менша за 10 дорівнює 2 + 3 + 5 + 7 = 17.
// Знайдіть суму всіх простих чисел менше двох мільйонів.

// ++++++++++++++++++++++++++++++++++++++++++++++

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// ===== Solution 1
// function disemvowel(str) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   const strLetters = str.split("");
//   console.log(strLetters);

//   let isNotVowel;

//   let strNew = [];

//   for (let i = 0; i < strLetters.length; i += 1) {
//     isNotVowel = true;

//     let letter = strLetters[i];

//     for (let j = 0; j < vowels.length; j += 1) {
//       if (letter === vowels[j]) {
//         isNotVowel = false;
//       }
//     }
//     if (isNotVowel) {
//       strNew.push(letter);
//     }
//   }
//   strNew = strNew.join("");
//   return strNew;
// }
// let newString = disemvowel(`Hello everyone goooood buy !`);
// console.log(newString);

// ===== Solution 2
// function disemvowel(str) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   const strLetters = str.split("");
//   console.log(strLetters);

//   let strNew = [];

//   for (let i = 0; i < strLetters.length; i += 1) {
//     let letter = strLetters[i];

//     if (!vowels.includes(letter)) {
//       strNew.push(letter);
//     }
//   }
//   strNew = strNew.join("");
//   return strNew;
// }

// let newString = disemvowel(`This website is for losers LOL!`);
// console.log(newString);

// ======= Вебінар 21/01/2023 ==================
// ==== #1 ====
// Напишіть код, який запитуватиме логін за допомогою prompt і буде виводити результат в консоль браузера

// Якщо користувач вводить "Admin",  то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"

//Пароль перевіряти так:
// Якщо введено пароль "I am admin", то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"

// const login = prompt("Type your login");
// switch (login) {
//   case "admin":
//     const password = prompt("Type your password");
//     if (password === "I am admin") {
//       console.log("Hello!");
//     } else {
//       console.log("Wrong password!");
//     }
//     break;
//   case "":
//   case null:
//     console.log("Cancel");
//     break;
//   default:
//     console.log("I do not know");
// }

// ==== #2 ====

// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const language = prompt("Type programming language");

// switch (language.toLowerCase()) {
//   case "php":
//     console.log("PHP Расмус Лердорф");
//     break;
//   case "c#":
//     console.log(
//       "C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота"
//     );
//     break;
//   case "swift":
//     console.log("Swift Кріс Латтнер");
//     break;
//   case "js":
//     console.log("JS Брендан Ейх");
//     break;
//   case "java":
//     console.log("Java Джеймс Гослінг");
//     break;
//   case "python":
//     console.log("Python Гвідо ван Россум");
//     break;
//   default:
//     console.log("there is no language with such a name");
// }

// ==== #3 ====
// Напишіть через світч калькулятор
// Потрібно ввести перше число в prompt, потім математичну операцію
// Тоді ввести наступне число

// const number1 = Number(prompt("Enter first number"));
// const operation = prompt("Enter operation (+, -, *, /)");
// const number2 = Number(prompt("Enter second number"));

// switch (operation) {
//   case "+":
//     console.log(number1 + number2);
//     break;
//   case "-":
//     console.log(number1 - number2);
//     break;
//   case "*":
//     console.log(number1 * number2);
//     break;
//   case "/":
//     console.log(number1 / number2);
//     break;
//   default:
//     console.log("wrong operation!");
// }

// ==== #4 ====
//Напишіть цикл, який виводить у консоль
//1. числа від max до min за спаданням
//2. Виведіть у консоль усіх парні числа від min до max
//3. За допомогою циклу for додайте всі парні числа від min до max
//const max = 90;
//const min = 33;

// const min = 33;
// const max = 90;
// // 1
// console.log("Task #1");
// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }
// // 2
// console.log("Task #2");
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }
// // 3
// console.log("Task #3");
// let sum = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// ==== #5 ====
// Напишіть програму, щоб обертати рядок введений в propmt у зворотньому
// напрямку При цьому потрібно залишити першу літеру на своєму місці

// #1 solution (for)
// const str = prompt("Type the sentence");
// console.log(str);
// let newStr = str[0];
// console.log(`First letter ${newStr}`);
// for (let i = str.length - 1; i >= 1; i -= 1) {
//   let letter = str[i];
//   newStr += letter;
//   console.log(newStr);
// }
// console.log(newStr);

// #2 solution (array)
// const str = prompt("Type the sentence");
// let newStr = str.split("");
// let firstLetter = newStr[0];
// newStr.push(firstLetter);
// newStr.splice(0, 1);
// newStr.reverse();
// newStr = newStr.join("");
// console.log(newStr);

// ==== #6 ====
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Після введення число додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.

// let total = 0;
// let inputNumber = 0;

// do {
//   inputNumber = prompt("Type the number");
//   switch (inputNumber) {
//     case null:
//       console.log("You stopped summing");
//       break;
//     default:
//       let myNumber = Number(inputNumber);
//       if (myNumber) {
//         total += myNumber;
//       }
//   }
// } while (inputNumber !== null);
// console.log(`Загальна сума введених чисел дорівнює ${total}.`);

// ==== #7 ====
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// let inputNumber;
// let userInput;
// let controlInput;
// do {
//   userInput = prompt("Type the number more then 100");
//   inputNumber = Number(userInput);
//   if (userInput === null) {
//     controlInput = 1;
//   } else if (inputNumber > 100) {
//     controlInput = 1;
//   } else controlInput = 0;
// } while (controlInput === 0);
// console.log("You typed the number more then 100 or canceled");

// ==== #8 ====
// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const grossIncome = Number(prompt("Type your gross salary"));
// const period = Number(prompt("Type the period in months"));
// let netIncome = 0;
// let tax = 0;
// for (let i = 1; i <= period; i += 1) {
//   netIncome += grossIncome * 0.95;
//   tax += grossIncome * 0.05;
// }
// console.log(
//   `Your net salary for ${period} months is ${netIncome} and the tax is ${tax}.`
// );

// ==== #9 ====
// Напишіть програму для перевірки чи є число простим чи ні

// const inputNumber = Number(prompt("Type the number"));
// // Для складного числа змінна дорівнює 0
// let isPrimaryNumber = 0;
// for (i = 2; i < inputNumber; i += 1) {
//   if (inputNumber % 2 === 0) {
//     console.log(
//       `The number ${inputNumber} is divided by ${i} without a remainder`
//     );
//     break;
//   } else {
//     // Для простого числа змінна дорівнює 1
//     isPrimaryNumber = 1;
//   }
// }
// switch (isPrimaryNumber) {
//   case 1:
//     console.log("The number is primary");
//     break;
//   default:
//     console.log("The number is not primary");
// }

// ========================= CODEWARS ==========================
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->

// function digitalRoot(n) {
//   let levelOfExponention = 1;
//   let digitReminder = 0;
//   let numberOfDigits = 1;
//   let numberWithoutFoundDigits = n;
//   let digitArray = [];
//   do {
//     numberOfDigits = 10 ** levelOfExponention;
//     digitReminder = numberWithoutFoundDigits % numberOfDigits;
//     digitArray.push(digitReminder / 10 ** (levelOfExponention - 1));
//     console.log(digitArray);
//     numberWithoutFoundDigits -= digitReminder;
//     levelOfExponention += 1;
//   } while (n > numberOfDigits);
//   let sum = 0;
//   for (let q = 0; q < digitArray.length; q += 1) {
//     let digit = digitArray[q];
//     sum += digit;
//   }
//   return sum;
// }

// const result = digitalRoot(16);
// console.log(result);

// =============

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let propValue = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValue.push(product[propName]);
//     }
//   }
//   return propValue;

//   // Change code above this line
// }
// console.log(getAllPropValues("price"));

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highIcon);
// console.log(meanTemperature);

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     low: todayLow,
//     high: todayHigh,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  //   let newData = {};

  const {
    text = data.text,
    category: dataCategory,
    priority: dataPriority,
    completed: dataCompleted,
  } = newData;
  return newData;
  // Change code above this line
}
console.log(makeTask("ssddd"));
