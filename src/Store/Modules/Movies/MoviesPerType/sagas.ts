import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { apiKey } from "../../../../Services/api";
import { api } from "../../../../Services/apiConfig";
import { IActionMovies, ITerrorMovies } from "./types";
import {
  FETCH_ACTION_MOVIES_REQUEST,
  fetchActionMoviesSuccess,
  fetchActionMoviesFailure,
  fetchTerrorMoviesSucess,
  fetchTerrorMoviesFailure,
  FETCH_TERROR_MOVIES_REQUEST,
} from "./actions";

const getActionMovies = async () => {
  try {
    let responseMovies = await api.get(
      `/discover/movie?api_key=${apiKey}&with_genres=28`
    );
    let normalizedActionMovies = responseMovies.data.results.map(
      (actionItem: any) => {
        let actionMovie: IActionMovies = {
          name: actionItem.title,
          description: actionItem.overview,
          backdrop: `https://image.tmdb.org/t/p/w500/${actionItem.poster_path}`,
          poster: `https://image.tmdb.org/t/p/w500/${actionItem.poster_path}`,
          average: actionItem.vote_average,
        };
        return actionMovie;
      }
    );
    return normalizedActionMovies;
  } catch (error) {
    return error;
  }
};

const getTerrorMovies = async () => {
  try {
    let responseMovies = await api.get(
      `/discover/movie?api_key=${apiKey}&with_genres=27`
    );
    let normalizedTerrorovies = responseMovies.data.results.map(
      (terrorItem: any) => {
        let terrorMovies: ITerrorMovies = {
          name: terrorItem.title,
          description: terrorItem.overview,
          backdrop: `https://image.tmdb.org/t/p/w500/${terrorItem.poster_path}`,
          poster: `https://image.tmdb.org/t/p/w500/${terrorItem.poster_path}`,
          average: terrorItem.vote_average,
        };
        return terrorMovies;
      }
    );
    return normalizedTerrorovies;
  } catch (error) {
    return error;
  }
};

function* fetchActionMooviesSaga(): Generator {
  try {
    const responseActionMovies: any = yield call(getActionMovies);
    yield put(fetchActionMoviesSuccess({ actionMovies: responseActionMovies }));
  } catch (error) {
    yield put(
      fetchActionMoviesFailure({
        error: "Erro ao buscar os filmes",
      })
    );
  }
}

function* fetchTerrorMoviesSaga(): Generator {
  try {
    const responseTerrorMovies: any = yield call(getTerrorMovies);
    yield put(fetchTerrorMoviesSucess({ terrorMovies: responseTerrorMovies }));
  } catch (error) {
    yield put(fetchTerrorMoviesFailure({ error: "Erro ao buscar os filmes" }));
  }
}

function* watchActionMoviesSaga() {
  yield takeLatest(FETCH_ACTION_MOVIES_REQUEST, fetchActionMooviesSaga);
}
function* watchTerrorMoviesSaga() {
  yield takeLatest(FETCH_TERROR_MOVIES_REQUEST, fetchTerrorMoviesSaga);
}

function* moviesPerTypeSagas() {
  yield all([fork(watchActionMoviesSaga), fork(watchTerrorMoviesSaga)]);
}
export default moviesPerTypeSagas;
