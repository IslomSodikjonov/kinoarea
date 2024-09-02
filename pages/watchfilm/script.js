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
import {
    ArcElement,
    Chart,
    DoughnutController,
    Legend,
    Tooltip,
} from "chart.js";
import { createActorsFilm } from "../../components/actorsfilms.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { modal } from "../../components/modal.js";
Chart.register(ArcElement, DoughnutController, Tooltip, ChartDataLabels);

modal()
header()

let id = localStorage.getItem('filmId')

let title = document.querySelector('.main_title')
let bg_card = document.querySelector('.left_main_card')
let backgroundImg = document.querySelector('.backgroundImg');
let miniName = document.querySelector('.name_Kino')
let overview = document.querySelector('.descr')
let originalName = document.querySelector('.org_name_movie')

getData(`movie/${id}`, option)
	.then(res => {
        miniName.textContent = res.data.title
        title.textContent = res.data.title
        overview.textContent = res.data.overview
        originalName.textContent = res.data.original_title
        bg_card.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${res.data.poster_path})`
        backgroundImg.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(https://image.tmdb.org/t/p/original/${res.data.backdrop_path})`;
        
        let iframeName = document.querySelector('.name_of_trailer')
        iframeName.textContent = res.data.title

        let posterName = document.querySelector('.name_movie_poster')
        posterName.textContent = res.data.title

        Chart.register(DoughnutController, ArcElement, Tooltip);
      const canvas = document.querySelector("#MyChart");

      const movieRating = res.data.vote_average; 
        const chart = new Chart(canvas, {
          type: "doughnut",
          data: {
            labels: ["Rating", "Remaining"],
            datasets: [
              {
                data: [movieRating, 10 - movieRating],
                backgroundColor: ["#4BCB36", "#F13030"],
                borderWidth: 0
              },
            ],
          },
          options: {
            plugins: {
              datalabels: {
                color: 'white',
                formatter: function(value, context) {
                  if (context.dataIndex === 0) {
                    return movieRating.toFixed(2); // Отображаем значение movieRating
                  }
                  return '';
                },
                font: {
                  weight: 'bold',
                  size: 16,
                },
              },
            },
          },
        });
      })
	.catch(error => console.error(error));

let yearMovie = document.querySelector('#year_movie')
let city_movie = document.querySelector('#city')
let productPerson = document.querySelector('#product_person')
let genreMovie = document.querySelector('#genre_movie')
let revenueMovie = document.querySelector('#revenue_movie')
let releaseWorld = document.querySelector('#release_world')
let releaseCountry = document.querySelector('#release_country')
let timeMovie = document.querySelector('#time_movie')

getData(`movie/${id}`, option)
	.then(res => {
    yearMovie.textContent = res.data.release_date
    city_movie.textContent = res.data.production_countries[0].name
    productPerson.textContent = res.data.production_companies[0].name
    genreMovie.textContent = res.data.genres.map(genre => genre.name).join(', ');
    revenueMovie.textContent = `$${res.data.revenue}`
    releaseWorld.textContent = res.data.release_date
    releaseCountry.textContent = res.data.release_date
    timeMovie.textContent = `${res.data.runtime} мин`
  })
	.catch(error => console.error(error));

let getCredits = getData(`movie/${id}/credits`, option)
let getImages = getData(`movie/${id}/images`, option2)
let getSimilar = getData(`movie/${id}/similar`, option)

Promise.all([getCredits, getImages, getSimilar])
	.then(([getCredits, getImages, getSimilar]) => {
		reload(getCredits.data.cast.slice(0, 10), ".actors_box", createActorsCard);
    reload(getImages.data.posters.slice(0, 4), ".poster_box", createPosterCard)
    reload(getImages.data.backdrops.slice(10, 19), ".cadr_box", createCadrCard)
		reload(getSimilar.data.results, "#similarMovie", createActorsFilm);
	})
	.catch(error => console.error(error))

getData(`movie/${id}/videos`, option2)
    .then((res) => {
      let trailer = res.data.results.find(item => item.type == "Trailer")
      let iframe = document.querySelector('.my_trailer')
      iframe.src = `https://www.youtube.com/embed/${trailer.key}`
    })
    .catch((error) => console.error(error));

let swiper2 = new Swiper(".mySwiperSimilar", {
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
	freeMode: true,          
	centeredSlides: false, 
})