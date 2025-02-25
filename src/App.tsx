import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Learn from './Pages/Learn';
import BlogDetail from './Pages/BlogDetails';
import Capabilities from './Pages/CapabilitiesTargeting';
import CapabilitiesMeasurement from './Pages/CapabilitiesMeasurement';
import CapabilitiesExecution from './Pages/CapabilitiesExecution';
import GetPostie from './Pages/GetPostie';
import WeHelpWithProspecting from './Pages/WeHelpWithProspecting';
import WeHelpWithRetargeting from './Pages/WeHelpWithRetargeting';
import WeHelpWithReengagement from './Pages/WeHelpWithReengagement';
import Services from './Pages/Services';
import WhyGate from './Pages/WhyGate';
import Solutions from './Pages/Solutions';

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
    path: 'get-postie',
    element: <GetPostie />,
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
    element: <CapabilitiesExecution />,
    errorElement: <Error />,
  },
  {
    path:'capabilities/measurement',
    element: <CapabilitiesMeasurement />,
    errorElement: <Error />,
  },
  {
    path:'we-help-with/prospecting',
    element: <WeHelpWithProspecting />,
    errorElement: <Error />,
  },
  {
    path:'we-help-with/retargeting',
    element: <WeHelpWithRetargeting />,
    errorElement: <Error />,
  },
  {
    path:'we-help-with/crm-reengagement',
    element: <WeHelpWithReengagement />,
    errorElement: <Error />,
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
