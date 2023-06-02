import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';

const AboutMovie = ({ details }) => {
  const { title, overview, genres, poster_path, vote_average, release_date } =
    details;

  const Img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  // const defaultImg =
  //   'https://cdn-icons-png.flaticon.com/512/758/758732.png?w=740&t=st=1685548023~exp=1685548623~hmac=5a38f26a8fb5051fdd8b73bf82dd2cf5ba04af6209eae24587bc748010483bce';
  const rate = Math.round(Number(vote_average) * 10);
  return (
    <>
      <div>
        <img src={Img} alt={title} />
        {/* <img src={poster_path ? Img : defaultImg} alt={title} /> */}
        <div>
          <h3>
            {title} ({release_date})
          </h3>
          <p>User score: {rate}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h5>Genres:</h5>
          <p>
            {genres?.map(({ id, name }) => (
              <span key={id}> {name}</span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Revievs</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AboutMovie;

// AboutMovie.propTypes = {
//   details: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     overview: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//       })
//     ),
//     poster_path: PropTypes.string.isRequired,
//     vote_average: PropTypes.number.isRequired,
//     release_date: PropTypes.string.isRequired,
//   }).isRequired,
// };
