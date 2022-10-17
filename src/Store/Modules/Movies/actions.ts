import {
  FetchMovieFailure,
  FetchMovieFailurePayload,
  FetchMovieRequest,
  FetchMovieSuccess,
  FetchMovieSuccessPayload,
} from "./types";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIE_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIE_FAILURE";

export const fetchMovieRequest = (): FetchMovieRequest => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMovieSuccess = (
  payload: FetchMovieSuccessPayload
): FetchMovieSuccess => ({
  type: FETCH_MOVIES_SUCCESS,
  payload,
});

export const fetchMovieFailure = (
  payload: FetchMovieFailurePayload
): FetchMovieFailure => ({
  type: FETCH_MOVIES_FAILURE,
  payload,
});
