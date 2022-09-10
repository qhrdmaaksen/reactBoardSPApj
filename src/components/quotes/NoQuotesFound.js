import classes from './NoQuotesFound.module.css';
import {Link} from "react-router-dom";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>게시글이 존재하지 않습니다!</p>
      <Link className='btn' to='/new-quote'>
        게시글 추가하기
      </Link>
    </div>
  );
};

export default NoQuotesFound;
