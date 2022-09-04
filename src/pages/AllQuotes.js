import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = () => {
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
  return (
    <div>
      <h1>모든 게시물 페이지</h1>
      <QuoteList quotes={DUMMY_DATA} />
    </div>
  );
};
export default AllQuotes;
