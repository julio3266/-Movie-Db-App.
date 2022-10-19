import {
  FetchPopularMovieRequest,
  FetchPopularMovieSuccess,
  FetchPopularMovieFailure,
  FetchPopularMovieFailurePayload,
  FetchPopularMovieSuccessPayload,
} from "./types";

export const FETCH_POPULAR_MOVIES_REQUEST = "FETCH_POPULAR_MOVIES_REQUEST";
export const fetchPopularMoviesRequest = (): FetchPopularMovieRequest => ({
  type: FETCH_POPULAR_MOVIES_REQUEST,
});

export const FETCH_POPULAR_MOVIES_SUCCESS = "FETCH_POPULAR_MOVIES_SUCCESS";
export const fetchPopularMoviesSuccess = (
  payload: FetchPopularMovieSuccessPayload
): FetchPopularMovieSuccess => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload,
});

export const FETCH_POPULAR_MOVIES_FAILURE = "FETCH_POPULAR_MOVIES_FAILURE";
export const fetchPopularMoviesFailure = (
  payload: FetchPopularMovieFailurePayload
): FetchPopularMovieFailure => ({
  type: FETCH_POPULAR_MOVIES_FAILURE,
  payload,
});
