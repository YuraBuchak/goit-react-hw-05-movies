import { useSearchParams } from 'react-router-dom';

const SerchMovie = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      window.alert('Write smth!');
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={updateQueryString} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SerchMovie;
