import { createBrowserRouter } from 'react-router-dom';
import {
  Layout,
  Login,
  DashboardLayout,

} from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
         element: <DashboardLayout />,    
        
        },
      
      {
        path: 'login',
        element: <Login />,
      }
     
    ],
  },

  
]);

export default router;
