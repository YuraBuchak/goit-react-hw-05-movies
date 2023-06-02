import { fetchMovieDetailsById } from 'Api/Api';
import AboutMovie from 'components/AboutMovie/AboutMovie';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import css from 'Style.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});

  const location = useLocation();
  const btnBack = useRef(location.state?.from ?? '/movies');

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
  }, [movieId]);
  //   console.log(details);
  return (
    <>
      <Link to={btnBack.current} className={css.btnBack}>
        Back
      </Link>
      <AboutMovie details={details} />
    </>
  );
};

export default MovieDetails;
