// const - незмінна змінна
// let - змінна, яку маємо обов'язково змінити
// var - застаріло, не використовується
// const messageForUser = "Привіт, JavaScript";
// alert(messageForUser);

const userAge = Number(prompt("Введіть ваш вік"));
console.log("Ваш вік", userAge);

const nextAge = add(userAge, 1);
console.log("Наступний вік", nextAge);

const prevAge = userAge - 1;
console.log("Попередній вік", prevAge);

console.log("Випадкове число", rnd());

// Типи
// Number - числа 42, 42.42, 42e42, NaN, Infinity, -Infinity
// + - * / %, Math.sqrt(), Math.abs(), Math.round()
// String - текст, "", '', ``
// Boolean - логічні true, false
// undefined - не визначено
// null - пусто

// Складені типи
// Object - об'єкт, Array - масив

// Не будемо вивчати
// Symbol - не має відношення до тексту, ідентифікатор
// BigInt - великі цілі числа, криптографія

if (userAge >= 18) {
  // < > <= === !== || && // не використовуємо: == !=
  console.log("Користувач повнолітній");
} else {
  console.log("Користувач неповнолітній");
}

// робимо свою функцію
function add(a, b) {
  return a + b;
}

function rnd() {
  return Math.random();
}
