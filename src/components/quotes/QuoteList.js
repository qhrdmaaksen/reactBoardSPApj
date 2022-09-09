import {Fragment} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

/*이 함수는 인용문 배열을 id로 정렬해 주며 오름차순, 내림차순으로 정렬해서,
그다음 오름차순, 내림차순으로 정렬해서, 더 크거나 작은 id를 상위에 띄워줌
sortQuotes 를 통해 이 컴포넌트 함수에서 정렬된 인용문을 띄울 수 있게됨
sortQuotes 가 렌더링 될 때마다 정렬된 인용문이 뜸*/
const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = props => {
	const history = useHistory();
	const location = useLocation();
	console.log(location);

	/*쿼리 매개 변수 key, value 를 가져올 객체 queryParams*/
	const queryParams = new URLSearchParams(location.search);

	/*location 의 search 에서 추출한 key sort 의 value 가 asc 인지 desc 인지*/
	const isSortingAscending = queryParams.get('sort') === 'asc';

	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

	/*쿼리 매개 변수가 true(asc) false(desc) 인지에따라 변환*/
	const changeSortingHandler = () => {
		history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
	};

	return (
			<Fragment>
				<div className={classes.sorting}>
					<button onClick={changeSortingHandler}>
						Sort {isSortingAscending ? 'Descending' : 'Ascending'}
					</button>
				</div>
				<ul className={classes.list}>
					{sortedQuotes.map(quote => (
							<QuoteItem
									key={quote.id}
									id={quote.id}
									author={quote.author}
									text={quote.text}
							/>
					))}
				</ul>
			</Fragment>
	);
};

export default QuoteList;
