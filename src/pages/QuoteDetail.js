import {Fragment} from 'react';
import {Route, useParams} from 'react-router-dom';
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  console.log('QuoteDetail :::', params.quoteId);
  return (
    <Fragment>
      <h1>게시글 상세 보기</h1>
			<p>{params.quoteId}</p>
			{/*중첩 라우트로 동적 라우팅 설정*/}
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
    </Fragment>
  );
};
export default QuoteDetail;
