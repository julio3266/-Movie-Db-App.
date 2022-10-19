import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from "./actions";

export interface IPopularMovies {
  name: string;
  description: string;
  backdrop: string;
  poster: string;
  average: number;
}

export interface PopularMovieState {
  pending: boolean;
  popularMovies: IPopularMovies[];
  error: string | null;
}

export interface FetchPopularMovieRequest {
  type: typeof FETCH_POPULAR_MOVIES_REQUEST;
}

export type FetchPopularMovieSuccess = {
  type: typeof FETCH_POPULAR_MOVIES_SUCCESS;
  payload: FetchPopularMovieSuccessPayload;
};

export type FetchPopularMovieFailure = {
  type: typeof FETCH_POPULAR_MOVIES_FAILURE;
  payload: FetchPopularMovieFailurePayload;
};

export interface FetchPopularMovieSuccessPayload {
  popularMovies: IPopularMovies[];
}

export interface FetchPopularMovieFailurePayload {
  error: string;
}

export type PopularMovieActions =
  | FetchPopularMovieRequest
  | FetchPopularMovieSuccess
  | FetchPopularMovieFailure;
