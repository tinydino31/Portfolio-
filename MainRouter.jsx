import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './src/About'
import Contact from './src/contact'

import Project from './src/project'
import Layout from './Components/Layout'
import Services from './src/Services'

const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
 <Route exact path="/" element={<Home />} />
 <Route exact path="/about" element={<About />} />
 <Route exact path="/services" element={<Services />} />
 <Route exact path="/project" element={<Project />} />
 <Route exact path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
)
}
export default MainRouter