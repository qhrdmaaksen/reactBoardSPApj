import { Fragment, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { getSingleQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';

/*const DUMMY_DATA = [
  {
    id: 'u1',
    author: 'min',
    text: 'min is very nice',
  },
  {
    id: 'u2',
    author: 'vitamin',
    text: 'vitamin is very nice',
  },
  {
    id: 'u3',
    author: 'vitamin777',
    text: 'vitamin777 is very nice',
  },
];*/

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  /*params 에 access 가있기때문에 quoteId 를 객체 분해해서 가져옴
   * -많은 파라미터가있다면 useEffect 에서 계속 리렌더링하기에 구조분해하는게 좋음*/
  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  /*상태처리*/
  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === 'error'){
    return (
        <p className="centered">{error}</p>
    )
  }
  if (!loadedQuote.text){
    return <p>게시글을 찾을 수 없습니다.</p>
  }

  /*/!*params 는 /quotes 가 들어가며 그 이후	quoteId 는 App.js 에서 설정해놓은 url 의 quoteId 임
   * --url 에 들어온 id 와 게시글 목록의 id 가 같다면 quote 에 대입*!/
  const quote = loadedQuote.find(quote => quote.id === params.quoteId);
  /!*url 에 직접 존재하지않는 quote.id 를 입력하여 검색 시*!/
  if (!quote) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }*/
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/*URL 을 근거로 다른 콘텐츠를 상황에 따라 렌더함*/}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            댓글 불러오기
          </Link>
        </div>
      </Route>
      {/*중첩 라우트로 동적 라우팅 설정*/}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
