import {Fragment} from 'react';
import {Route, useParams} from 'react-router-dom';
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetail = () => {
  const params = useParams();
	const DUMMY_DATA = [
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
	];
	/*params 는 /quotes 가 들어가며 그 이후	quoteId 는 App.js 에서 설정해놓은 url 의 quoteId 임
	* --url 에 들어온 id 와 게시글 목록의 id 가 같다면 quote 에 대입*/
	const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId)
	/*url 에 직접 존재하지않는 quote.id 를 입력하여 검색 시*/
	if (!quote){
		return (
				<p>게시글을 찾을 수 없습니다.</p>
		)
	}
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
			{/*중첩 라우트로 동적 라우팅 설정*/}
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
    </Fragment>
  );
};
export default QuoteDetail;
