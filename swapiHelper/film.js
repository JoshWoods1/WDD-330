import { renderFilmDetails } from "./swapiHelper.mjs";
console.log(window.location);

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const filmId = urlParams.get("filmId");

renderFilmDetails(filmId, "#output");