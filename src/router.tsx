import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import ForOForPage from './pages/for-o-for.page';
import TopNewsPage from './pages/top-news.page';
import CategoriesPage from './pages/categories.page';
import SearchNewsPage from './pages/search-news.page';
import CategoryPage from './pages/category.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TopNewsPage />,
      },
      {
        path: '/categories',
        element: <CategoriesPage />,
      },
      {
        path: '/categories/:categoryKey',
        element: <CategoryPage />,
      },
      {
        path: '/search',
        element: <SearchNewsPage />,
      },
      {
        path: '*',
        element: <ForOForPage />,
      },
    ],
  },
]);
