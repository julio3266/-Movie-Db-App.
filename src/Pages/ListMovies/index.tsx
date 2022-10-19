import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import {
  fetchActioMoviesRequest,
  fetchTerrorMovieRequest,
} from "../../Store/Modules/Movies/MoviesPerType/actions";
import { fetchPopularMoviesRequest } from "../../Store/Modules/Movies/popular/actions";

export const ListMovies: React.FC = () => {
  const dispatch = useDispatch();
  const movies: any = useSelector((state) => state);

  useMemo(() => {
    dispatch(fetchPopularMoviesRequest());
    dispatch(fetchActioMoviesRequest());
    dispatch(fetchTerrorMovieRequest());
  }, [dispatch]);

  return (
    <>
      <Header
        isSearch={true}
        title={"Movie List App"}
        placeholderTitle={"Buscar"}
      />

      <Card
        isTitle={true}
        category={"Populares"}
        cards={movies.popularMovies.popularMovies}
      />
      <Card
        isTitle={true}
        category={"Ação"}
        cards={movies.moviesPerType.actionMovies}
      />
      <Card
        isTitle={true}
        category={"Terror"}
        cards={movies.moviesPerType.terrorMovies}
      />
    </>
  );
};
