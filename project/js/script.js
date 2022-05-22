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
      filmsList = document.querySelector('.promo__interactive-list'),
      filmsItem = filmsList.querySelectorAll('.promo__interactive-item'),
      form = document.querySelector('form.add'),
      inputField = form.querySelector('form input'),
      checkBox = form.querySelector('[type="checkbox"]');

const deleteElement = (arr) => {
        arr.forEach(element => {
        element.remove(); 
        });
    },

      clearList = (arr) => {
        arr.innerHTML = '';
    },

      addItemToList = (arr, i, item) => {
        arr.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>
    `;},
      fillDB = (sourceDB, resultDB) =>{
          sortDB(sourceDB);
          
          clearList(resultDB);
          sourceDB.forEach((item, i) => {
            addItemToList(resultDB, i, item);
          });
          document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                console.log(btn, i);
                btn.parentElement.remove();
                sourceDB.splice(i, 1);
                sortDB(sourceDB);
                console.log(i);
                fillDB(sourceDB, resultDB);
            });
            });
        //   numbering(resultDB);
      },

      sortDB = (arr) => {
        arr.sort();
    },
      replaceBg = (element, img) => {
          element.style.backgroundImage = `url(${img})`;
      },

      confirmF = (sourceDB, resultDB, value, check) => {
        if (value) {
            if (value.length > 21) {
                value = `${value.substring(0, 22)}...`;
            }
            sourceDB.push(value);
            sortDB(sourceDB);
            fillDB(sourceDB, resultDB);
            if (check) {
                console.log('Добавляем любимый фильм!');
            }
        }
      },
      numbering = (arr) => {
        arr.forEach((item, i) => {
            item = `${i+1} ${item}`;
        });
      };

form.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmF(movieDB.movies, filmsList, inputField.value, checkBox);
    form.reset();
});

deleteElement(adv);
replaceBg(bg, 'img/bg.jpg');
fillDB(movieDB.movies, filmsList);
// clearList(filmsList);
