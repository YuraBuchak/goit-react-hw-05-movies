import { Link } from 'react-router-dom';
import css from 'Style.module.css';

const MovieList = ({ movie, locationBack }) => {
  return (
    <ul className={css.trendList}>
      {movie?.map(({ id, title }) => (
        <li key={id} className={css.trendItem}>
          <Link
            className={css.trendSpan}
            to={`/movies/${id}`}
            state={{ from: locationBack }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

// MovieList.propTypes = {
//   movie: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ),
// };
