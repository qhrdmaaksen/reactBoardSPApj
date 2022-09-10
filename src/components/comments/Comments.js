import {useCallback, useEffect, useState} from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;
  const { sendRequest, status, data: loadedComments, error } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  /*결국 상위 컴포넌트가 다시 렌더링될 때마다 다시 생성될 것을 방지하기위해 useCallback 사용
  * 컴포넌트가 재평가될 때마다 이 함수가 다시 생성되지 않도록 하는 것,그래서 불필요한 재렌더링 주기와
  * 무한 루프를 방지하기 위해 useCallback 사용*/
  const addedCommentHandler = useCallback(()=> {
    sendRequest(quoteId)
  },[sendRequest,quoteId]);

  let comments;
  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === 'completed' && !error && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }
  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className="centered">아직 추가된 댓글이 없습니다.</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>사용자 댓글</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          댓글 추가
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
