import { getData, option } from "../libs/http";
import { reload } from "../libs/utils";

export function createGrid(obj) {
    let backgroundImg = document.querySelector('.backgroundImg');

    let gridElem = document.createElement('div');
    let population = document.createElement('div');
    let filmimg = document.createElement('img');
    let filmName = document.createElement('p');
    let filmCategory = document.createElement('p');

    population.textContent = obj.vote_average;
    filmName.textContent = obj.title;
    filmimg.src = `https://image.tmdb.org/t/p/original/${obj.poster_path}`;

    filmimg.style.maxHeight = "90%"
    backgroundImg.classList.add('backgroundImg');
    gridElem.classList.add('gridElem');
    population.classList.add('population');
    filmName.classList.add('filmName');
    filmCategory.classList.add('filmCategory');

    gridElem.onmouseenter = () => {
        backgroundImg.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${obj.backdrop_path})`;
    }

    gridElem.onclick = () => {
        localStorage.setItem('filmId', obj.id)
        window.location.href = '/pages/watchfilm/'
    }

    gridElem.append(population, filmimg, filmName, filmCategory);

    return gridElem
}

export function createCategoryNow(item) {
    let btnCategory = document.createElement('button');

    btnCategory.textContent = item.name;
    btnCategory.classList.add('box1Btn');
    btnCategory.setAttribute('genreid', item.id);

    
    let genrebtns = document.querySelectorAll('.box1Btn') 
    
    genrebtns.forEach((btn) => {
        btn.onclick = () => {
            let id = btn.getAttribute('genreid');
            let box = document.querySelector(".dspGrid1");
            box.innerHTML = ""; 
    
            
            getData(`discover/movie?with_genres=${id}&language=ru-RU&page=2`, option)
                .then(res => {
                    reload(res.data.results.slice(0, 8), ".dspGrid1", createGrid);
                    
    
                    genrebtns.forEach(elem => {
                        elem.classList.remove('active_btn_category');
                    });
                    btn.classList.add('active_btn_category');
                })
                .catch(error => console.error(error));
        };
    })

    return btnCategory;
}
