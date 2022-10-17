import React, { useMemo } from "react";
import {
  getMoviesSelector,
  getErrorSelector,
  getPendingSelector,
} from "../../Store/Modules/Movies/selectors";
import { fetchMovieRequest } from "../../Store/Modules/Movies/actions";
import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./styles";

import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";

export const ListMovies: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const movies = useSelector(getMoviesSelector);
  const error = useSelector(getErrorSelector);

  useMemo(() => {
    dispatch(fetchMovieRequest());
  }, [dispatch]);

  return (
    <Styled.Container>
      <Header
        isSearch={true}
        title={"Filmes populares"}
        placeholderTitle={"Buscar"}
      />

      <Card cards={movies} />
    </Styled.Container>
  );
};
