export function createSearches(item) {
    let search_item = document.createElement('div');
    let search_item_left = document.createElement('div');
    let search_img = document.createElement('img');
    let search_elem = document.createElement('div');
    let search_title = document.createElement('p');
    let search_realName = document.createElement('p');
    let search_date = document.createElement('p');
    let search_rate = document.createElement('div');

    search_item.classList.add('search-item');
    search_item_left.classList.add('search_item_left');
    search_img.classList.add('search-img');
    search_elem.classList.add('search_elem');
    search_title.classList.add('search-title');
    search_realName.classList.add('search-realName');
    search_date.classList.add('search-date');
    search_rate.classList.add('search-rate');

    search_img.src = `https://image.tmdb.org/t/p/original/${item.poster_path ? item.poster_path : item.profile_path}`;
    search_title.textContent = item.title ? item.title : item.name;
    search_realName.textContent = item.original_title;
    search_date.textContent = item.release_date ? item.release_date : item.birthday;
    search_rate.textContent = item.vote_average ? item.vote_average : item.popularity;

    search_item.onclick = () => {
        if (item.title || item.media_type === "tv") {
            localStorage.setItem('filmId', item.id)
            window.location.href = '/pages/watchfilm/'
        } else {
            localStorage.setItem('actorId', item.id)
            window.location.href = '/pages/actor/'
        }
    }

    search_elem.append(search_title, search_realName, search_date);
    search_item_left.append(search_img, search_elem);
    search_item.append(search_item_left, search_rate);

    return search_item
}