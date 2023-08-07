// ======== ARRAYS
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

console.log(numbers);
let sumEvenNumbers = 0;
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
    sumEvenNumbers += number;
  }
}
console.log(sumEvenNumbers);

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";

// #1
let message = `Пользователь ${loginToFind} не найден.`;
for (let i = 0; i < logins.length; i += 1) {
  let login = logins[i];
  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден.`;
    break;
  }
}
console.log(message);

// #2
let messageSecond = `Пользователь ${loginToFind} не найден.`;
for (const login of logins) {
  if (login === loginToFind) {
    messageSecond = `Пользователь ${loginToFind} найден.`;
    break;
  }
}
console.log(messageSecond);

// #3
// let messageThird = `Пользователь ${loginToFind} не найден.`;
const messageThird = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;
console.log(messageThird);

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbersToFindSmallest = [51, 18, 13, 24, 7, 85, 1, 19];
console.log(numbersToFindSmallest);
let smallestNumber = numbersToFindSmallest[0];
for (const number of numbersToFindSmallest) {
  smallestNumber = number < smallestNumber ? number : smallestNumber;
}
console.log(smallestNumber);

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// #1
let friendsInString = "";
for (let i = 0; i < friends.length; i += 1) {
  if (i < friends.length - 1) {
    friendsInString += `${friends[i]}, `;
  } else {
    friendsInString += friends[i];
  }
}
console.log(friendsInString);
// #2
const friendsJoinedInString = friends.join(", ");
console.log(friendsJoinedInString);

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = "qWeRTzxCv";
const letters = string.split("");
let invertedString = "";
console.log(letters);
for (const letter of letters) {
  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(string);
console.log(invertedString);

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = "Top 10 benefits of React framework";

const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(" ");
console.log(words);

const slug = words.join("-");
console.log(slug);

/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const array12 = array1.concat(array2);
let sum = 0;

for (const elem of array12) {
  sum += elem;
}
console.log(sum);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

console.table(cards);
//   Delete card
const cardToDelete = "Карточка-3";
const newCards = cards.splice(cards.indexOf(cardToDelete), 1);
console.log(cards);
console.log(newCards);
//  Add card
const cardToAdd = cardToDelete;
const cardToAddEnd = "Карточка-6";
cards.splice(2, 0, cardToAdd);
console.log(cards);
cards.splice(5, 0, cardToAddEnd);
console.log(cards);
//  Update card
// const cardToUpdate = cards[3];
const updatedCard = `Updated ${cards[3]}`;
cards.splice(3, 1, updatedCard);
console.table(cards);

// ======== Ветвления и цикли
/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */
const stars = 4;
switch (stars) {
  case 1:
    console.log(20);
    break;
  case 2:
    console.log(30);
    break;
  case 3:
    console.log(50);
    break;
  case 4:
    console.log(70);
    break;
  case 5:
    console.log(120);
    break;
  default:
    console.log("Такого кол-ва звезд нет");
}

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

const stars2 = 4;
switch (stars2) {
  case 1:
  case 2:
    console.log(20);
    break;
  case 3:
  case 4:
    console.log(50);
    break;
  case 5:
    console.log(120);
    break;
  default:
    console.log("Такого кол-ва звезд нет");
}

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

const option = 15;
let messageDelivery = "";
switch (option) {
  case 1:
    messageDelivery = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
    break;
  case 2:
    messageDelivery = "Курьер доставит заказ завтра с 9:00 до 18:00";
    break;
  case 3:
    messageDelivery = "Посылка будет отправлена сегодня";
    break;
  default:
    messageDelivery = "Вам перезвонит менеджер";
}
console.log(messageDelivery);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

let totalSalary2 = 0;
let employeeSalary = 0;
const minSalary = 500;
const maxSalary = 5000;
const employees = 5;

for (let i = 1; i <= employees; i += 1) {
  employeeSalary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(employeeSalary);
  totalSalary2 += employeeSalary;
}
console.log(totalSalary2);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
const minNumber = Math.round(Math.random() * (1000 - 0));
const maxNumber = minNumber + 11;
console.log(`Minimum: ${minNumber}`);
console.log(`Maximum: ${maxNumber}`);

let total = 0;

for (let i = minNumber; i <= maxNumber; i += 1) {
  if (i % 2 === 0) {
    total += i;
    console.log(i);
  }
}
console.log(`Sum: ${total}`);

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */
const balance = 5000;
const payment = 4000;

console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
);
if (balance < payment) {
  console.log("На счету недостаточно средств для проведения операции!");
} else {
  console.log(`На счету осталось ${balance - payment} кредитов`);
}
console.log("Операция завершена");

/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */
const totalSpent = 1001;
const currentPayment = 2000;
let discount = 0;

if (totalSpent > 5000) {
  discount = 10;
} else if (totalSpent > 1000) {
  discount = 5;
} else if (totalSpent > 100) {
  discount = 2;
} else {
  discount = 0;
}
console.log(
  `Оформляем заказ на сумму ${currentPayment} со скидкой ${discount}%`
);

/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
function calculateTotalPrice(items) {
  let totalPrice = 0;
  for (const item of items) {
    totalPrice += item;
  }
  return totalPrice;
}
console.log(cart);
console.log(calculateTotalPrice(cart));

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const arrayToFindSmallest = [51, 18, 13, 24, 7, 85, 166, 19];
console.log(numbersToFindSmallest);
const findSmallestNumber = function (array) {
  let smallestNumber = array[0];
  for (const number of array) {
    smallestNumber = number < smallestNumber ? number : smallestNumber;
  }
  return smallestNumber;
};
console.log(findSmallestNumber(arrayToFindSmallest));

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */
function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(add(1, 2, 3, 4, 5));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

function filterNumbers(array, ...args) {
  let newArray = [];
  for (const arg of args) {
    if (array.includes(arg)) {
      newArray.push(arg);
    }
  }
  return newArray;
}

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
  },
};

user.showTag();//user

/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

const foo = function () {
  console.log("foo -> this", this);
};

foo(); //window

/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */
// функція заявлена як зовнішня, тобто не у складі об'єкту
const showTag = function () {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
};
// функція викликана без прив'язки до об'єкту
showTag();//window, undefined

const user2 = {
    tag: 'Mango',
};
// створено метод об'єкту, якому як значення присвоєно зовнішню функцію
user2.showUserTag = showTag;

console.log('user2', user2); 
user2.showUserTag();
// this підтягує дані по об'єкту user2

/*
 * Вызов без контекста, но объявлена как метод объекта.
 */

const user3 = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
        console.log('showTag -> this.tag', this.tag);
    },
};

user3.showTag();
// user3

const outerShowTag = user3.showTag;

outerShowTag();
// window, undefined


/*
 * Контекст в callback-функциях
 */

const user4 = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
        console.log('showTag -> this.tag', this.tag);
    },
};

const invokeAction = function (action) {
    console.log(action);

    action();
};

invokeAction(user4.showTag);
// window, undefined

/*
 * Тренируемся 1
 */

const fn = function () {
    console.log('fn -> this', this);
};

fn(); // Какой this ??? window

/*
 * Тренируемся 2
 */

const book = {
    title: 'React for beginners',
    showThis() {
        console.log('showThis -> this', this);
    },
    showTitle() {
        console.log('showTitle -> this.title', this.title);
    },
};

book.showThis(); // Какой this ??? book

const outerShowThis = book.showThis;
outerShowThis(); // Какой this ??? window

const outerShowTitle = book.showTitle;
outerShowTitle(); // Какой this ??? undefined

/*
 * Тренируемся 3
 */

const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('changeColor -> this', this);
        this.color = color;
    };

    changeColor(); // Какой this ??? undefined

    const sweater = {
        color: 'teal',
    };

    sweater.updateColor = changeColor;

    // sweater.updateColor('red'); // Какой this ???

    return sweater.updateColor;
};

const swapColor = makeChangeColor();

swapColor('blue'); // Какой this ???

/*
 * Тренируемся 4
 */

const makeChangeColor2 = function () {
    const changeColor = function (color) {
        console.log('changeColor -> this', this);
    };

    return changeColor;
};

const updateColor = makeChangeColor2();
updateColor('yellow'); // Какой this ??? window

const hat = {
    color: 'blue',
    updateColor: updateColor,
};

hat.updateColor('orange'); // Какой this ??? hat

/*
 * Тренируемся 5
 */

const counter = {
  value: 0,
  increment(value) {
      console.log('increment -> this', this);
      this.value += value;
  },
  decrement(value) {
      console.log('decrement -> this', this);
      this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment);
updateCounter(5, counter.decrement);