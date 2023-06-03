import { fetchSearchMovies } from 'Api/Api';
import MovieList from 'components/MovieList/MovieList';
import SerchMovie from 'components/Serch/SerchMovie';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import css from 'Style.module.css';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!query) return;

    async function fetch() {
      try {
        const { results } = await fetchSearchMovies(query);

        const filteredMovie = results.map(({ title, id }) => {
          return { title, id };
        });
        setMovie(filteredMovie);
      } catch (error) {
        console.warn(error);
      }
    }
    fetch();
  }, [query]);

  return (
    <div className={css.container}>
      <SerchMovie onSubmit={handleSubmit} />
      <MovieList movie={movie} locationBack={location} />
    </div>
  );
};

export default Movies;
