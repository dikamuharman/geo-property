import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../../layout/HomeLayout';
import HomePage from '../../pages/HomePage';

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
]);

export default router;
