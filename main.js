
'use strict';
// var FirstName = prompt('Как тебя зовут?', '');
// if (FirstName == 'Sergey') {
//     alert("Yes");
// }
// else {
//     alert('No');
// }
// console.log(FirstName);


// var compaNumbers = prompt('comparison of numbers', '');
// if (compaNumbers > 0) {
//     alert("+1");
// } else if (compaNumbers < 0) {
//     alert("-1");
// } else if (compaNumbers == 0) {
//     alert("0");
// }
// console.log(FirstName);


// let a = prompt('first number', '')
// let b = prompt('second numbers', '')
// if (a + b < 4) {
//     alert('Мало');
// }
// else if (a + b > 4) {
//     alert('Много');
// }


// let login = prompt('Login', '')
// let message = (login == 'Сергей') ? 'Привет ' + login :
//     (login == 'Сергей Валериевич') ? 'Здравствуйте ' + login :
//         (login == '') ? 'Ты что меня не знаешь?' : 'Включи мозги';
// alert(message);


// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//     alert('The time is ');
// }



// var age = prompt('введите  возраст', 'от 18 до 65 лет');
// if ((age <= 65) && (age >= 18)) {
//     alert("Вы совершеннолетний");
// }
// else if (age < 18) {
//     alert("Малолетка");
// }
// else if (age > 65) {
//     alert("Пенсионер");
// }
// console.log(FirstName);


// var name = prompt('Кто там?', '');

// if (name == "Admin") {
//     var pass = prompt('Введите пароль', '');
//     if (pass == 'главный') {
//         alert('Здравствуйте');
//     }
//     else if (pass == '' || pass == null) {
//         alert('Отменено');
//     }
//     else {
//         alert('Неверный пароль');
//     }
// }
// else if (name == '' || name == null) {
//     alert('Отменено');
// }
// else {
//     alert('Я Вас не знаю!!!')
// }

// for (let a = 0; a < 3; ++a) {
//     console.log(a);

// }
// let a = 0
// while (a < 3) {
//     console.log(++a);

// }
let a = 0;
do {
    console.log(a++);
} while (a < 3)