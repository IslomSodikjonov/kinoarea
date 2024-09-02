function createCadrCard(item) {

    let cadrCard = document.createElement('div');
    cadrCard.className = 'cadr';
    cadrCard.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${item.file_path})`;  

    return cadrCard
}

function createPosterCard(item) {

    let posterCard = document.createElement('div');
    posterCard.className = 'poster';
    posterCard.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${item.file_path})`;  

    return posterCard
}

export { createCadrCard, createPosterCard }