import { useRef, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';

import classes from './NewCommentForm.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = props => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddedComment } = props;
  useEffect(() => {
    /*에러가 없고 요청 완료시 onAddedComment Fn 호출*/
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status,error,onAddedComment]);

  const submitFormHandler = event => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;
    sendRequest({
      commentData: {
        text: enteredText,
        quoteId: props.quoteId,
      },
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {/*리퀘스트 진행 중일때 로딩 스피너*/}
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">당신의 댓글</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">댓글 추가</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
