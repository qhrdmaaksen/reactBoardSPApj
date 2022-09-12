import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
/*import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';*/
/*import NewQuote from './pages/NewQuote';*/
import Layout from './components/layout/Layout';
/*import NotFound from './pages/NotFound';*/
import LoadingSpinner from './components/UI/LoadingSpinner';

/*React.lazy 에 전달하는 이 함수는 이 새 쿼트 컴포넌트가 필요할 때 React 에 의해 실행됨
이것이 일반적으로 import 할때와의 핵심적인 차이점임 코드를 미리 다운로드하기 위해 미리 실행하지 않고 필요할 때만 실행*/
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const NotFound = React.lazy(()=> import('./pages/NotFound'))
const QuoteDetail = React.lazy(()=> import('./pages/QuoteDetail'))
const AllQuotes = React.lazy(()=>import('./pages/AllQuotes'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          {/*URL 에 인용 식별자를 인코딩하여 로드된 컴포넌트 내부에서 가져옴*/}
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
