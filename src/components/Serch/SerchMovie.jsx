import PropTypes from 'prop-types';
import css from 'Style.module.css';

const SerchMovie = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.input.value;
    if (query === '') {
      window.alert('Write smth!');
      return;
    }
    onSubmit(query);
  };

  return (
    <form className={css.from} onSubmit={handleSubmit}>
      <label className={css.fromLabel}>
        <input className={css.fromInput} type="text" name="input" />
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
