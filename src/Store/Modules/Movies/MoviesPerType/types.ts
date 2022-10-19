import {
  FETCH_ACTION_MOVIES_REQUEST,
  FETCH_ACTION_MOVIES_SUCCESS,
  FETCH_ACTION_MOVIES_FAILURE,
  FETCH_TERROR_MOVIES_REQUEST,
  FETCH_TERROR_MOVIES_SUCCESS,
  FETCH_TERROR_MOVIES_FAILURE,
} from "./actions";

export interface IActionMovies {
  name: string;
  description: string;
  backdrop: string;
  poster: string;
  average: number;
}

export interface ITerrorMovies {
  name: string;
  description: string;
  backdrop: string;
  poster: string;
  average: number;
}

export interface IMoviesPerTypeState {
  actionMovies: IActionMovies[];
  terrorMovies: ITerrorMovies[];
  pending: boolean;
  error: string | null;
}

export interface FetchActionMoviesRequest {
  type: typeof FETCH_ACTION_MOVIES_REQUEST;
}

export interface FetchActionMoviesSuccess {
  type: typeof FETCH_ACTION_MOVIES_SUCCESS;
  payload: FetchActionMoviesSuccessPayload;
}

export interface FetchActionMoviesFailure {
  type: typeof FETCH_ACTION_MOVIES_FAILURE;
  payload: FetchActionMoviesFailurePayload;
}

export interface FetchActionMoviesSuccessPayload {
  actionMovies: IActionMovies[];
}

export interface FetchActionMoviesFailurePayload {
  error: string;
}
//
export interface FetchTerrorMoviesRequest {
  type: typeof FETCH_TERROR_MOVIES_REQUEST;
}

export interface FetchTerrorMoviesSuccess {
  type: typeof FETCH_TERROR_MOVIES_SUCCESS;
  payload: FetchTerrorMoviesSuccessPayload;
}

export interface FetchTerrorMoviesFailure {
  type: typeof FETCH_TERROR_MOVIES_FAILURE;
  payload: FetchTerrorMoviesFailurePayload;
}

export interface FetchTerrorMoviesSuccessPayload {
  terrorMovies: ITerrorMovies[];
}

export interface FetchTerrorMoviesFailurePayload {
  error: string;
}

export type MoviesPerTypeActions =
  | FetchActionMoviesRequest
  | FetchActionMoviesSuccess
  | FetchActionMoviesFailure
  | FetchTerrorMoviesRequest
  | FetchTerrorMoviesSuccess
  | FetchTerrorMoviesFailure;
