import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from 'Style.module.css';

const SerchMovie = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryUrl = event => {
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
    <form className={css.from} onSubmit={handleSubmit}>
      <label className={css.fromLabel}>
        <input
          className={css.fromInput}
          type="text"
          value={query}
          onChange={updateQueryUrl}
        />
      </label>

      <button className={css.btnSubmit} type="submit">
        Search
      </button>
    </form>
  );
};

export default SerchMovie;

SerchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
