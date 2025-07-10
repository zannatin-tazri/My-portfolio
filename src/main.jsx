import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Router.jsx'
import React from 'react'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto '>
      <RouterProvider router={router}/>
    </div>
    
  </React.StrictMode>,
)
