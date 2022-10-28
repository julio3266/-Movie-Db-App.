import {
  FetchActionMoviesFailure,
  FetchActionMoviesFailurePayload,
  FetchActionMoviesRequest,
  FetchActionMoviesSuccess,
  FetchActionMoviesSuccessPayload,
  FetchTerrorMoviesRequest,
  FetchTerrorMoviesSuccess,
  FetchTerrorMoviesSuccessPayload,
  FetchTerrorMoviesFailure,
  FetchTerrorMoviesFailurePayload,
} from "./types";

export const FETCH_ACTION_MOVIES_REQUEST = "FETCH_ACTION_MOVIES_REQUEST";
export const fetchActioMoviesRequest = (): FetchActionMoviesRequest => ({
  type: FETCH_ACTION_MOVIES_REQUEST,
});

export const FETCH_ACTION_MOVIES_SUCCESS = "FETCH_ACTION_MOVIES_SUCCESS";
export const fetchActionMoviesSuccess = (
  payload: FetchActionMoviesSuccessPayload
): FetchActionMoviesSuccess => ({
  type: FETCH_ACTION_MOVIES_SUCCESS,
  payload,
});

export const FETCH_ACTION_MOVIES_FAILURE = "FETCH_ACTION_MOVIES_FAILURE";
export const fetchActionMoviesFailure = (
  payload: FetchActionMoviesFailurePayload
): FetchActionMoviesFailure => ({
  type: FETCH_ACTION_MOVIES_FAILURE,
  payload,
});

export const FETCH_TERROR_MOVIES_REQUEST = "FETCH_TERROR_MOVIES_REQUEST";
export const fetchTerrorMovieRequest = (): FetchTerrorMoviesRequest => ({
  type: FETCH_TERROR_MOVIES_REQUEST,
});

export const FETCH_TERROR_MOVIES_SUCCESS = "FETCH_TERROR_MOVIES_SUCCESS";
export const fetchTerrorMoviesSucess = (
  payload: FetchTerrorMoviesSuccessPayload
): FetchTerrorMoviesSuccess => ({
  type: FETCH_TERROR_MOVIES_SUCCESS,
  payload,
});

export const FETCH_TERROR_MOVIES_FAILURE = "FETCH_TERROR_MOVIES_FAILURE";
export const fetchTerrorMoviesFailure = (
  payload: FetchTerrorMoviesFailurePayload
): FetchTerrorMoviesFailure => ({
  type: FETCH_TERROR_MOVIES_FAILURE,
  payload,
});
