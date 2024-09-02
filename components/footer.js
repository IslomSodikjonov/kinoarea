export function footer() {
  let footer = document.querySelector('footer')
    
  footer.innerHTML = `
    <div class="container contfoot">
      <div class="footBox1">
       <div class="footBox1Element">
          <div class="footBox1top">
            <img src="/cinema 1.png" alt="">
            <h2>Kinoarea</h2>
          </div>
          <h1>Подпишитесь на E-mail рассылку</h1>
          <p>Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную
            E-mail рассылку!</p>
          <form action="" class="footform">
            <input type="text" name="email" id="" placeholder="Введите свой E-mail адрес">
            <button class="footFormBtn">Подписаться</button>
          </form>
          <div>
            <button></button>
            <h4>Соглашаюсь на условия <a href="" class="politika">политики конфиденциальности</a></h4>
          </div>
       </div>
      </div>
      <div class="footBox2">
        <button class="headVk footbtn"><img src="/633193_vkontakte_logo_network_social_vk_icon.svg"
            alt=""></button>
        <button class="headInst footbtn"><img src="/1161953_instagram_icon.svg" alt=""></button>
        <button class="headFsb footbtn"><img src="/211902_social_facebook_icon.svg" alt=""></button>
        <button class="headSk footbtn"><img
            src="/5305170_bird_social media_social network_tweet_twitter_icon.svg" alt=""></button>
        <button class="headSk footbtn"><img src="/5305164_play_video_youtube_youtube logo_icon.svg"
            alt=""></button>
      </div>
      <nav>
        <ul>
          <li><a href="">Афиша</a></li>
          <li><a href="">Новости</a></li>
          <li><a href="">Персоны</a></li>
          <li><a href="">Рейтинги</a></li>
          <li><a href="">Рцензии</a></li>
          <li><a href="">Каталог фильмов</a></li>
        </ul>
      </nav>
      <a href="" class="footAAA">2020 © Kinoarea. Все права защищены</a>
      <a href="" class="footAAA">Политика конфиденциальности</a>
    </div>
    `
}