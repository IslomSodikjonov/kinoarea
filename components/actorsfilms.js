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
        window.location.href = '/pages/watchfilm/'      
    }

    gridElem.append(population, filmimg, filmName, filmCategory);
    slide.append(gridElem)

    return slide
}


    // let genrebtns = document.querySelectorAll('.box1Btn') 
    
    // genrebtns.forEach((btn) => {
        
    //     btn.onclick = () => {
    //         let id = btn.getAttribute('year');
    //         let box = document.querySelector("#dspGrid2");
    //         box.innerHTML = ""; 
    
            
    //         getData(`discover/movie?include_adult=false&include_video=true&language=ru-RU&page=1&sort_by=popularity.desc&year=${id}`, option)
    //             .then(res => {
    //                 console.log(res.data);

    //                 // reload(res.data.results.slice(0, 8), ".dspGrid1", createGrid);
                    
    
    //                 genrebtns.forEach(elem => {
    //                     elem.classList.remove('active_btn_category');
    //                 });
    //                 btn.classList.add('active_btn_category');
    //             })
    //             .catch(error => console.error(error));
    //     };
    // })



export { createActorsFilm }