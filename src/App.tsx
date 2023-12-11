import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './components/Templates/Layout';
import NoMatch from './components/Templates/NoMatch';
import Auth from './components/Templates/Auth';

const HomePage = lazy(() => import('./components/Pages/Home/Home'));
const LeaderboardPage = lazy(() => import('./components/Pages/Leaderboard/Leaderboard'));
const NewPage = lazy(() => import('./components/Pages/New/New'));
const SingInPage = lazy(() => import('./components/Pages/SingIn/SingIn'));
const PollDetailPage = lazy(() => import('./components/Pages/PollDetail/PollDetail'));

export default function App() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <Suspense fallback={<>...</>}>
            <SingInPage />
          </Suspense>
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
          path="new"
          element={
            <Suspense fallback={<>...</>}>
              <NewPage />
            </Suspense>
          }
        />
        <Route
          path="questions/:question_id"
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
