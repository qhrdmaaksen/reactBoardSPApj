import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = quoteData => {
    console.log(quoteData);
		/*페이지를 불러올수있는 useHistory 활용해 stack 에있는 push 로 /quotes 경로 지정
		* -quotes 로 이동하도록 하였으며 push 를 사용했기때문에 사용자는 뒤로가기가 가능함
		* -뒤로가기 불가를 하고 싶다면 push 가 아닌 replace stack 을 사용하면됨*/
    history.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
