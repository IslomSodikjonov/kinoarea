function createActorsFilm(obj) {
    let slide = document.createElement("div");
    let gridElem = document.createElement('div');
    let population = document.createElement('div');
    let filmimg = document.createElement('img');
    let filmName = document.createElement('p');
    let filmCategory = document.createElement('p');

    population.textContent = obj.vote_average;
    filmName.textContent = obj.title;
    // filmCategory.textContent = obj;
    filmimg.src = `https://image.tmdb.org/t/p/original/${obj.poster_path}`;

    slide.classList.add("swiper-slide");
    gridElem.classList.add('gridElem');
    population.classList.add('population');
    filmName.classList.add('filmName');
    filmCategory.classList.add('filmCategory');

    gridElem.onclick = () => {    
        localStorage.setItem('filmId', obj.id)
        window.location.href = 'http://localhost:5173/pages/watchfilm/'      
    }

    gridElem.append(population, filmimg, filmName, filmCategory);
    slide.append(gridElem)

    return slide
}

export { createActorsFilm }