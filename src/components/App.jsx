import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import MovieDetails from 'Pages/MovieDetails';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
