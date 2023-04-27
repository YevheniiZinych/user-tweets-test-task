import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { HomePage } from 'pages/HomePage/HomePage';
import { TweetsPage } from 'pages/TweetsPage/TweetsPage';
import { Layout } from 'components/Layout';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
