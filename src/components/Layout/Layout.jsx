import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from 'Style.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Header />
      </header>
      <main>
        <Suspense fallback={<div className={css.suspense}>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
