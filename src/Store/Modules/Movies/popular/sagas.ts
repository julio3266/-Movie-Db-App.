import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { apiKey } from "../../../../Services/api";
import { api } from "../../../../Services/apiConfig";

import {
  fetchPopularMoviesFailure,
  fetchPopularMoviesSuccess,
  FETCH_POPULAR_MOVIES_REQUEST,
} from "./actions";
import { IPopularMovies } from "./types";

const getPopularMovies = async () => {
  try {
    let responsePopularMovies = await api.get(
      `movie/popular?api_key=${apiKey}&language=pt-BR`
    );
    let normalizedResponsePopular = responsePopularMovies.data.results.map(
      (onlyMovies: any) => {
        let data: IPopularMovies = {
          name: onlyMovies.title,
          description: onlyMovies.overview,
          backdrop: `https://image.tmdb.org/t/p/w500/${onlyMovies.poster_path}`,
          poster: `https://image.tmdb.org/t/p/w500/${onlyMovies.poster_path}`,
          average: onlyMovies.vote_average,
        };
        return data;
      }
    );

    return normalizedResponsePopular;
  } catch (error) {
    return error;
  }
};

function* fetchMooviesSaga(): Generator {
  try {
    const responsePopularMovies: any = yield call(getPopularMovies);

    yield put(
      fetchPopularMoviesSuccess({ popularMovies: responsePopularMovies })
    );
  } catch (error) {
    yield put(
      fetchPopularMoviesFailure({
        error: "Erro ao buscar os filmes",
      })
    );
  }
}

function* watchMovieSaga() {
  yield takeLatest(FETCH_POPULAR_MOVIES_REQUEST, fetchMooviesSaga);
}

function* movieSaga() {
  yield all([fork(watchMovieSaga)]);
}

export default movieSaga;
