import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../../layout/HomeLayout';
import SearchLayout from '../../layout/SearchLayout';
import HomePage from '../../pages/HomePage';
import SearchPage from '../../pages/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/search',
    element: <SearchLayout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
