import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Rootlayouts from './components/layouts/Rootlayouts'
const Home = React.lazy(() => import("/src/components/pages/Home"));
const About = React.lazy(() => import("/src/components/pages/About"));
const Shop = React.lazy(() => import("/src/components/pages/Shop"));
const Blog = React.lazy(() => import("/src/components/pages/Blog"));
const Contact = React.lazy(() => import("/src/components/pages/Contact"));
const Error = React.lazy(() => import("/src/components/pages/Error"));


function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayouts />}>
          <Route index element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
          <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App