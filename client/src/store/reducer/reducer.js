import {
    FETCH_GAMES,
    SEARCH_GAME,
    SORT,
    NEXT,
    PREVIOUS,
    RATING,
    FILTER_PLATFORM,
    FILTER_GENRES,
    FILTER_API,
    FILTER_DB,
    GAMES,
    PAGE,
    GENRES,
    PLATFORM,
    GET_GAMES,
    CLEAN_G
  } from "../actions/actions.js";
  
  const initialState = {
    games: [],
    filterGames: [],
    search:[],
    page: 1,
    genres:[],
    Platforms:[]
  };

  const filt=(e,payload,data)=>{
    if(data === "platforms") {
    const filt = e.filter(x=>{
    for(let i= 0;i< x.platforms.length;i++ ){
        if(x.platforms[i]===payload) return x
   }
    
   })
   return filt
  
  }else if (data === "genres") {
    const filt = e.filter(x=>{
      for(let i= 0;i< x.genres.length;i++ ){
          if(x.genres[i]===payload) return x
     }
      
     })
     return filt
  }
   
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GENRES:
        return {
          ...state,
            genres:action.payload,
        };
        case PLATFORM:
          return {
            ...state,
            Platforms:action.payload,
          };
      case FETCH_GAMES:
        return {
          ...state,
          filterGames: action.payload,
        };
      case GAMES:
        return {
          ...state,
          games: action.payload,
        };
      case SEARCH_GAME:
        return {
          ...state,
          filterGames: action.payload,
        };
        case GET_GAMES:
          return {
            ...state,
            search: action.payload.slice(0,7),
          };
      case NEXT:
        return {
          ...state,
          page: state.page + action.payload,
        };
      case PREVIOUS:
        return {
          ...state,
          page: state.page - action.payload,
        };
      case RATING:
          let data = [...state.filterGames]
            data.sort((a, b) => {
              if (a.rating < b.rating) {
                return action.payload === "upward" ? 1 : -1;
              }
              if (a.rating > b.rating) {
                return action.payload === "falling" ? 1 : -1;
              }
              return 0;
            });
          return {
            ...state,
            filterGames: data,
          };
      case SORT:
        let orderedGames = [...state.filterGames];
  
        orderedGames = orderedGames.sort((a, b) => {
          if (a.name < b.name) {
            return action.payload === "upward" ? 1 : -1;
          }
          if (a.name > b.name) {
            return action.payload === "falling" ? 1 : -1;
          }
          return 0;
        });
        return {
          ...state,
          filterGames: orderedGames,
        };
      case FILTER_PLATFORM:
        let platFilter = filt(state.games,action.payload,"platforms")
        return {
          ...state,
          filterGames: platFilter
        };
      case FILTER_GENRES:
          let genreFiltr = filt(state.games,action.payload,"genres")
          return {
            ...state,
            filterGames: genreFiltr
          };
      case FILTER_API:
        let apiFilter = state.games.filter((game) => {
          return typeof game.id === "number";
        });
        return {
          ...state,
          filterGames: apiFilter,
        };
      case FILTER_DB:
        let dbFilter = state.games.filter((game) => {
          return typeof game.id == "string";
        });
        if (dbFilter.length !== 0) {
          return {
            ...state,
            filterGames: dbFilter,
          };
        } else {
          alert("there is nothing to show here");
          return {
            ...state,
          };
        }
      case PAGE:
        return {
          ...state,
          page: action.payload,
        };

        case CLEAN_G:
          return {
            ...state,
            search:[]
          };
      default:
        return state;
        
    }
  }
  