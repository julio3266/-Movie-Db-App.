import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./actions";

export interface IMovie {
  title?: string;
  description?: string;
  rating?: number;
}

export interface MovieState {
  pending: boolean;
  movies: IMovie[];
  error: string | null;
}

export interface FetchMovieRequest {
  type: typeof FETCH_MOVIES_REQUEST;
}

export interface FetchMovieSuccessPayload {
  movies: IMovie[];
}

export interface FetchMovieFailurePayload {
  error: string;
}

export type FetchMovieSuccess = {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: FetchMovieSuccessPayload;
};

export type FetchMovieFailure = {
  type: typeof FETCH_MOVIES_FAILURE;
  payload: FetchMovieFailurePayload;
};

export type MovieActions =
  | FetchMovieRequest
  | FetchMovieSuccess
  | FetchMovieFailure;
