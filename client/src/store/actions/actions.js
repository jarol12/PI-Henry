import axios from "axios";
export const FETCH_GAMES= "FETCH_GAMES";
export const GET_GAMES= "GET_GAMES";
export const SEARCH_GAME = "SEARCH_GAME";
export const SORT = "SORT";
export const NEXT = "NEXT";
export const PREVIOUS = "PREVIOUS";
export const RATING = "WEIGHT_FILTER";
export const FILTER_PLATFORM = "FILTER_PLATFORM";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_API = "FILTER_API";
export const FILTER_DB = "FILTER_DB";
export const GAMES = "GAMES";
export const GENRES = "GENRES";
export const PLATFORM = "PLATFORM";
export const PAGE = "PAGE";
export const CLEAN_G= "CLEAN_G";


export function next(payload) {
  return {
    type: NEXT,
    payload: payload,
  };
}

export function prev(payload) {
  return {
    type: PREVIOUS,
    payload: payload,
  };
}

export function fetchGames() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/videogames`).then((games) => {
      dispatch({
        type: FETCH_GAMES,
        payload: games.data,
      });
    });
  };
}

export function searchGame(search) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/videogames/search?name=${search}`)
      .then((game) => {
        if (Array.isArray(game.data)) {
          dispatch({
            type: SEARCH_GAME,
            payload: game.data,
          });
        } else {
          alert("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getGames(search) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/videogames/search?name=${search}`)
      .then((game) => {
        if (game.data.length) {
          dispatch({
            type: GET_GAMES,
            payload: game.data,
          });
        } 
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}

export function postGame(payload) {
  return async function () {
 await axios.post("http://localhost:3001/videogames",payload);
 
  };
}


export function sortRating(payload) {
  return {
    type: RATING,
    payload: payload,
  };
}

export function filterplatform(payload) {
  return {
    type: FILTER_PLATFORM,
    payload: payload,
  };
}
export function filterGenres(payload) {
  return {
    type: FILTER_GENRES,
    payload: payload,
  };
}


export function api(payload) {
  return {
    type: FILTER_API,
    payload: payload,
  };
}

export function database(payload) {
  return {
    type: FILTER_DB,
    payload: payload,
  };
}

export function games() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/videogames`).then((games) => {
      dispatch({
        type: GAMES,
        payload: games.data,
      });
    });
  };
}

export function dataPage(payload) {
  return {
    type: PAGE,
    payload: payload,
  };
}

export function getGenres(){
  return function(dispatch) {
    axios.get(`http://localhost:3001/genres`).then((genre) => {
      dispatch({
        type: GENRES,
        payload: genre.data,
      });
    })
  }
}


export function getPlatforms(){
  return function(dispatch) {
    axios.get(`http://localhost:3001/platforms`).then((platform) => {
      dispatch({
        type: PLATFORM,
        payload: platform.data,
      });
    })
  }
}

export function cleanGames() {
  return {
    type: CLEAN_G,
  };
}