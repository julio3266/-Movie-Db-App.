import React from "react";
import { Route, Routes as Router, BrowserRouter } from "react-router-dom";
import { ListMovies } from "../Pages/ListMovies";
import { MoviesDetails } from "../Pages/MoviesDetails";
import { NotFound } from "../Pages/NotFound";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<ListMovies />} />
        <Route path="/detalhes" element={<MoviesDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Router>
    </BrowserRouter>
  );
};
