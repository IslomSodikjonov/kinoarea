export function header() {
  let header = document.querySelector('header')
  
  header.innerHTML = `
    <div class="container contHead">
      <div class="headLeft">
        <button class="globalBtn"><img src="/Логотип.png" alt=""></button>
        <div class="globalBtnElem">
          <button class="headVk headbtn"><img src="/633193_vkontakte_logo_network_social_vk_icon.svg"
              alt=""></button>
          <button class="headInst headbtn"><img src="/1161953_instagram_icon.svg" alt=""></button>
          <button class="headFsb headbtn"><img src="/211902_social_facebook_icon.svg" alt=""></button>
          <button class="headSk headbtn"><img
              src="/5305170_bird_social media_social network_tweet_twitter_icon.svg" alt=""></button>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="">Афиша</a></li>
          <li><a href="">Медия</a></li>
          <li><a href="">Фильмы</a></li>
          <li><a href="">Актеры</a></li>
          <li><a href="">Новости</a></li>
          <li><a href="">Подборки</a></li>
          <li><a href="">Категории</a></li>
        </ul>
      </nav>
      <div class="headRight">
        <button class="searchBtn"><img src="/3844432_magnifier_search_zoom_icon.svg" alt=""></button>
        <button class="logIn">Войти</button>
      </div>
    </div>
  `

  let openModal = document.querySelector('.searchBtn')
  let Modal = document.querySelector('.search_modal')
  let closeModal = document.querySelector('.close')
  
  openModal.onclick = () => {
    Modal.style.display = 'block'
  }

  closeModal.onclick = () => {
    Modal.style.display = 'none'
  }
  


}