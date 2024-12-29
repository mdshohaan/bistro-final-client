import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import './index.css';
import { Router } from './Routes/Router.jsx';

createRoot(document.getElementById('root')).render(
 <div className='container mx-auto'>
   <StrictMode>
      <RouterProvider router={Router} />
  </StrictMode>,
 </div>
)
