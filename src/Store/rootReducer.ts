import { combineReducers } from "redux";

import popularMoviesReducer from "./Modules/Movies/popular/reducer";
import moviePerTypeReducer from "./Modules/Movies/MoviesPerType/reducer";

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  moviesPerType: moviePerTypeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
