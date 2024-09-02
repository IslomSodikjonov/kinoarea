import { getData, option } from "../libs/http.js";

function popularActors1(item, i) {
    let places = document.createElement('div');
    places.className = 'places';
    places.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${item.profile_path})`;

    let placeOrder = document.createElement('p');
    placeOrder.className = 'place_order';
    placeOrder.id = 'yellow_txt';
    placeOrder.textContent = `${i+1}-е место`; 

    let placesBottom = document.createElement('div');
    placesBottom.className = 'places_bottom';

    let nameActor = document.createElement('p');
    nameActor.className = 'name_actor';
    nameActor.textContent = item.name; 

    let orgNameActor = document.createElement('p');
    orgNameActor.className = 'org_name_actor';
    orgNameActor.textContent = item.original_name; 

    
    let yearActor = document.createElement('p');
    yearActor.className = 'year_actor';
    yearActor.id = 'yellow_txt';
    
    getData(`person/${item.id}`, option)
	.then((res) => {
        yearActor.textContent = calculateAge(res.data.birthday); 
	})
	.catch((error) => console.error(error));

    places.append(placeOrder, placesBottom);
    placesBottom.append(nameActor, orgNameActor, yearActor);

    places.onclick = () => {
        localStorage.setItem('actorId', item.id)
        window.location.href = 'http://localhost:5173/pages/actor/'      
    }

    return places
}


function popularActors2(item, i) {

    let actorInfo = document.createElement('div');
    actorInfo.className = 'actor_info';

    let left3 = document.createElement('div');
    left3.className = 'left3';

    let nameActorOther = document.createElement('p');
    nameActorOther.className = 'name_actor_other';
    nameActorOther.textContent = item.name; 

    let orgActorOther = document.createElement('p');
    orgActorOther.className = 'org_actor_other';
    orgActorOther.textContent = item.original_name; 

    let yearOther = document.createElement('p');
    yearOther.className = 'year_other';
    
    getData(`person/${item.id}`, option)
	.then((res) => {
        yearOther.textContent = calculateAge(res.data.birthday); 
	})
	.catch((error) => console.error(error));

    let placeOrder = document.createElement('p');
    placeOrder.className = 'place_order';
    placeOrder.id = 'yellow_txt';
    placeOrder.textContent = `${i+3}-е место`; 

    actorInfo.append(left3, placeOrder);
    left3.append(nameActorOther, orgActorOther, yearOther);

    actorInfo.onclick = () => {
        localStorage.setItem('actorId', item.id)
        window.location.href = '/pages/actor/'      
    }

    return actorInfo
}

function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--; 
    }

    return age;
}

export { popularActors1, popularActors2 }