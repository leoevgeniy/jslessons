/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      filmsList = document.querySelector('.promo__interactive-list');

const deleteElement = (arr) => {
        arr.forEach(element => {
        element.remove(); 
        });
    },

      clearList = (arr) => {
        arr.innerHTML = '';
    },

      addItemToList = (arr, item) => {
        arr.innerHTML += `
            <li class="promo__interactive-item">${item}
                <div class="delete"></div>
            </li>
    `},
      fillDB = (sourceDB, resultDB) =>{
          sortDB(sourceDB);
          clearList(resultDB);
          sourceDB.forEach(item => {
            addItemToList(resultDB, item);
          });
      },

      sortDB = (arr) => {
        arr.sort();
    },
      replaceBg = (element, img) => {
          element.style.backgroundImage = url(img);
          console.log(img);
      };

console.log(filmsList.innerHTML);

   







deleteElement(adv);
replaceBg(bg, 'img/bg.jpg');
fillDB(movieDB.movies, filmsList);
// clearList(filmsList);
