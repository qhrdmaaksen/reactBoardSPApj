import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>vitamin board</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/quoteList">모든 게시글</NavLink>
            </li>
            <li>
              <NavLink to="/quoteForm">새 게시글 추가</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default MainNavigation;
