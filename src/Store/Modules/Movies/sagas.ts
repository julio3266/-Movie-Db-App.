import { all, call, put, takeLatest } from "redux-saga/effects";
import { apiKey } from "../../../Services/api";
import { api } from "../../../Services/apiConfig";

import { fetchMovieFailure, fetchMovieSuccess } from "./actions";
import { FETCH_MOVIES_REQUEST } from "./actions";
import { IMovie } from "./types";

const getMovies = () => {
  const response = api
    .get(`/popular?api_key=${apiKey}`)
    .then((responseMovies) => {
      let parsedPopularMovies = responseMovies.data.results.map(
        (popularMovieItem: any) => {
          const parsedMovieData: IMovie = {
            title: popularMovieItem.original_title,
            description: popularMovieItem.overview,
            rating: popularMovieItem.vote_average,
          };
          return parsedMovieData;
        }
      );
      return parsedPopularMovies;
    })

    .catch((error) => {
      return error;
    });

  return response;
};

function* fetchMovieSaga(): Generator | any {
  try {
    const response = yield call(getMovies);
    yield put(
      fetchMovieSuccess({
        movies: [...response, response.data],
      })
    );
  } catch (error) {
    yield put(
      fetchMovieFailure({
        error: "erro ao executar a request",
      })
    );
  }
}

function* movieSaga() {
  yield all([takeLatest(FETCH_MOVIES_REQUEST, fetchMovieSaga)]);
}

export default movieSaga;
