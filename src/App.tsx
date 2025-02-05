import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Error from './Pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
