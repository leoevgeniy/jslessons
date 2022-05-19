/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// let NumberOfFilms;

// function start() {
//     NumberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?');
//     while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
//         NumberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?');
//     }

// }

// start();

// const personalMovieDB = {
//     count: NumberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
//         console.log('Вы классный зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     let i = 0;
//     do {
        
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр по номером ${i + 1}`, '');
//         i++;
//     }
//     while (i < 3);
// }
// writeYourGenres();

// console.log(personalMovieDB);
// // console.log(personalMovieDB.genres);

// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS (lang, callback) {
//     setTimeout(function() {
//     console.log(`Я учу: ${lang}`);
//     });
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок!');
// });

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};


const {border, background} = options.colors;
console.log(border);
// options.makeTest();
// console.log(options.name);

// delete options.name;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${key}:${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }

// }
// console.log(counter);

console.log(Object.keys(options).length);

