import React from 'react'
import { Container } from "@material-ui/core"
import Home from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/auth" exact component={Auth} />
          <Route path="/" exact component={Home} />
        </Routes>
        <Home />
      </Container >
    </BrowserRouter>

  );
}

export default App
