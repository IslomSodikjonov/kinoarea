import { getData, option } from "../libs/http.js";

function createMiniCard(item) {
    let slide = document.createElement("div");
    let mini_card = document.createElement("div");
    let mini_card_box = document.createElement("div");
    let play_btn_mini = document.createElement("div");
    let mini_card_name = document.createElement("p");
    let play = document.createElement("img");
  
    slide.classList.add("swiper-slide");
    mini_card.classList.add("mini_card");
    mini_card_box.classList.add("mini_card_box");
    play_btn_mini.classList.add("play_btn_mini");
    mini_card_name.classList.add("mini_card_name");
    play.classList.add("play");
  
    play.src = "/play.svg";
    mini_card_name.textContent = item.title;
    mini_card_box.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`;

    play_btn_mini.append(play);
    mini_card_box.append(play_btn_mini);
    mini_card.append(mini_card_box, mini_card_name);
    slide.append(mini_card);  

    slide.onclick = () => {
        getData(`movie/${item.id}/videos`, option)
            .then((res) => {
                let trailer = res.data.results.find(item => item.type == "Trailer")
                let iframe = document.querySelector('.main_page_iframe')
                let iframeName = document.querySelector('.name_of_trailer')

                iframe.src = `https://www.youtube.com/embed/${trailer.key}`
                iframeName.textContent = trailer.name
            })
            .catch((error) => console.error(error));
    }


    return slide
}

export { createMiniCard }