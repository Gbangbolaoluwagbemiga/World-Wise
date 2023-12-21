import styles from './SideBar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
import {Outlet} from 'react-router-dom';

function sideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          {' '}
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default sideBar;
