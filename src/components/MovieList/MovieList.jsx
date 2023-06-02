import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from 'Style.module.css';

const MovieList = ({ movie }) => {
  const location = useLocation();
  return (
    <ul className={css.trendList}>
      {movie?.map(({ id, title }) => (
        <li key={id} className={css.trendItem}>
          <Link
            className={css.trendSpan}
            to={`${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
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
