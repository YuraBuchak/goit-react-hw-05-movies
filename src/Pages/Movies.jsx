import { fetchSearchMovies } from 'Api/Api';
import MovieList from 'components/MovieList/MovieList';
import SerchMovie from 'components/Serch/SerchMovie';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [serchName, setSerchName] = useState('');
  const [movie, setMovie] = useState([]);

  const handleSubmit = name => {
    setSerchName(name);
  };

  useEffect(() => {
    async function fetch() {
      try {
        if (serchName === '') return;

        const { results } = await fetchSearchMovies(serchName);

        const filteredMovie = results.map(({ title, id }) => {
          return { title, id };
        });
        setMovie(filteredMovie);
      } catch (error) {
        console.warn(error);
      }
    }
    fetch();
  }, [serchName]);

  return (
    <>
      <SerchMovie onSubmit={handleSubmit} />
      <MovieList movie={movie} />
    </>
  );
};

export default Movies;
