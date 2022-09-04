import { Fragment } from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

/*이 컴포넌트의 목표는 MainNavigation 을 실제 페이지 콘텐츠와 나란히 렌더링하는 것*/
const Layout = props => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
