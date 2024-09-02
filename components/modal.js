import { getData, option } from "../libs/http.js"
import { reload } from "../libs/utils.js"
import { createSearches } from "./searchResult.js"


export function modal() {
    let modal = document.querySelector('.search_modal')

    modal.innerHTML = `
        <div class="search_content">
            <button class="globalBtn"><img src="/Логотип.png" alt=""></button>

            <div class="input-box">
                <input type="text" class="search" placeholder="search">
                <img class="close" src="/9027277_close_icon.png" alt="close">
            </div>

            <div class="search_categories">
                <div class="category active" id="movie">Movies</div>
                <div class="category" id="person">Person</div>
                <div class="category" id="tv">Tv</div>
            </div>

            <div class="search_results">

            </div>
        </div>
    `

    function debounce(callback, delay = 300) {
        let timer
        return function () {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback();
            }, delay)
        }
    }
    
    let searchInput = document.querySelector('.search')
    let categoryModal = document.querySelectorAll('.category') 
    let ID = 'movie'
    let inputValue = '' 
    
    let box = document.querySelector(".search_results");
    categoryModal.forEach((btn) => {
        btn.onclick = () => {
            ID = btn.getAttribute('id');
            box.innerHTML = ""; 
    
            categoryModal.forEach(elem => {
                    elem.classList.remove('active');
                });
                btn.classList.add('active');
            };
        })
    
    searchInput.onkeyup = debounce(() => {
        box.innerHTML = ""; 
        inputValue = searchInput.value
        console.log(inputValue)
        
        getData(`search/${ID}?query=${inputValue}&include_adult=false`, option)
            .then(res => {
                reload(res.data.results.slice(0, 15), ".search_results", createSearches);
                console.log(res.data);
            })
            .catch(error => console.error(error));
    })
}