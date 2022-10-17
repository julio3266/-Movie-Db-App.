import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./actions";

import { MovieActions, MovieState } from "./types";

const initialState: MovieState = {
  pending: false,
  movies: [],
  error: null,
};

const movieReducer = (state = initialState, action: MovieActions) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        movies: [...action.payload.movies],
        error: null,
      };
    case FETCH_MOVIES_FAILURE:
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

export default movieReducer;
