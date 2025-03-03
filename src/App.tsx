import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Learn from './Pages/Learn';
import BlogDetail from './Pages/BlogDetails';
import Services from './Pages/Services';
import WhyGate from './Pages/WhyGate';
import Solutions from './Pages/Solutions';
import Pricing from './Pages/Pricing';
import AboutUs from './Pages/AboutUs';
import GetInTouch from './Pages/GetInTouch';
import Videos from './Pages/Videos';

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: 'get-in-touch',
    element: <GetInTouch />,
    errorElement: <Error />,
  },
  {
    path: 'services',
    element: <Services />,
    errorElement: <Error />,
  },
  {
    path: 'why-gate',
    element: <WhyGate />,
    errorElement: <Error />,
  },
  {
    path: 'solutions',
    element: <Solutions />,
    errorElement: <Error />,
  },
  {
    path: 'pricing',
    element: <Pricing />,
    errorElement: <Error />,
  },
  {
    path: 'about-us',
    element: <AboutUs />,
    errorElement: <Error />,
  },
  {
    path: 'learn',
    element: <Learn />,
    errorElement: <Error />,
  },
  {
    path: 'videos',
    element: <Videos />,
    errorElement: <Error />,
  },
  {
    path: 'blog-details/:id',
    element: <BlogDetail />,
    errorElement: <Error />,
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
