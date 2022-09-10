import QuoteList from '../components/quotes/QuoteList';
import { getAllQuotes } from '../lib/api';
import useHttp from '../hooks/use-http';
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

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
const AllQuotes = () => {
  /*상태가 보류중이라는것을 컨트롤함*/
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

	/*useEffect 후크를 사용해서 해당 컴포넌트가 로드될 때 실제로 해당 리퀘스트를 보내도록 함*/
	useEffect(()=> {
		/*component rendering 될때마다 request 보냄*/
		sendRequest();
	}, [sendRequest])

	/*상태 처리*/
	/*보류중일때 로딩 스피너 출력*/
	if (status === 'pending') {
		return <div className="centered">
			<LoadingSpinner />
		</div>
	}
/*에러 발생 시*/
	if(status === 'error'){
		return <p className = 'centered focused'>
			{error}
		</p>
	}

	/*요청 상태가 완료되었지만 로드된 게시글이 없다면*/
	if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
		return <NoQuotesFound />
	}

  return (
    <div>
      <h1>모든 게시물 페이지</h1>
      <QuoteList quotes={loadedQuotes} />
    </div>
  );
};
export default AllQuotes;
