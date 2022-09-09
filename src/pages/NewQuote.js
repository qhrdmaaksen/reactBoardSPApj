import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';

const NewQuote = () => {
  const history = useHistory();
  /*status 는 요청 상태
   * -new quote 를 추가하는 요청 보내지는지 확인*/
  const { sendRequest, status } = useHttp(addQuote);

  /*경로 탐색*/
  useEffect(() => {
    /*요청 성공했다면*/
    if (status === 'completed') {
      /*request 가 완료되는즉시 경로를 탐색함*/
      /*페이지를 불러올수있는 useHistory 활용해 stack 에있는 push 로 /quotes 경로 지정
       * -quotes 로 이동하도록 하였으며 push 를 사용했기때문에 사용자는 뒤로가기가 가능함
       * -뒤로가기 불가를 하고 싶다면 push 가 아닌 replace stack 을 사용하면됨*/
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = quoteData => {
    console.log(quoteData);
    /*addQuote request send*/
    sendRequest(quoteData);
  };
  /*status 가 pending 과 같다면 true 설정*/
  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
