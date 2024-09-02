function createActorsCard(item) {

    let actorCard = document.createElement('div');
    actorCard.className = 'actor_card';

    let actorImg = document.createElement('div');
    actorImg.className = 'actor_img';
    actorImg.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${item.profile_path})`; 
    // actorImg.style.backgroundSize = 'contain'; 
    // actorImg.style.backgroundPosition = 'center'; 

    let actorName = document.createElement('p');
    actorName.className = 'actor_name';
    actorName.textContent = item.name;

    let actorNameOrg = document.createElement('p');
    actorNameOrg.className = 'actor_name_org';
    actorNameOrg.textContent = item.original_name;

    let actorNameMovie = document.createElement('p');
    actorNameMovie.className = 'actor_name_movie';
    actorNameMovie.textContent = item.character;

    actorCard.append(actorImg, actorName, actorNameOrg, actorNameMovie);

    
    actorCard.onclick = () => {
        localStorage.setItem('actorId', item.id)
        window.location.href = 'http://localhost:5173/pages/actor/'      
    }

    return actorCard
}

export { createActorsCard }