import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movie }) => {
  const location = useLocation();
  return (
    <ul>
      {movie?.map(({ id, title }) => (
        <Link key={id} to={`${id}`} state={{ from: location }}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
