/* Последовательность треугольных чисел образуется путем сложения натуральных чисел. К примеру, 7-е треугольное число равно 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. Первые десять треугольных чисел:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Перечислим делители первых семи треугольных чисел:

 1: 1
 3: 1, 3
 6: 1, 2, 3, 6
10: 1, 2, 5, 10
15: 1, 3, 5, 15
21: 1, 3, 7, 21
28: 1, 2, 4, 7, 14, 28
Как мы видим, 28 - первое треугольное число, у которого более пяти делителей.

Каково первое треугольное число, у которого более пятисот делителей? */

/* Перебрать треугольные числа, пока не найду то, у коготорого > 500 делителей.

_________________________
Найти треугольное число

1. Использовать цикл while.
2. Счетчик по умолчанию равен 0 и сумма тоже равна 0. 
3. При каждом прохождение цикла увеличивать счетчик на 1.
4. Добавляю к сумме значение счетчика.
5. Делю треугольное число на все числа кроме 1 и самого себя, пока они не закончатся. Если произошло деление без остатка, то повышаю счетчик делителей. 
6. Если счетчик делителей >= 499 то прерываю цикл. Если нет, продолжаю цикл.

*/

const { performance } = require('perf_hooks')
var time = performance.now();

let integer = 0
let sum = 0

while (true) {
    integer++
    sum += integer
    let divideCounter = 0

    for (let i = 1; i <= sum; i++) {

        if (sum % i === 0) {
            divideCounter++
        }
    }

    if (divideCounter > 500) {
        console.log(sum)
        break
    }
}

time = performance.now() - time;
console.log('Время выполнения = ', time);