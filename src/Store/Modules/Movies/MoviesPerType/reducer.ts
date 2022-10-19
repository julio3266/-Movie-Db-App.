import { MoviesPerTypeActions, IMoviesPerTypeState } from "./types";
import {
  FETCH_ACTION_MOVIES_REQUEST,
  FETCH_ACTION_MOVIES_SUCCESS,
  FETCH_ACTION_MOVIES_FAILURE,
  FETCH_TERROR_MOVIES_REQUEST,
  FETCH_TERROR_MOVIES_SUCCESS,
  FETCH_TERROR_MOVIES_FAILURE,
} from "./actions";

const initialState: IMoviesPerTypeState = {
  actionMovies: [],
  terrorMovies: [],
  error: null,
  pending: true,
};

const moviePerTypeReducer = (
  state = initialState,
  action: MoviesPerTypeActions
) => {
  switch (action.type) {
    case FETCH_ACTION_MOVIES_REQUEST:
      return {
        ...state,
        peding: true,
      };
    case FETCH_ACTION_MOVIES_SUCCESS:
      return {
        ...state,
        actionMovies: [...action.payload.actionMovies],
        peding: false,
        error: null,
      };
    case FETCH_ACTION_MOVIES_FAILURE:
      return {
        ...state,
        actionMovies: [],
        error: action.payload.error,
        peding: false,
      };
    case FETCH_TERROR_MOVIES_REQUEST:
      return {
        ...state,
        peding: true,
      };
    case FETCH_TERROR_MOVIES_SUCCESS:
      return {
        ...state,
        terrorMovies: [...action.payload.terrorMovies],
        peding: false,
        error: null,
      };
    case FETCH_TERROR_MOVIES_FAILURE:
      return {
        ...state,
        terrorMovies: [],
        error: action.payload.error,
        peding: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default moviePerTypeReducer;
