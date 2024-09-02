import axios from "axios";

let url = 'https://api.themoviedb.org/3';
let accesToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBjMjg2ZWMwNGQzYWM1Mjc3NGQ4Mjc0YzliZWJkMiIsIm5iZiI6MTcyNDExOTMxOS43MjIxNTQsInN1YiI6IjY2YmVlMzAxMWI3ZjZlYTY3MTUwZTY0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7qcQiRt3b7t_769Uyj6omtYOgOBHMTUouusCa6GWTI';

export let option = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accesToken}`,
    },
    params: {
        language: "ru-RU",
    }
}

export let option2 = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accesToken}`,
    },
}


export async function getData(endpoint, o) {
    try {
        let res = await axios.get(`${url}/${endpoint}`, o)
        return res
    } catch (error) {
        throw error
    }
}