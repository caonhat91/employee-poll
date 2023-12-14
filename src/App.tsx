import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';

import Layout from './components/Templates/Layout';
import NoMatch from './components/Templates/NoMatch';
import Auth from './components/Templates/Auth';
import SingIn from './components/Pages/SingIn/SingIn';

const HomePage = lazy(() => import('./components/Pages/Home/Home'));
const LeaderboardPage = lazy(() => import('./components/Pages/Leaderboard/Leaderboard'));
const NewPage = lazy(() => import('./components/Pages/New/New'));
const PollDetailPage = lazy(() => import('./components/Pages/PollDetail/PollDetail'));

export default function App() {
  const location = useLocation();
  const [prevUrl, setPrevUrl] = useState<string>();

  useEffect(() => {
    setPrevUrl(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route
        path="login"
        element={
          <SingIn prevRouter={prevUrl} />
        }
      />
      <Route path='/' id='root' element={
        <Auth><Layout /></Auth>
      }>
        <Route index
          element={
            <Suspense fallback={<>...</>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="leaderboard"
          element={
            <Suspense fallback={<>...</>}>
              <LeaderboardPage />
            </Suspense>
          }
        />
        <Route
          path="add"
          element={
            <Suspense fallback={<>...</>}>
              <NewPage />
            </Suspense>
          }
        />
        <Route
          path="questions/:questionId"
          element={
            <Suspense fallback={<>...</>}>
              <PollDetailPage />
            </Suspense>
          }
        />
      </Route>
      {/** ----- */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
