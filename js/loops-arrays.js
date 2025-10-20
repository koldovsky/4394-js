// Цикл з передумовою
// let num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// Цикл з постумовою
// let num = 1;
// do {
//   console.log(num);
//   num++;
// } while (num <= 10);

// Цикл з лічильником
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Задача: вивести числа, починаючи зі 100 і завершуючи 42, лише парні
// for (let i = 100; i >= 42; i -= 2) {
//   console.log(i);
// }

const cars = ['Audi Q8', 'Tesla X', 'Jeep Wrangler'];
cars.push('Opel e-Mokka');
cars.push('VW Tiguan');
// console.log(cars);

// for (let i = 0; i < cars.length - 1; i++) {
//     console.log(i, cars[i]);
// }

for (const car of cars) {
    console.log(car);
}

// Поглиблена частина

// Ключові слова break, continue - за можливості уникаємо
// for (let i = 100; i >= 0; i--) {
//   if (i % 2 === 1) continue;
//   console.log(i);
//   if (i === 42) break;
// }

// Додавати на початок
// cars.unshift('Tesla Cybertruck');
// console.log(cars);

// Забрати з початку
// cars.shift();

// Вирізати елементи - splice()
// cars.splice(1, 1);
// console.log(cars);

// Копіювати частину - slice()
// const giftCars = cars.slice(0, 2);
// console.log(giftCars);

// Сортуємо масив
// cars.sort();
// cars.reverse();
// console.log(cars);

// Сортуємо числа
const nums = [42, 10, 422, 100, 1];
nums.sort( (a, b) => a - b );
console.log(nums);

// forEach - виконує іншу функцію для всіх елементів
cars.forEach( el => console.log(el) );

// 3 важливі перебираючі функції
// map - створює новий масив такого самого розміру, виконуючи функцію над кожним елементом
// і записуючи результат в новий масив
const doubledNums = nums.map( num => num * 2 );
console.log(doubledNums);
// filter - фільтрує елементи по функцію з умовою
const evenNums = nums.filter( num => num % 2 === 0 );
console.log(evenNums);
// reduce - виконує функцію над всіма елементами по черзі і повертає одне значення
const sumNums = nums.reduce( (acc, num) => acc + num );
console.log(sumNums);


