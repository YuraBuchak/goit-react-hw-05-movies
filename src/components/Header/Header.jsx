import { NavLink } from 'react-router-dom';
import css from 'Style.module.css';

export const Header = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.navigationList}>
        <li className={css.navigationItem}>
          <NavLink to="/" className={css.navigationSpan}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={css.navigationSpan}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
