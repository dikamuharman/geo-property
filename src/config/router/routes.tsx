import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../../layout/HomeLayout';
import SearchLayout from '../../layout/SearchLayout';
import DetailPage from '../../pages/DetailPage';
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
      {
        path: 'detail/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
