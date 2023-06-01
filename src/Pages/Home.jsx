import { fetchTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trends, setTrends] = useState([]);

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
    <>
      <h1>Trendings</h1>
      <ul>
        {trends?.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
