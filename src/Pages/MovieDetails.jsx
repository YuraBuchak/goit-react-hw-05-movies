import { fetchMovieDetailsById } from 'Api/Api';
import AboutMovie from 'components/AboutMovie/AboutMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState('');

  useEffect(() => {
    async function fetch() {
      try {
        const {
          title,
          overview,
          genres,
          poster_path,
          vote_average,
          release_date,
        } = await fetchMovieDetailsById(movieId);
        const movieDetails = {
          title,
          overview,
          genres,
          poster_path,
          vote_average,
          release_date,
        };

        setDetails(movieDetails);

        // console.log(movieDetails);
      } catch (error) {
        console.warn(error);
      }
    }
    fetch();
  }, []);
  //   console.log(details);
  return <AboutMovie details={details} />;
};

export default MovieDetails;
