import { all, fork } from "redux-saga/effects";

import popularmoviesSaga from "./Modules/Movies/popular/sagas";
import moviesPerTypeSagas from "./Modules/Movies/MoviesPerType/sagas";

export function* rootSaga() {
  yield all([popularmoviesSaga(), moviesPerTypeSagas()]);
}
