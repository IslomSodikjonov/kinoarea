import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

export function initializeSwiper1() {
    return new Swiper(".mySwiper", {
        modules: [Scrollbar],
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
    });
}

export function initializeSwiper2() {
    return new Swiper(".mySwiperPopular", {
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
    });
}