import React from 'react'
import Nav from './Components/Nav'
import Get from './Components/Get'
import Post from './Components/Post'

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Nav/>
      <Routes>
        <Route exact path="/" element={<Get/>} />
        <Route exact path="/post" element={<Post/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App