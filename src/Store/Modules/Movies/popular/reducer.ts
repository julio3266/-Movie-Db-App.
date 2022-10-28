import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from "./actions";

import { PopularMovieActions, PopularMovieState } from "./types";

const initialState: PopularMovieState = {
  popularMovies: [],
  pending: false,
  error: null,
};

const moviesPerTypeSagas = (
  state = initialState,
  action: PopularMovieActions
) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        popularMovies: [...action.payload.popularMovies],
        error: null,
      };
    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        pending: false,
        movies: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default moviesPerTypeSagas;
