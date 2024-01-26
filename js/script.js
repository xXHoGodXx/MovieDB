/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



//1

let element = document.querySelector('.promo__element')

element.remove()

//2

let tit = document.querySelector('.promo__genre')
tit.textContent = 'Драма'

//3

let bg = document.querySelector('.promo__bg')
bg.style.backgroundImage = `url('./img/bg.jpg')`

//4
let main = document.querySelector('.promo__interactive-list')
movies.sort()
function reload() {
    main.textContent = ''
    for (let item of movies) {

        let idx = movies.indexOf(item)
        //a
        let list = document.createElement('li')
        let trash = document.createElement('div')
        //b
        list.classList.add('promo__interactive-item')
        trash.classList.add('delete')
        list.textContent = `${idx + 1}. ${item.Title}`

        //c

        main.append(list)
        list.append(trash)
        //d
        trash.onclick = () => {
            movies.splice(idx, 1)
            reload()
        }

        list.onclick = () => {
            bg.style.background = `url(${item.Poster}) no-repeat center/cover`
            genre.textContent = item.Genre
            title.textContent = item.Title
            descr.textContent = item.Plot
            raitings.textContent = 'IMDb: ' + item.imdbRating
            kinopoisk.textContent = 'Кинопоиск: ' + item.Metascore
        }

    }
}

reload()

let genre = document.querySelector('.promo__genre')
let title = document.querySelector('.promo__title')
let descr = document.querySelector('.promo__descr')
let raitings = document.querySelector('.IMDb')
let kinopoisk = document.querySelector('.k')

let btn = document.querySelectorAll('.promo__menu-item')

btn.forEach(btnn => {
    btnn.onclick = () => {
        btn.forEach(btnn => btnn.classList.remove('promo__menu-item_active'))
        btnn.classList.add('promo__menu-item_active')
    }
})

