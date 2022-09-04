import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
      <header className={classes.header}>
        <div className = {classes.logo}>vitamin777 board</div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/quotes">
                모든 게시글
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/new-quote">
                새 게시글 추가
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

  );
};
export default MainNavigation;
