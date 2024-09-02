import { option } from "../libs/http";
import { reload } from "../libs/utils";

export function createSwiperFilm(obj) {
    let backgroundImg = document.querySelector('.backgroundImg');

    let gridElem = document.createElement('div');
    let population = document.createElement('div');
    let filmimg = document.createElement('img');
    let filmName = document.createElement('p');
    let filmCategory = document.createElement('p');

    population.textContent = obj.vote_average;
    filmName.textContent = obj.title;
    // filmCategory.textContent = obj;
    filmimg.src = `https://image.tmdb.org/t/p/original/${obj.poster_path}`;

    backgroundImg.classList.add('backgroundImg');
    gridElem.classList.add('gridElem');
    gridElem.classList.add('swiper-slide');
    gridElem.classList.add('dspGrid2');
    population.classList.add('population');
    filmName.classList.add('filmName');
    filmCategory.classList.add('filmCategory');

    gridElem.append(population, filmimg, filmName)

    return gridElem
}

export function createCategoryFamous(item) {
    let btnCategory = document.createElement('button');

    btnCategory.textContent = item.name;
    btnCategory.setAttribute('genreid', item.id);

    btnCategory.classList.add('box2Btn');
    btnCategory.classList.add('box2');

    // btnCategory.onclick = () => {
    //     let id = btnCategory.getAttribute('genreid')
    //     let box = document.querySelector(".dspGrid2")
    //     box.innerHTML = ""
    //     getData("discover/movie?with_genres=" + id, option)
    //         .then(res => reload(res.data.results.slice(0, 8), "#dspGrid2", createGrid))
    //         .catch(error => console.error(error));
    // }

    return btnCategory
}