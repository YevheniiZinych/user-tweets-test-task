import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from 'components/GlobalStyle';
import { HomePage } from 'pages/HomePage/HomePage';
import { TweetsPage } from 'pages/TweetsPage/TweetsPage';
import { Layout } from 'components/Layout';
import { fetchUsers } from 'redux/userSlice/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
