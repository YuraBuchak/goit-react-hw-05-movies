import { fetchTrending } from 'Api/Api';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from 'Style.module.css';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetch() {
      try {
        const { results } = await fetchTrending();
        const filteredTrends = results.map(({ id, title }) => {
          return { id, title };
        });
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
      <MovieList movie={trends} locationBack={location} />
    </div>
  );
};

export default Home;
