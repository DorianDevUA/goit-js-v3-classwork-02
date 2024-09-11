// ---------------- Розгалудження if...else ----------------
// if (умова) {
//   код що виконується, якщо умова правдива (приводиться до true)
// } else {
//   код що виконається, якщо основна умова не виконується (приводиться до false)
// }

// ---------------- Exemple 1 ----------------
// if (4 > 5) {
//   // 4 > 5 => false
//   console.log('true');
// } else {
//   console.log('false');
// }

// ---------------- Exemple 2 ----------------
// const value = 7;
// if (value > 5) {
//   // 7 > 5 => true
//   console.log(`${value} > 5`);
// } else if (value > 6) {
//   console.log(`${value} > 6`);
// } else if (value > 3) {
//   console.log(`${value} > 3`);
// } else {
//   console.log('else');
// }

// ---------------- Exemple 3 ----------------
// const value = '';
// if (value) {
//   // '' => false
//   console.log('if');
// } else {
//   console.log('else');
// }

// ---------------- Тернарний оператор ----------------
// condition ? exmple 1 : example 2;

// const result = 7 > 6 ? 'більше' : 'меньше';
// console.log(result);

// let result;
// if (7 > 6) {
//   result = 'більше';
// } else {
//   result = 'меньше';
// }
// console.log(result);

// ---------------- Розгалудження if...else-if...else ----------------
// const value = 2;
// if (value === 1) {
//   console.log('one');
// } else if (value === 2) {
//   console.log('two');
// } else if (value === 5) {
//   console.log('Good result');
// } else {
//   console.log('default');
// }

// ---------------- Розгалудження switch...case...default ----------------
// Виконує суворе порівняння

// const value = 2;
// switch (value) {
//   case 1:
//     console.log('one');
//     break;
//   case 2:
//     console.log('two');
//     break;
//   case 5:
//     console.log('Good result');
//     break;
//   default:
//     console.log('default');
// }

// ---------------- Exemple ----------------
// const a = 'name';
// switch (a) {
//   case 'age':
//     console.log('age');
//     break;
//   case 'name':
//     console.log('name');
//     break;
//   case 'city':
//     console.log('city');
//     break;
//   default:
//     console.log('default');
// }

// ---------------- Області видимості ----------------
// 1 Глобальна
// 2 Блочна
// 3 Функціональна

// Глобальна
// const let
// var

// Блочна
// {
//
// }

// Функціональна
// function fn(){
//
// }

// ---------------- Exemple 1 ----------------
// const a = 15;
// if (true) {
//   console.log(a);
// }

// ---------------- Exemple 2 ----------------
// if (true) {
//   var b = 25;
// }
// console.log(b);

// ---------------- Exemple 3 ----------------
// const a = 15;
// function foo() {
//   console.log(a);
//   var b = 22;
// }
// console.log(b);

// ---------------- Exemple 4 ----------------
// // В глобальній
// let a = 15;

// if (true) {
//   // В блочнаій
//   let a = 1;
//   a = 25;
// }

// console.log(a);

// ---------------- Exemple 5 ----------------
// // глобальна
// let a = 15;

// if (true) {
//   // звернення до ініціалізації
//   a = 25;
//   let a = 1;
// }

// console.log(a);

// ---------------- Exemple 6 ----------------
// // глобальна;
// let a = 10;

// if (true) {
//   // блочна
//   a = 15;
//   if (true) {
//     a = 25;
//   }
// }
// console.log(a);

// ---------------- Exemple 7 ----------------
// if (true) {
//   // блочна
//   let a = 15;
//   if (true) {
//     a = 25;
//   }
// }
// console.log(a);

// ---------------- Exemple 8 ----------------
// if (true) {
//   // блочна
//   let a = 15;
//   if (true) {
//     a = 25;
//   }
//   console.log(a);
// }

// ---------------- Exemple 9 ----------------
// let a = 15;

// if (true) {
//   // блочна
//   a = 15;
//   if (true) {
//     let a = 25;
//   }
// }
// console.log(a);

// ---------------- Exemple 10 ----------------
// let b = 25;

// if (true) {
//   // блочна
//   let a = 15;
//   b = 44;
//   if (true) {
//     a = 25;
//     b = 31;
//   }
//   a = 44;
//   console.log(b);
// }

// console.log(a);

// ---------------- Exemple 11 ----------------
// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// // 1
// // 2
// // 3
// // 4
// // 5

// ---------------- Exemple 12 ----------------
// const str = 'hello world';

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]); // 0,1,2,3,4,5,6
// }

// ---------------- Exemple 13 ----------------
// let i = 0;

// while (true) {
//   if (i >= 10) {
//     break;
//   }

//   console.log('hello world');
//   i += 1;
// }

// ---------------- Exemple 14 ----------------
// const str = 'hello world';

// let i = 0;

// while (i < str.length) {
//   if (str[i] === 'w') {
//     console.log('find:', str[i]);
//     break;
//   }

//   console.log('no', str[i]);
//   i += 1;
// }

// ---------------- Exemple 15 ----------------
// const str = 'hello world';
// let i = 15;

// do {
//   if (str[i] === 'w') {
//     console.log('yes');
//     break;
//   }

//   console.log('no');
//   i += 1;
// } while (i < str.length);

// ----- Example - Запит числового значення -----
const getNumericValue = message => {
  while (true) {
    const inputValue = prompt(message);
    const isValidValue =
      !isNaN(inputValue) && inputValue !== '' && inputValue !== null;

    if (inputValue === null) {
      alert('Скасування вводу.');
      console.error('Скасовано користувачем');
      return null;
    }

    if (isValidValue) {
      return Number(inputValue);
    }

    alert('Введіть корректне число.');
  }
};

// console.log(getNumericValue());

// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const question = 'Яка офіційна назва JavaScript?';
// const correctAnswer = 'ECMAScript';
// const input = prompt(question) ?? '';

// Тернарний оператор
// input.toLowerCase() === correctAnswer.toLowerCase()
//   ? alert('Правильно')
//   : alert('Не знаєте? ECMAScript!');

// if...else
// if (input.toLowerCase() === correctAnswer.toLowerCase()) {
//   alert('Правильно');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 26;

// let timeString;

// if (minutes) {
//   timeString = `${hours} г. ${minutes} хв.`;
// } else {
//   timeString = `${hours} г.`;
// }

// console.log(timeString);

// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const message = 'Введіть число';
// let userInput = getNumericValue(message);

// if (!userInput) {
//   console.log('Це нуль');
// } else if (userInput > 0) {
//   console.log('Це позитивне число');
// } else if (userInput < 0) {
//   console.log('Це негативне число');
// } else {
//   console.log('Скасовано користувачем');
// }

// Парне...не парне
// if (userInput % 2) {
//   console.log(`Число ${userInput} - не парне`);
// } else {
//   console.log(`Число ${userInput} - парне!`);
// }

// console.log(userInput % 2 ? 'Не парне' : 'Парне');

// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   //a > b ? console.log(a) : console.log(b);
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// if(!link.endsWith('/')){
//     link +='/';
// }

// console.log(link);

// Example 6 - Форматування посилання (endsWith, includes та логічне «І» (||))
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about';

// const isMySite = link.includes('my-site');
// const isEndsWithSlash = link.endsWith('/');
// // console.log('includes: ', isMySite);
// // console.log('endsWith: ', isEndsWithSlash);

// if (!isEndsWithSlash && isMySite) {
//   link += '/';
// }

// console.log(link);

// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 6, використовуючи тернарний оператор.

// let link = 'https://my-site.com/about';
// const isMySite = link.includes('my-site');
// const isEndsWithSlash = link.endsWith('/');

// console.log(isMySite && !isEndsWithSlash ? (link += '/') : link);

// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

// const hours = 16;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const daysUntilDeadline = 2;

// if (daysUntilDeadline >= 3) {
//   console.log('Дата у майбутньому');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else {
//   console.log('Сьогодні');
// }

// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 9 використовуючи switch.

// const daysUntilDeadline = -2;

// if (daysUntilDeadline >= 0) {
//   switch (daysUntilDeadline) {
//     case 0:
//       console.log('Сьогодні');
//       break;
//     case 1:
//       console.log('Завтра');
//       break;
//     case 2:
//       console.log('Післязавтра');
//       break;
//     default:
//       console.log('Дата у майбутньому');
//   }
// } else {
//   console.log('Друже, ти проспав!');
// }

// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я адмін", то вивести рядок "Доброго дня!"
// Інакше виводити рядок "Невірний пароль"

// const login = prompt('Введіть свій ЛОГІН');

// if (!login) {
//   console.log('Скасовано');
// } else if (login === 'Адмін') {
//   const password = prompt('Введіть свій ПАРОЛЬ');
//   console.log(password === 'Я адмін' ? 'Доброго дня!' : 'Невірний пароль');
// } else {
//   console.log('Я вас не знаю');
// }

// console.log(login);
