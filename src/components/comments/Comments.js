import { useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  return (
    <section className={classes.comments}>
      <h2>사용자 댓글</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          댓글 추가
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>댓글...</p>
    </section>
  );
};

export default Comments;
