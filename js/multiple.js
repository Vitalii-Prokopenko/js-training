// Числа, кратні 3 чи 5
// Якщо виписати всі натуральні числа менше 10, кратні 3 чи 5, то отримаємо 3, 5, 6 та 9. Сума цих чисел дорівнює 23.
// Знайдіть суму всіх чисел менше 1000, кратних 3 чи 5.

const firstNumber = 3;
const secondNumber = 5;
const maxNumber = 1000;
let totalSum = 0;

for (let i = 1; i < maxNumber; i += 1) {
    if (i % firstNumber !== 0 && i % secondNumber !== 0) {
        continue;        
    } else {
        console.log(i);
        totalSum += i;
    }    
}
console.log(totalSum);
