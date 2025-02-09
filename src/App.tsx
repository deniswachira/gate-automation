import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Learn from './Pages/Learn';
import BlogDetail from './Pages/BlogDetails';
import Capabilities from './Pages/Capabilities';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: 'learn',
    element: <Learn />,
    errorElement: <Error />,
  },
  {
    path: 'blog-details/:id',
    element: <BlogDetail />,
    errorElement: <Error />,
  },
  {
    path:'capabilities/targeting',
    element: <Capabilities />,
    errorElement: <Error />,
  },
  {
    path:'capabilities/execution',
    element: <Capabilities />,
    errorElement: <Error />,
  },
  {
    path:'capabilities/measurement',
    element: <Capabilities />,
    errorElement: <Error />,
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
