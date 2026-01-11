import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/AboutUs/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import Product from './components/Products/Product.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
        <Route path = '' element={<Product/>}/>
        <Route path = 'contact' element={<Contact/>}/>
        <Route path = 'about' element={<About/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
