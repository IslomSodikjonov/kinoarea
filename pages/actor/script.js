import { createActorsCard } from "../../components/actorscard.js";
import { header } from "../../components/header.js";
import { createCadrCard, createPosterCard } from "../../components/posters.js";
import { getData, option, option2 } from "../../libs/http.js";
import { reload } from "../../libs/utils.js";
import Swiper from "swiper";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/navigation'; 
import { createActorsFilm } from "../../components/actorsfilms.js";
import { modal } from "../../components/modal.js";

modal()
header()

let id = localStorage.getItem('actorId')

let title = document.querySelector('.main_title')
let bg_card = document.querySelector('.left_main_card')
let miniName = document.querySelector('.name_Kino')
let actorName = document.querySelector('.name_credit')
// let overview = document.querySelector('.descr')
let originalName = document.querySelector('.org_name_movie')
let carrierTxt = document.querySelector('#carrier')
let heightTxt = document.querySelector('#height')
let birthTxt = document.querySelector('#birth')
let placeBirth = document.querySelector('#place_birth')
let genrActor = document.querySelector('#genr_actor')
let allMovies = document.querySelector('#allmovies')

let swiper = new Swiper(".mySwiperActor", {
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, 
	slidesPerView: 4,
    slidesPerGroup: 4,        
    spaceBetween: 10,         
    freeMode: false,          
    centeredSlides: false, 
})

getData(`person/${id}`, option)
	.then(res => {
        miniName.textContent = res.data.name
        actorName.textContent = res.data.name
        title.textContent = res.data.name
        // overview.textContent = res.data.overview
        bg_card.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${res.data.profile_path})`
        carrierTxt.textContent = res.data.known_for_department
        heightTxt.textContent = "1.75 см"
        birthTxt.textContent = res.data.birthday
        genrActor.textContent = "Боевик, Драма, Триллер, Документальный..."
        placeBirth.textContent = res.data.place_of_birth   
    })
	.catch(error => console.error(error));

getData(`person/${id}`, option2)
	.then(res => {
        originalName.textContent = res.data.name
    })
	.catch(error => console.error(error));

getData(`person/${id}/movie_credits`, option)
	.then(res => {
        allMovies.textContent = res.data.cast.length
        reload(res.data.cast.slice(0, 32), ".swiper-wrapper", createActorsFilm);
    })
	.catch(error => console.error(error));


getData(`person/${id}/images`, option2)
    .then((res) => {
        reload(res.data.profiles.slice(0, 8), ".poster_box", createPosterCard)
    })
    .catch((error) => console.error(error));