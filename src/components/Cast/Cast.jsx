import { fetchCredits } from 'Api/Api';
import { useEffect, useState } from 'react';
import css from 'Style.module.css';

const { useParams } = require('react-router-dom');
const defaultImg =
  'https://cdn-icons-png.flaticon.com/512/847/847969.png?w=740&t=st=1685547292~exp=1685547892~hmac=2825f00d1a2c61ae503ac799344847357b8a6baa8b9db6ee1132a6431b92254c';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const { cast } = await fetchCredits(movieId);

        const filteredCast = cast.map(
          ({ name, character, profile_path, id }) => {
            return { name, character, profile_path, id };
          }
        );

        setCast(filteredCast);
      } catch (error) {
        console.warn(error);
      }
    }
    fetch();
  }, [movieId]);

  return (
    <>
      <ul className={css.castList}>
        {cast?.map(({ name, character, profile_path, id }) => (
          <li className={css.castItem} key={id}>
            <div>
              <img
                className={css.castImg}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <p className={css.castListInfo}>{name}</p>
              <p className={css.castListInfo}>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
