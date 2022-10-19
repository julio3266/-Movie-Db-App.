import { all, fork } from "redux-saga/effects";

import movieSaga from "./Modules/Movies/sagas";

export function* rootSaga() {
  yield all([fork(movieSaga)]);
}
