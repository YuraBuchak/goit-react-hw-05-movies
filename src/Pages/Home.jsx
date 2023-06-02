import { fetchTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from 'Style.module.css';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetch() {
      try {
        const { results } = await fetchTrending();
        // console.log(results);
        const filteredTrends = results.map(({ id, title }) => {
          return { id, title };
        });

        // console.log(filteredTrends);
        setTrends(filteredTrends);
      } catch (error) {
        console.warn(error);
      }
    }

    fetch();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.homeTitle}>Trendings</h1>
      <ul className={css.trendList}>
        {trends?.map(({ id, title }) => {
          return (
            <li key={id} className={css.trendItem}>
              <Link
                to={`movies/${id}`}
                state={{ from: location }}
                className={css.trendSpan}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
