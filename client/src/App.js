import React from 'react'
import { Container } from "@material-ui/core"
import Home from './components/Home/Home.js'
import { Navbar } from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container >
    </BrowserRouter>
  );
}

export default App;
