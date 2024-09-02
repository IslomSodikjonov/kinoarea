import { header } from "./components/header.js";
import { footer } from "./components/footer.js";
import { reload } from "./libs/utils.js";
import { createGrid, createCategoryNow } from "./components/grid.js";
import { getData, option } from "./libs/http.js";
import Swiper from "swiper";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/navigation';
import { createMiniCard } from "./components/trailerSlide.js";
import { popularActors1, popularActors2 } from "./components/popularactors.js";
import { createActorsFilm } from "./components/actorsfilms.js";
import { initializeSwiper1, initializeSwiper2 } from "./components/swipers.js";
import { modal } from "./components/modal.js";

modal()
header()
footer()

let id2 = '28%2C%2012%2C%2035'

let discoverMovie = getData(`discover/movie?with_genres=${id2}&language=ru-RU&page=2`, option)
let getUpcoming	= getData("movie/upcoming", option)
let getNowPlaying = getData("movie/now_playing", option)
let getPopularPersons = getData(`person/popular`, option)
let genreCategory = getData("genre/movie/list?language=ru", option)
let getUpcoming2 = getData("/movie/upcoming", option)

Promise.all([discoverMovie, getUpcoming, getNowPlaying, getPopularPersons, genreCategory, getUpcoming2])
	.then(([discoverMovie, getUpcoming, getNowPlaying, getPopularPersons, genreCategory, getUpcoming2]) => {
		reload(discoverMovie.data.results.slice(0, 8), ".dspGrid1", createGrid);
		reload(getUpcoming.data.results, ".swiper-wrapper", createMiniCard);
		reload(getNowPlaying.data.results, "#dspGrid2", createActorsFilm);
		reload(getPopularPersons.data.results.slice(0, 2), ".leftside", popularActors1);
		reload(getPopularPersons.data.results.slice(2, 6), ".rightside", popularActors2);
		reload(genreCategory.data.genres.slice(0, 6), '.genres', createCategoryNow);
		reload(getUpcoming2.data.results, '#dspGrid3', createActorsFilm);
	})
	.catch(error => console.error(error))

initializeSwiper1()
initializeSwiper2()

let scrollbar = document.querySelector(".swiper-scrollbar");
scrollbar.style.position = "absolute";
scrollbar.style.top = "0";
scrollbar.style.left = "0";
scrollbar.style.width = "100%";
scrollbar.style.height = "8px";
scrollbar.style.background = "#1B2133";

let scrollbarDrag = document.querySelector(".swiper-scrollbar-drag");
if (scrollbarDrag) {
	scrollbarDrag.style.background = "#3657CB";
	scrollbarDrag.style.borderRadius = "10px";
	scrollbarDrag.style.height = "100%";
}

let yearbtns = document.querySelectorAll('.box2Btn') 

yearbtns.forEach((btn) => {
	
	btn.onclick = () => {
		let id = btn.getAttribute('year');
		let box = document.querySelector("#dspGrid2");
		box.innerHTML = ""; 

		getData(`discover/movie?include_adult=false&include_video=true&language=ru-RU&page=1&sort_by=popularity.desc&year=${id}`, option)
			.then(res => {
				reload(res.data.results, "#dspGrid2", createActorsFilm);

				yearbtns.forEach(elem => {
					elem.classList.remove('active_btn_category');
				});
				btn.classList.add('active_btn_category');
			})
			.catch(error => console.error(error));
	};
})

let swiper = new Swiper(".mySwiperUppcoming", {
    modules: [Navigation, Pagination],
    pagination: {
      el: "#pag_actor2",
      type: "fraction",
    },
    navigation: {
      nextEl: "#next_actor2",
      prevEl: "#prev_actor2",
    }, 
	slidesPerView: 4,
    slidesPerGroup: 4,        
    spaceBetween: 10,         
    freeMode: false,          
    centeredSlides: false, 
})