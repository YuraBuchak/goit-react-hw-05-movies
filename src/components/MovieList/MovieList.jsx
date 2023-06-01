import { Link } from 'react-router-dom';

const MovieList = ({ movie }) => {
  return (
    <ul>
      {movie?.map(({ id, title }) => (
        <Link key={id} to={`${id}`}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
